(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();function Dm(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var pc={exports:{}},Co={},mc={exports:{}},dt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function q_(){if(Mp)return dt;Mp=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function x(F){return F===null||typeof F!="object"?null:(F=v&&F[v]||F["@@iterator"],typeof F=="function"?F:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,A={};function y(F,se,De){this.props=F,this.context=se,this.refs=A,this.updater=De||S}y.prototype.isReactComponent={},y.prototype.setState=function(F,se){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,se,"setState")},y.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function g(){}g.prototype=y.prototype;function D(F,se,De){this.props=F,this.context=se,this.refs=A,this.updater=De||S}var P=D.prototype=new g;P.constructor=D,w(P,y.prototype),P.isPureReactComponent=!0;var C=Array.isArray,V=Object.prototype.hasOwnProperty,I={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function z(F,se,De){var te,fe={},Se=null,_e=null;if(se!=null)for(te in se.ref!==void 0&&(_e=se.ref),se.key!==void 0&&(Se=""+se.key),se)V.call(se,te)&&!U.hasOwnProperty(te)&&(fe[te]=se[te]);var we=arguments.length-2;if(we===1)fe.children=De;else if(1<we){for(var qe=Array(we),Ge=0;Ge<we;Ge++)qe[Ge]=arguments[Ge+2];fe.children=qe}if(F&&F.defaultProps)for(te in we=F.defaultProps,we)fe[te]===void 0&&(fe[te]=we[te]);return{$$typeof:o,type:F,key:Se,ref:_e,props:fe,_owner:I.current}}function b(F,se){return{$$typeof:o,type:F.type,key:se,ref:F.ref,props:F.props,_owner:F._owner}}function T(F){return typeof F=="object"&&F!==null&&F.$$typeof===o}function k(F){var se={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(De){return se[De]})}var J=/\/+/g;function Q(F,se){return typeof F=="object"&&F!==null&&F.key!=null?k(""+F.key):se.toString(36)}function ce(F,se,De,te,fe){var Se=typeof F;(Se==="undefined"||Se==="boolean")&&(F=null);var _e=!1;if(F===null)_e=!0;else switch(Se){case"string":case"number":_e=!0;break;case"object":switch(F.$$typeof){case o:case e:_e=!0}}if(_e)return _e=F,fe=fe(_e),F=te===""?"."+Q(_e,0):te,C(fe)?(De="",F!=null&&(De=F.replace(J,"$&/")+"/"),ce(fe,se,De,"",function(Ge){return Ge})):fe!=null&&(T(fe)&&(fe=b(fe,De+(!fe.key||_e&&_e.key===fe.key?"":(""+fe.key).replace(J,"$&/")+"/")+F)),se.push(fe)),1;if(_e=0,te=te===""?".":te+":",C(F))for(var we=0;we<F.length;we++){Se=F[we];var qe=te+Q(Se,we);_e+=ce(Se,se,De,qe,fe)}else if(qe=x(F),typeof qe=="function")for(F=qe.call(F),we=0;!(Se=F.next()).done;)Se=Se.value,qe=te+Q(Se,we++),_e+=ce(Se,se,De,qe,fe);else if(Se==="object")throw se=String(F),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.");return _e}function Y(F,se,De){if(F==null)return F;var te=[],fe=0;return ce(F,te,"","",function(Se){return se.call(De,Se,fe++)}),te}function ne(F){if(F._status===-1){var se=F._result;se=se(),se.then(function(De){(F._status===0||F._status===-1)&&(F._status=1,F._result=De)},function(De){(F._status===0||F._status===-1)&&(F._status=2,F._result=De)}),F._status===-1&&(F._status=0,F._result=se)}if(F._status===1)return F._result.default;throw F._result}var ae={current:null},O={transition:null},ue={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:O,ReactCurrentOwner:I};function oe(){throw Error("act(...) is not supported in production builds of React.")}return dt.Children={map:Y,forEach:function(F,se,De){Y(F,function(){se.apply(this,arguments)},De)},count:function(F){var se=0;return Y(F,function(){se++}),se},toArray:function(F){return Y(F,function(se){return se})||[]},only:function(F){if(!T(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},dt.Component=y,dt.Fragment=n,dt.Profiler=a,dt.PureComponent=D,dt.StrictMode=r,dt.Suspense=p,dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,dt.act=oe,dt.cloneElement=function(F,se,De){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var te=w({},F.props),fe=F.key,Se=F.ref,_e=F._owner;if(se!=null){if(se.ref!==void 0&&(Se=se.ref,_e=I.current),se.key!==void 0&&(fe=""+se.key),F.type&&F.type.defaultProps)var we=F.type.defaultProps;for(qe in se)V.call(se,qe)&&!U.hasOwnProperty(qe)&&(te[qe]=se[qe]===void 0&&we!==void 0?we[qe]:se[qe])}var qe=arguments.length-2;if(qe===1)te.children=De;else if(1<qe){we=Array(qe);for(var Ge=0;Ge<qe;Ge++)we[Ge]=arguments[Ge+2];te.children=we}return{$$typeof:o,type:F.type,key:fe,ref:Se,props:te,_owner:_e}},dt.createContext=function(F){return F={$$typeof:f,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:u,_context:F},F.Consumer=F},dt.createElement=z,dt.createFactory=function(F){var se=z.bind(null,F);return se.type=F,se},dt.createRef=function(){return{current:null}},dt.forwardRef=function(F){return{$$typeof:d,render:F}},dt.isValidElement=T,dt.lazy=function(F){return{$$typeof:_,_payload:{_status:-1,_result:F},_init:ne}},dt.memo=function(F,se){return{$$typeof:m,type:F,compare:se===void 0?null:se}},dt.startTransition=function(F){var se=O.transition;O.transition={};try{F()}finally{O.transition=se}},dt.unstable_act=oe,dt.useCallback=function(F,se){return ae.current.useCallback(F,se)},dt.useContext=function(F){return ae.current.useContext(F)},dt.useDebugValue=function(){},dt.useDeferredValue=function(F){return ae.current.useDeferredValue(F)},dt.useEffect=function(F,se){return ae.current.useEffect(F,se)},dt.useId=function(){return ae.current.useId()},dt.useImperativeHandle=function(F,se,De){return ae.current.useImperativeHandle(F,se,De)},dt.useInsertionEffect=function(F,se){return ae.current.useInsertionEffect(F,se)},dt.useLayoutEffect=function(F,se){return ae.current.useLayoutEffect(F,se)},dt.useMemo=function(F,se){return ae.current.useMemo(F,se)},dt.useReducer=function(F,se,De){return ae.current.useReducer(F,se,De)},dt.useRef=function(F){return ae.current.useRef(F)},dt.useState=function(F){return ae.current.useState(F)},dt.useSyncExternalStore=function(F,se,De){return ae.current.useSyncExternalStore(F,se,De)},dt.useTransition=function(){return ae.current.useTransition()},dt.version="18.3.1",dt}var Ep;function zf(){return Ep||(Ep=1,mc.exports=q_()),mc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tp;function Y_(){if(Tp)return Co;Tp=1;var o=zf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(d,p,m){var _,v={},x=null,S=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(S=p.ref);for(_ in p)r.call(p,_)&&!u.hasOwnProperty(_)&&(v[_]=p[_]);if(d&&d.defaultProps)for(_ in p=d.defaultProps,p)v[_]===void 0&&(v[_]=p[_]);return{$$typeof:e,type:d,key:x,ref:S,props:v,_owner:a.current}}return Co.Fragment=n,Co.jsx=f,Co.jsxs=f,Co}var wp;function $_(){return wp||(wp=1,pc.exports=Y_()),pc.exports}var me=$_(),kt=zf();const K_=Dm(kt);var Ka={},gc={exports:{}},Ln={},_c={exports:{}},vc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap;function Z_(){return Ap||(Ap=1,(function(o){function e(O,ue){var oe=O.length;O.push(ue);e:for(;0<oe;){var F=oe-1>>>1,se=O[F];if(0<a(se,ue))O[F]=ue,O[oe]=se,oe=F;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var ue=O[0],oe=O.pop();if(oe!==ue){O[0]=oe;e:for(var F=0,se=O.length,De=se>>>1;F<De;){var te=2*(F+1)-1,fe=O[te],Se=te+1,_e=O[Se];if(0>a(fe,oe))Se<se&&0>a(_e,fe)?(O[F]=_e,O[Se]=oe,F=Se):(O[F]=fe,O[te]=oe,F=te);else if(Se<se&&0>a(_e,oe))O[F]=_e,O[Se]=oe,F=Se;else break e}}return ue}function a(O,ue){var oe=O.sortIndex-ue.sortIndex;return oe!==0?oe:O.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();o.unstable_now=function(){return f.now()-d}}var p=[],m=[],_=1,v=null,x=3,S=!1,w=!1,A=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(O){for(var ue=n(m);ue!==null;){if(ue.callback===null)r(m);else if(ue.startTime<=O)r(m),ue.sortIndex=ue.expirationTime,e(p,ue);else break;ue=n(m)}}function C(O){if(A=!1,P(O),!w)if(n(p)!==null)w=!0,ne(V);else{var ue=n(m);ue!==null&&ae(C,ue.startTime-O)}}function V(O,ue){w=!1,A&&(A=!1,g(z),z=-1),S=!0;var oe=x;try{for(P(ue),v=n(p);v!==null&&(!(v.expirationTime>ue)||O&&!k());){var F=v.callback;if(typeof F=="function"){v.callback=null,x=v.priorityLevel;var se=F(v.expirationTime<=ue);ue=o.unstable_now(),typeof se=="function"?v.callback=se:v===n(p)&&r(p),P(ue)}else r(p);v=n(p)}if(v!==null)var De=!0;else{var te=n(m);te!==null&&ae(C,te.startTime-ue),De=!1}return De}finally{v=null,x=oe,S=!1}}var I=!1,U=null,z=-1,b=5,T=-1;function k(){return!(o.unstable_now()-T<b)}function J(){if(U!==null){var O=o.unstable_now();T=O;var ue=!0;try{ue=U(!0,O)}finally{ue?Q():(I=!1,U=null)}}else I=!1}var Q;if(typeof D=="function")Q=function(){D(J)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,Y=ce.port2;ce.port1.onmessage=J,Q=function(){Y.postMessage(null)}}else Q=function(){y(J,0)};function ne(O){U=O,I||(I=!0,Q())}function ae(O,ue){z=y(function(){O(o.unstable_now())},ue)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_continueExecution=function(){w||S||(w=!0,ne(V))},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_getFirstCallbackNode=function(){return n(p)},o.unstable_next=function(O){switch(x){case 1:case 2:case 3:var ue=3;break;default:ue=x}var oe=x;x=ue;try{return O()}finally{x=oe}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(O,ue){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var oe=x;x=O;try{return ue()}finally{x=oe}},o.unstable_scheduleCallback=function(O,ue,oe){var F=o.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?F+oe:F):oe=F,O){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=oe+se,O={id:_++,callback:ue,priorityLevel:O,startTime:oe,expirationTime:se,sortIndex:-1},oe>F?(O.sortIndex=oe,e(m,O),n(p)===null&&O===n(m)&&(A?(g(z),z=-1):A=!0,ae(C,oe-F))):(O.sortIndex=se,e(p,O),w||S||(w=!0,ne(V))),O},o.unstable_shouldYield=k,o.unstable_wrapCallback=function(O){var ue=x;return function(){var oe=x;x=ue;try{return O.apply(this,arguments)}finally{x=oe}}}})(vc)),vc}var Rp;function Q_(){return Rp||(Rp=1,_c.exports=Z_()),_c.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cp;function J_(){if(Cp)return Ln;Cp=1;var o=zf(),e=Q_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},v={};function x(t){return p.call(v,t)?!0:p.call(_,t)?!1:m.test(t)?v[t]=!0:(_[t]=!0,!1)}function S(t,i,s,l){if(s!==null&&s.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,s,l){if(i===null||typeof i>"u"||S(t,i,s,l))return!0;if(l)return!1;if(s!==null)switch(s.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(t,i,s,l,c,h,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=s,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new A(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new A(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new A(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new A(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new A(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new A(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new A(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new A(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new A(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function D(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,D);y[i]=new A(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,D);y[i]=new A(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,D);y[i]=new A(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new A(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new A(t,1,!1,t.toLowerCase(),null,!0,!0)});function P(t,i,s,l){var c=y.hasOwnProperty(i)?y[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,s,c,l)&&(s=null),l||c===null?x(i)&&(s===null?t.removeAttribute(i):t.setAttribute(i,""+s)):c.mustUseProperty?t[c.propertyName]=s===null?c.type===3?!1:"":s:(i=c.attributeName,l=c.attributeNamespace,s===null?t.removeAttribute(i):(c=c.type,s=c===3||c===4&&s===!0?"":""+s,l?t.setAttributeNS(l,i,s):t.setAttribute(i,s))))}var C=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),I=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),k=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),ae=Symbol.for("react.offscreen"),O=Symbol.iterator;function ue(t){return t===null||typeof t!="object"?null:(t=O&&t[O]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Object.assign,F;function se(t){if(F===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+t}var De=!1;function te(t,i){if(!t||De)return"";De=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(re){var l=re}Reflect.construct(t,[],i)}else{try{i.call()}catch(re){l=re}t.call(i.prototype)}else{try{throw Error()}catch(re){l=re}t()}}catch(re){if(re&&l&&typeof re.stack=="string"){for(var c=re.stack.split(`
`),h=l.stack.split(`
`),M=c.length-1,N=h.length-1;1<=M&&0<=N&&c[M]!==h[N];)N--;for(;1<=M&&0<=N;M--,N--)if(c[M]!==h[N]){if(M!==1||N!==1)do if(M--,N--,0>N||c[M]!==h[N]){var B=`
`+c[M].replace(" at new "," at ");return t.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",t.displayName)),B}while(1<=M&&0<=N);break}}}finally{De=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?se(t):""}function fe(t){switch(t.tag){case 5:return se(t.type);case 16:return se("Lazy");case 13:return se("Suspense");case 19:return se("SuspenseList");case 0:case 2:case 15:return t=te(t.type,!1),t;case 11:return t=te(t.type.render,!1),t;case 1:return t=te(t.type,!0),t;default:return""}}function Se(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case I:return"Portal";case b:return"Profiler";case z:return"StrictMode";case Q:return"Suspense";case ce:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case k:return(t.displayName||"Context")+".Consumer";case T:return(t._context.displayName||"Context")+".Provider";case J:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Y:return i=t.displayName||null,i!==null?i:Se(t.type)||"Memo";case ne:i=t._payload,t=t._init;try{return Se(t(i))}catch{}}return null}function _e(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(i);case 8:return i===z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function we(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qe(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ge(t){var i=qe(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,h=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(M){l=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Pt(t){t._valueTracker||(t._valueTracker=Ge(t))}function Lt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=qe(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function lt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function H(t,i){var s=i.checked;return oe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function vn(t,i){var s=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;s=we(i.value!=null?i.value:s),t._wrapperState={initialChecked:l,initialValue:s,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ht(t,i){i=i.checked,i!=null&&P(t,"checked",i,!1)}function ct(t,i){ht(t,i);var s=we(i.value),l=i.type;if(s!=null)l==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?At(t,i.type,s):i.hasOwnProperty("defaultValue")&&At(t,i.type,we(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ye(t,i,s){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,s||i===t.value||(t.value=i),t.defaultValue=i}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function At(t,i,s){(i!=="number"||lt(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var We=Array.isArray;function L(t,i,s,l){if(t=t.options,i){i={};for(var c=0;c<s.length;c++)i["$"+s[c]]=!0;for(s=0;s<t.length;s++)c=i.hasOwnProperty("$"+t[s].value),t[s].selected!==c&&(t[s].selected=c),c&&l&&(t[s].defaultSelected=!0)}else{for(s=""+we(s),i=null,c=0;c<t.length;c++){if(t[c].value===s){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function E(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return oe({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ee(t,i){var s=i.value;if(s==null){if(s=i.children,i=i.defaultValue,s!=null){if(i!=null)throw Error(n(92));if(We(s)){if(1<s.length)throw Error(n(93));s=s[0]}i=s}i==null&&(i=""),s=i}t._wrapperState={initialValue:we(s)}}function pe(t,i){var s=we(i.value),l=we(i.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),i.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),l!=null&&(t.defaultValue=""+l)}function ve(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function de(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xe(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?de(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ae,Ie=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,s,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,s,l,c)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ae.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ut(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(t){Oe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Ee[i]=Ee[t]})});function Ke(t,i,s){return i==null||typeof i=="boolean"||i===""?"":s||typeof i!="number"||i===0||Ee.hasOwnProperty(t)&&Ee[t]?(""+i).trim():i+"px"}function et(t,i){t=t.style;for(var s in i)if(i.hasOwnProperty(s)){var l=s.indexOf("--")===0,c=Ke(s,i[s],l);s==="float"&&(s="cssFloat"),l?t.setProperty(s,c):t[s]=c}}var ke=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ft(t,i){if(i){if(ke[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function it(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wt=null;function W(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Re=null,le=null,he=null;function Le(t){if(t=ho(t)){if(typeof Re!="function")throw Error(n(280));var i=t.stateNode;i&&(i=fa(i),Re(t.stateNode,t.type,i))}}function Pe(t){le?he?he.push(t):he=[t]:le=t}function rt(){if(le){var t=le,i=he;if(he=le=null,Le(t),i)for(t=0;t<i.length;t++)Le(i[t])}}function Nt(t,i){return t(i)}function Yt(){}var yt=!1;function wn(t,i,s){if(yt)return t(i,s);yt=!0;try{return Nt(t,i,s)}finally{yt=!1,(le!==null||he!==null)&&(Yt(),rt())}}function xn(t,i){var s=t.stateNode;if(s===null)return null;var l=fa(s);if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(n(231,i,typeof s));return s}var Kr=!1;if(d)try{var Gi={};Object.defineProperty(Gi,"passive",{get:function(){Kr=!0}}),window.addEventListener("test",Gi,Gi),window.removeEventListener("test",Gi,Gi)}catch{Kr=!1}function yi(t,i,s,l,c,h,M,N,B){var re=Array.prototype.slice.call(arguments,3);try{i.apply(s,re)}catch(xe){this.onError(xe)}}var Si=!1,Mr=null,Er=!1,Wi=null,Go={onError:function(t){Si=!0,Mr=t}};function Zr(t,i,s,l,c,h,M,N,B){Si=!1,Mr=null,yi.apply(Go,arguments)}function Wo(t,i,s,l,c,h,M,N,B){if(Zr.apply(this,arguments),Si){if(Si){var re=Mr;Si=!1,Mr=null}else throw Error(n(198));Er||(Er=!0,Wi=re)}}function ci(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function Xo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function jo(t){if(ci(t)!==t)throw Error(n(188))}function Ol(t){var i=t.alternate;if(!i){if(i=ci(t),i===null)throw Error(n(188));return i!==t?null:t}for(var s=t,l=i;;){var c=s.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){s=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===s)return jo(c),t;if(h===l)return jo(c),i;h=h.sibling}throw Error(n(188))}if(s.return!==l.return)s=c,l=h;else{for(var M=!1,N=c.child;N;){if(N===s){M=!0,s=c,l=h;break}if(N===l){M=!0,l=c,s=h;break}N=N.sibling}if(!M){for(N=h.child;N;){if(N===s){M=!0,s=h,l=c;break}if(N===l){M=!0,l=h,s=c;break}N=N.sibling}if(!M)throw Error(n(189))}}if(s.alternate!==l)throw Error(n(190))}if(s.tag!==3)throw Error(n(188));return s.stateNode.current===s?t:i}function qo(t){return t=Ol(t),t!==null?Yo(t):null}function Yo(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Yo(t);if(i!==null)return i;t=t.sibling}return null}var $o=e.unstable_scheduleCallback,R=e.unstable_cancelCallback,X=e.unstable_shouldYield,ie=e.unstable_requestPaint,K=e.unstable_now,j=e.unstable_getCurrentPriorityLevel,Me=e.unstable_ImmediatePriority,Ce=e.unstable_UserBlockingPriority,Ne=e.unstable_NormalPriority,Be=e.unstable_LowPriority,tt=e.unstable_IdlePriority,Je=null,He=null;function mt(t){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(Je,t,void 0,(t.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:vt,Vt=Math.log,Ft=Math.LN2;function vt(t){return t>>>=0,t===0?32:31-(Vt(t)/Ft|0)|0}var $e=64,Gt=4194304;function pt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function cn(t,i){var s=t.pendingLanes;if(s===0)return 0;var l=0,c=t.suspendedLanes,h=t.pingedLanes,M=s&268435455;if(M!==0){var N=M&~c;N!==0?l=pt(N):(h&=M,h!==0&&(l=pt(h)))}else M=s&~c,M!==0?l=pt(M):h!==0&&(l=pt(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&c)===0&&(c=l&-l,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=s&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)s=31-st(i),c=1<<s,l|=t[s],i&=~c;return l}function Xi(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yn(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var M=31-st(h),N=1<<M,B=c[M];B===-1?((N&s)===0||(N&l)!==0)&&(c[M]=Xi(N,i)):B<=i&&(t.expiredLanes|=N),h&=~N}}function Mi(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function bt(){var t=$e;return $e<<=1,($e&4194240)===0&&($e=64),t}function fn(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Jt(t,i,s){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-st(i),t[i]=s}function on(t,i){var s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<s;){var c=31-st(s),h=1<<c;i[c]=0,l[c]=-1,t[c]=-1,s&=~h}}function en(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-st(s),c=1<<l;c&i|t[l]&i&&(t[l]|=i),s&=~c}}var St=0;function fi(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var td,kl,nd,id,rd,Bl=!1,Ko=[],ji=null,qi=null,Yi=null,Ks=new Map,Zs=new Map,$i=[],mg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sd(t,i){switch(t){case"focusin":case"focusout":ji=null;break;case"dragenter":case"dragleave":qi=null;break;case"mouseover":case"mouseout":Yi=null;break;case"pointerover":case"pointerout":Ks.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zs.delete(i.pointerId)}}function Qs(t,i,s,l,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},i!==null&&(i=ho(i),i!==null&&kl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function gg(t,i,s,l,c){switch(i){case"focusin":return ji=Qs(ji,t,i,s,l,c),!0;case"dragenter":return qi=Qs(qi,t,i,s,l,c),!0;case"mouseover":return Yi=Qs(Yi,t,i,s,l,c),!0;case"pointerover":var h=c.pointerId;return Ks.set(h,Qs(Ks.get(h)||null,t,i,s,l,c)),!0;case"gotpointercapture":return h=c.pointerId,Zs.set(h,Qs(Zs.get(h)||null,t,i,s,l,c)),!0}return!1}function od(t){var i=Tr(t.target);if(i!==null){var s=ci(i);if(s!==null){if(i=s.tag,i===13){if(i=Xo(s),i!==null){t.blockedOn=i,rd(t.priority,function(){nd(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Hl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);wt=l,s.target.dispatchEvent(l),wt=null}else return i=ho(s),i!==null&&kl(i),t.blockedOn=s,!1;i.shift()}return!0}function ad(t,i,s){Zo(t)&&s.delete(i)}function _g(){Bl=!1,ji!==null&&Zo(ji)&&(ji=null),qi!==null&&Zo(qi)&&(qi=null),Yi!==null&&Zo(Yi)&&(Yi=null),Ks.forEach(ad),Zs.forEach(ad)}function Js(t,i){t.blockedOn===i&&(t.blockedOn=null,Bl||(Bl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,_g)))}function eo(t){function i(c){return Js(c,t)}if(0<Ko.length){Js(Ko[0],t);for(var s=1;s<Ko.length;s++){var l=Ko[s];l.blockedOn===t&&(l.blockedOn=null)}}for(ji!==null&&Js(ji,t),qi!==null&&Js(qi,t),Yi!==null&&Js(Yi,t),Ks.forEach(i),Zs.forEach(i),s=0;s<$i.length;s++)l=$i[s],l.blockedOn===t&&(l.blockedOn=null);for(;0<$i.length&&(s=$i[0],s.blockedOn===null);)od(s),s.blockedOn===null&&$i.shift()}var Qr=C.ReactCurrentBatchConfig,Qo=!0;function vg(t,i,s,l){var c=St,h=Qr.transition;Qr.transition=null;try{St=1,zl(t,i,s,l)}finally{St=c,Qr.transition=h}}function xg(t,i,s,l){var c=St,h=Qr.transition;Qr.transition=null;try{St=4,zl(t,i,s,l)}finally{St=c,Qr.transition=h}}function zl(t,i,s,l){if(Qo){var c=Hl(t,i,s,l);if(c===null)ru(t,i,l,Jo,s),sd(t,l);else if(gg(c,t,i,s,l))l.stopPropagation();else if(sd(t,l),i&4&&-1<mg.indexOf(t)){for(;c!==null;){var h=ho(c);if(h!==null&&td(h),h=Hl(t,i,s,l),h===null&&ru(t,i,l,Jo,s),h===c)break;c=h}c!==null&&l.stopPropagation()}else ru(t,i,l,null,s)}}var Jo=null;function Hl(t,i,s,l){if(Jo=null,t=W(l),t=Tr(t),t!==null)if(i=ci(t),i===null)t=null;else if(s=i.tag,s===13){if(t=Xo(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Jo=t,null}function ld(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j()){case Me:return 1;case Ce:return 4;case Ne:case Be:return 16;case tt:return 536870912;default:return 16}default:return 16}}var Ki=null,Vl=null,ea=null;function ud(){if(ea)return ea;var t,i=Vl,s=i.length,l,c="value"in Ki?Ki.value:Ki.textContent,h=c.length;for(t=0;t<s&&i[t]===c[t];t++);var M=s-t;for(l=1;l<=M&&i[s-l]===c[h-l];l++);return ea=c.slice(t,1<l?1-l:void 0)}function ta(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function na(){return!0}function cd(){return!1}function In(t){function i(s,l,c,h,M){this._reactName=s,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var N in t)t.hasOwnProperty(N)&&(s=t[N],this[N]=s?s(h):h[N]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?na:cd,this.isPropagationStopped=cd,this}return oe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=na)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=na)},persist:function(){},isPersistent:na}),i}var Jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gl=In(Jr),to=oe({},Jr,{view:0,detail:0}),yg=In(to),Wl,Xl,no,ia=oe({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ql,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==no&&(no&&t.type==="mousemove"?(Wl=t.screenX-no.screenX,Xl=t.screenY-no.screenY):Xl=Wl=0,no=t),Wl)},movementY:function(t){return"movementY"in t?t.movementY:Xl}}),fd=In(ia),Sg=oe({},ia,{dataTransfer:0}),Mg=In(Sg),Eg=oe({},to,{relatedTarget:0}),jl=In(Eg),Tg=oe({},Jr,{animationName:0,elapsedTime:0,pseudoElement:0}),wg=In(Tg),Ag=oe({},Jr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Rg=In(Ag),Cg=oe({},Jr,{data:0}),dd=In(Cg),bg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Lg[t])?!!i[t]:!1}function ql(){return Dg}var Ng=oe({},to,{key:function(t){if(t.key){var i=bg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ta(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Pg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ql,charCode:function(t){return t.type==="keypress"?ta(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ta(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ug=In(Ng),Ig=oe({},ia,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hd=In(Ig),Fg=oe({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ql}),Og=In(Fg),kg=oe({},Jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bg=In(kg),zg=oe({},ia,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Hg=In(zg),Vg=[9,13,27,32],Yl=d&&"CompositionEvent"in window,io=null;d&&"documentMode"in document&&(io=document.documentMode);var Gg=d&&"TextEvent"in window&&!io,pd=d&&(!Yl||io&&8<io&&11>=io),md=" ",gd=!1;function _d(t,i){switch(t){case"keyup":return Vg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var es=!1;function Wg(t,i){switch(t){case"compositionend":return vd(i);case"keypress":return i.which!==32?null:(gd=!0,md);case"textInput":return t=i.data,t===md&&gd?null:t;default:return null}}function Xg(t,i){if(es)return t==="compositionend"||!Yl&&_d(t,i)?(t=ud(),ea=Vl=Ki=null,es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return pd&&i.locale!=="ko"?null:i.data;default:return null}}var jg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!jg[t.type]:i==="textarea"}function yd(t,i,s,l){Pe(l),i=la(i,"onChange"),0<i.length&&(s=new Gl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var ro=null,so=null;function qg(t){kd(t,0)}function ra(t){var i=ss(t);if(Lt(i))return t}function Yg(t,i){if(t==="change")return i}var Sd=!1;if(d){var $l;if(d){var Kl="oninput"in document;if(!Kl){var Md=document.createElement("div");Md.setAttribute("oninput","return;"),Kl=typeof Md.oninput=="function"}$l=Kl}else $l=!1;Sd=$l&&(!document.documentMode||9<document.documentMode)}function Ed(){ro&&(ro.detachEvent("onpropertychange",Td),so=ro=null)}function Td(t){if(t.propertyName==="value"&&ra(so)){var i=[];yd(i,so,t,W(t)),wn(qg,i)}}function $g(t,i,s){t==="focusin"?(Ed(),ro=i,so=s,ro.attachEvent("onpropertychange",Td)):t==="focusout"&&Ed()}function Kg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ra(so)}function Zg(t,i){if(t==="click")return ra(i)}function Qg(t,i){if(t==="input"||t==="change")return ra(i)}function Jg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Qn=typeof Object.is=="function"?Object.is:Jg;function oo(t,i){if(Qn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var c=s[l];if(!p.call(i,c)||!Qn(t[c],i[c]))return!1}return!0}function wd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ad(t,i){var s=wd(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=wd(s)}}function Rd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Rd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Cd(){for(var t=window,i=lt();i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=lt(t.document)}return i}function Zl(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function e_(t){var i=Cd(),s=t.focusedElem,l=t.selectionRange;if(i!==s&&s&&s.ownerDocument&&Rd(s.ownerDocument.documentElement,s)){if(l!==null&&Zl(s)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(t,s.value.length);else if(t=(i=s.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=s.textContent.length,h=Math.min(l.start,c);l=l.end===void 0?h:Math.min(l.end,c),!t.extend&&h>l&&(c=l,l=h,h=c),c=Ad(s,h);var M=Ad(s,l);c&&M&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=s;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)t=i[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var t_=d&&"documentMode"in document&&11>=document.documentMode,ts=null,Ql=null,ao=null,Jl=!1;function bd(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Jl||ts==null||ts!==lt(l)||(l=ts,"selectionStart"in l&&Zl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ao&&oo(ao,l)||(ao=l,l=la(Ql,"onSelect"),0<l.length&&(i=new Gl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=ts)))}function sa(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var ns={animationend:sa("Animation","AnimationEnd"),animationiteration:sa("Animation","AnimationIteration"),animationstart:sa("Animation","AnimationStart"),transitionend:sa("Transition","TransitionEnd")},eu={},Pd={};d&&(Pd=document.createElement("div").style,"AnimationEvent"in window||(delete ns.animationend.animation,delete ns.animationiteration.animation,delete ns.animationstart.animation),"TransitionEvent"in window||delete ns.transitionend.transition);function oa(t){if(eu[t])return eu[t];if(!ns[t])return t;var i=ns[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Pd)return eu[t]=i[s];return t}var Ld=oa("animationend"),Dd=oa("animationiteration"),Nd=oa("animationstart"),Ud=oa("transitionend"),Id=new Map,Fd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zi(t,i){Id.set(t,i),u(i,[t])}for(var tu=0;tu<Fd.length;tu++){var nu=Fd[tu],n_=nu.toLowerCase(),i_=nu[0].toUpperCase()+nu.slice(1);Zi(n_,"on"+i_)}Zi(Ld,"onAnimationEnd"),Zi(Dd,"onAnimationIteration"),Zi(Nd,"onAnimationStart"),Zi("dblclick","onDoubleClick"),Zi("focusin","onFocus"),Zi("focusout","onBlur"),Zi(Ud,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),r_=new Set("cancel close invalid load scroll toggle".split(" ").concat(lo));function Od(t,i,s){var l=t.type||"unknown-event";t.currentTarget=s,Wo(l,i,void 0,t),t.currentTarget=null}function kd(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],c=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var M=l.length-1;0<=M;M--){var N=l[M],B=N.instance,re=N.currentTarget;if(N=N.listener,B!==h&&c.isPropagationStopped())break e;Od(c,N,re),h=B}else for(M=0;M<l.length;M++){if(N=l[M],B=N.instance,re=N.currentTarget,N=N.listener,B!==h&&c.isPropagationStopped())break e;Od(c,N,re),h=B}}}if(Er)throw t=Wi,Er=!1,Wi=null,t}function Ut(t,i){var s=i[cu];s===void 0&&(s=i[cu]=new Set);var l=t+"__bubble";s.has(l)||(Bd(i,t,2,!1),s.add(l))}function iu(t,i,s){var l=0;i&&(l|=4),Bd(s,t,l,i)}var aa="_reactListening"+Math.random().toString(36).slice(2);function uo(t){if(!t[aa]){t[aa]=!0,r.forEach(function(s){s!=="selectionchange"&&(r_.has(s)||iu(s,!1,t),iu(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[aa]||(i[aa]=!0,iu("selectionchange",!1,i))}}function Bd(t,i,s,l){switch(ld(i)){case 1:var c=vg;break;case 4:c=xg;break;default:c=zl}s=c.bind(null,i,s,t),c=void 0,!Kr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,s,{capture:!0,passive:c}):t.addEventListener(i,s,!0):c!==void 0?t.addEventListener(i,s,{passive:c}):t.addEventListener(i,s,!1)}function ru(t,i,s,l,c){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var N=l.stateNode.containerInfo;if(N===c||N.nodeType===8&&N.parentNode===c)break;if(M===4)for(M=l.return;M!==null;){var B=M.tag;if((B===3||B===4)&&(B=M.stateNode.containerInfo,B===c||B.nodeType===8&&B.parentNode===c))return;M=M.return}for(;N!==null;){if(M=Tr(N),M===null)return;if(B=M.tag,B===5||B===6){l=h=M;continue e}N=N.parentNode}}l=l.return}wn(function(){var re=h,xe=W(s),ye=[];e:{var ge=Id.get(t);if(ge!==void 0){var Ue=Gl,ze=t;switch(t){case"keypress":if(ta(s)===0)break e;case"keydown":case"keyup":Ue=Ug;break;case"focusin":ze="focus",Ue=jl;break;case"focusout":ze="blur",Ue=jl;break;case"beforeblur":case"afterblur":Ue=jl;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=fd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=Mg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=Og;break;case Ld:case Dd:case Nd:Ue=wg;break;case Ud:Ue=Bg;break;case"scroll":Ue=yg;break;case"wheel":Ue=Hg;break;case"copy":case"cut":case"paste":Ue=Rg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=hd}var Ve=(i&4)!==0,Xt=!Ve&&t==="scroll",$=Ve?ge!==null?ge+"Capture":null:ge;Ve=[];for(var G=re,Z;G!==null;){Z=G;var Te=Z.stateNode;if(Z.tag===5&&Te!==null&&(Z=Te,$!==null&&(Te=xn(G,$),Te!=null&&Ve.push(co(G,Te,Z)))),Xt)break;G=G.return}0<Ve.length&&(ge=new Ue(ge,ze,null,s,xe),ye.push({event:ge,listeners:Ve}))}}if((i&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",Ue=t==="mouseout"||t==="pointerout",ge&&s!==wt&&(ze=s.relatedTarget||s.fromElement)&&(Tr(ze)||ze[Ei]))break e;if((Ue||ge)&&(ge=xe.window===xe?xe:(ge=xe.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ue?(ze=s.relatedTarget||s.toElement,Ue=re,ze=ze?Tr(ze):null,ze!==null&&(Xt=ci(ze),ze!==Xt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Ue=null,ze=re),Ue!==ze)){if(Ve=fd,Te="onMouseLeave",$="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(Ve=hd,Te="onPointerLeave",$="onPointerEnter",G="pointer"),Xt=Ue==null?ge:ss(Ue),Z=ze==null?ge:ss(ze),ge=new Ve(Te,G+"leave",Ue,s,xe),ge.target=Xt,ge.relatedTarget=Z,Te=null,Tr(xe)===re&&(Ve=new Ve($,G+"enter",ze,s,xe),Ve.target=Z,Ve.relatedTarget=Xt,Te=Ve),Xt=Te,Ue&&ze)t:{for(Ve=Ue,$=ze,G=0,Z=Ve;Z;Z=is(Z))G++;for(Z=0,Te=$;Te;Te=is(Te))Z++;for(;0<G-Z;)Ve=is(Ve),G--;for(;0<Z-G;)$=is($),Z--;for(;G--;){if(Ve===$||$!==null&&Ve===$.alternate)break t;Ve=is(Ve),$=is($)}Ve=null}else Ve=null;Ue!==null&&zd(ye,ge,Ue,Ve,!1),ze!==null&&Xt!==null&&zd(ye,Xt,ze,Ve,!0)}}e:{if(ge=re?ss(re):window,Ue=ge.nodeName&&ge.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&ge.type==="file")var je=Yg;else if(xd(ge))if(Sd)je=Qg;else{je=Kg;var Ze=$g}else(Ue=ge.nodeName)&&Ue.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(je=Zg);if(je&&(je=je(t,re))){yd(ye,je,s,xe);break e}Ze&&Ze(t,ge,re),t==="focusout"&&(Ze=ge._wrapperState)&&Ze.controlled&&ge.type==="number"&&At(ge,"number",ge.value)}switch(Ze=re?ss(re):window,t){case"focusin":(xd(Ze)||Ze.contentEditable==="true")&&(ts=Ze,Ql=re,ao=null);break;case"focusout":ao=Ql=ts=null;break;case"mousedown":Jl=!0;break;case"contextmenu":case"mouseup":case"dragend":Jl=!1,bd(ye,s,xe);break;case"selectionchange":if(t_)break;case"keydown":case"keyup":bd(ye,s,xe)}var Qe;if(Yl)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else es?_d(t,s)&&(nt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(nt="onCompositionStart");nt&&(pd&&s.locale!=="ko"&&(es||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&es&&(Qe=ud()):(Ki=xe,Vl="value"in Ki?Ki.value:Ki.textContent,es=!0)),Ze=la(re,nt),0<Ze.length&&(nt=new dd(nt,t,null,s,xe),ye.push({event:nt,listeners:Ze}),Qe?nt.data=Qe:(Qe=vd(s),Qe!==null&&(nt.data=Qe)))),(Qe=Gg?Wg(t,s):Xg(t,s))&&(re=la(re,"onBeforeInput"),0<re.length&&(xe=new dd("onBeforeInput","beforeinput",null,s,xe),ye.push({event:xe,listeners:re}),xe.data=Qe))}kd(ye,i)})}function co(t,i,s){return{instance:t,listener:i,currentTarget:s}}function la(t,i){for(var s=i+"Capture",l=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=xn(t,s),h!=null&&l.unshift(co(t,h,c)),h=xn(t,i),h!=null&&l.push(co(t,h,c))),t=t.return}return l}function is(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function zd(t,i,s,l,c){for(var h=i._reactName,M=[];s!==null&&s!==l;){var N=s,B=N.alternate,re=N.stateNode;if(B!==null&&B===l)break;N.tag===5&&re!==null&&(N=re,c?(B=xn(s,h),B!=null&&M.unshift(co(s,B,N))):c||(B=xn(s,h),B!=null&&M.push(co(s,B,N)))),s=s.return}M.length!==0&&t.push({event:i,listeners:M})}var s_=/\r\n?/g,o_=/\u0000|\uFFFD/g;function Hd(t){return(typeof t=="string"?t:""+t).replace(s_,`
`).replace(o_,"")}function ua(t,i,s){if(i=Hd(i),Hd(t)!==i&&s)throw Error(n(425))}function ca(){}var su=null,ou=null;function au(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var lu=typeof setTimeout=="function"?setTimeout:void 0,a_=typeof clearTimeout=="function"?clearTimeout:void 0,Vd=typeof Promise=="function"?Promise:void 0,l_=typeof queueMicrotask=="function"?queueMicrotask:typeof Vd<"u"?function(t){return Vd.resolve(null).then(t).catch(u_)}:lu;function u_(t){setTimeout(function(){throw t})}function uu(t,i){var s=i,l=0;do{var c=s.nextSibling;if(t.removeChild(s),c&&c.nodeType===8)if(s=c.data,s==="/$"){if(l===0){t.removeChild(c),eo(i);return}l--}else s!=="$"&&s!=="$?"&&s!=="$!"||l++;s=c}while(s);eo(i)}function Qi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Gd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}var rs=Math.random().toString(36).slice(2),di="__reactFiber$"+rs,fo="__reactProps$"+rs,Ei="__reactContainer$"+rs,cu="__reactEvents$"+rs,c_="__reactListeners$"+rs,f_="__reactHandles$"+rs;function Tr(t){var i=t[di];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Ei]||s[di]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=Gd(t);t!==null;){if(s=t[di])return s;t=Gd(t)}return i}t=s,s=t.parentNode}return null}function ho(t){return t=t[di]||t[Ei],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function fa(t){return t[fo]||null}var fu=[],os=-1;function Ji(t){return{current:t}}function It(t){0>os||(t.current=fu[os],fu[os]=null,os--)}function Dt(t,i){os++,fu[os]=t.current,t.current=i}var er={},dn=Ji(er),An=Ji(!1),wr=er;function as(t,i){var s=t.type.contextTypes;if(!s)return er;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in s)c[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function Rn(t){return t=t.childContextTypes,t!=null}function da(){It(An),It(dn)}function Wd(t,i,s){if(dn.current!==er)throw Error(n(168));Dt(dn,i),Dt(An,s)}function Xd(t,i,s){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return s;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,_e(t)||"Unknown",c));return oe({},s,l)}function ha(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||er,wr=dn.current,Dt(dn,t),Dt(An,An.current),!0}function jd(t,i,s){var l=t.stateNode;if(!l)throw Error(n(169));s?(t=Xd(t,i,wr),l.__reactInternalMemoizedMergedChildContext=t,It(An),It(dn),Dt(dn,t)):It(An),Dt(An,s)}var Ti=null,pa=!1,du=!1;function qd(t){Ti===null?Ti=[t]:Ti.push(t)}function d_(t){pa=!0,qd(t)}function tr(){if(!du&&Ti!==null){du=!0;var t=0,i=St;try{var s=Ti;for(St=1;t<s.length;t++){var l=s[t];do l=l(!0);while(l!==null)}Ti=null,pa=!1}catch(c){throw Ti!==null&&(Ti=Ti.slice(t+1)),$o(Me,tr),c}finally{St=i,du=!1}}return null}var ls=[],us=0,ma=null,ga=0,Gn=[],Wn=0,Ar=null,wi=1,Ai="";function Rr(t,i){ls[us++]=ga,ls[us++]=ma,ma=t,ga=i}function Yd(t,i,s){Gn[Wn++]=wi,Gn[Wn++]=Ai,Gn[Wn++]=Ar,Ar=t;var l=wi;t=Ai;var c=32-st(l)-1;l&=~(1<<c),s+=1;var h=32-st(i)+c;if(30<h){var M=c-c%5;h=(l&(1<<M)-1).toString(32),l>>=M,c-=M,wi=1<<32-st(i)+c|s<<c|l,Ai=h+t}else wi=1<<h|s<<c|l,Ai=t}function hu(t){t.return!==null&&(Rr(t,1),Yd(t,1,0))}function pu(t){for(;t===ma;)ma=ls[--us],ls[us]=null,ga=ls[--us],ls[us]=null;for(;t===Ar;)Ar=Gn[--Wn],Gn[Wn]=null,Ai=Gn[--Wn],Gn[Wn]=null,wi=Gn[--Wn],Gn[Wn]=null}var Fn=null,On=null,Ot=!1,Jn=null;function $d(t,i){var s=Yn(5,null,null,0);s.elementType="DELETED",s.stateNode=i,s.return=t,i=t.deletions,i===null?(t.deletions=[s],t.flags|=16):i.push(s)}function Kd(t,i){switch(t.tag){case 5:var s=t.type;return i=i.nodeType!==1||s.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Fn=t,On=Qi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Fn=t,On=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(s=Ar!==null?{id:wi,overflow:Ai}:null,t.memoizedState={dehydrated:i,treeContext:s,retryLane:1073741824},s=Yn(18,null,null,0),s.stateNode=i,s.return=t,t.child=s,Fn=t,On=null,!0):!1;default:return!1}}function mu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gu(t){if(Ot){var i=On;if(i){var s=i;if(!Kd(t,i)){if(mu(t))throw Error(n(418));i=Qi(s.nextSibling);var l=Fn;i&&Kd(t,i)?$d(l,s):(t.flags=t.flags&-4097|2,Ot=!1,Fn=t)}}else{if(mu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ot=!1,Fn=t}}}function Zd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Fn=t}function _a(t){if(t!==Fn)return!1;if(!Ot)return Zd(t),Ot=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!au(t.type,t.memoizedProps)),i&&(i=On)){if(mu(t))throw Qd(),Error(n(418));for(;i;)$d(t,i),i=Qi(i.nextSibling)}if(Zd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(i===0){On=Qi(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++}t=t.nextSibling}On=null}}else On=Fn?Qi(t.stateNode.nextSibling):null;return!0}function Qd(){for(var t=On;t;)t=Qi(t.nextSibling)}function cs(){On=Fn=null,Ot=!1}function _u(t){Jn===null?Jn=[t]:Jn.push(t)}var h_=C.ReactCurrentBatchConfig;function po(t,i,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(n(309));var l=s.stateNode}if(!l)throw Error(n(147,t));var c=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(M){var N=c.refs;M===null?delete N[h]:N[h]=M},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!s._owner)throw Error(n(290,t))}return t}function va(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Jd(t){var i=t._init;return i(t._payload)}function eh(t){function i($,G){if(t){var Z=$.deletions;Z===null?($.deletions=[G],$.flags|=16):Z.push(G)}}function s($,G){if(!t)return null;for(;G!==null;)i($,G),G=G.sibling;return null}function l($,G){for($=new Map;G!==null;)G.key!==null?$.set(G.key,G):$.set(G.index,G),G=G.sibling;return $}function c($,G){return $=ur($,G),$.index=0,$.sibling=null,$}function h($,G,Z){return $.index=Z,t?(Z=$.alternate,Z!==null?(Z=Z.index,Z<G?($.flags|=2,G):Z):($.flags|=2,G)):($.flags|=1048576,G)}function M($){return t&&$.alternate===null&&($.flags|=2),$}function N($,G,Z,Te){return G===null||G.tag!==6?(G=lc(Z,$.mode,Te),G.return=$,G):(G=c(G,Z),G.return=$,G)}function B($,G,Z,Te){var je=Z.type;return je===U?xe($,G,Z.props.children,Te,Z.key):G!==null&&(G.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===ne&&Jd(je)===G.type)?(Te=c(G,Z.props),Te.ref=po($,G,Z),Te.return=$,Te):(Te=Va(Z.type,Z.key,Z.props,null,$.mode,Te),Te.ref=po($,G,Z),Te.return=$,Te)}function re($,G,Z,Te){return G===null||G.tag!==4||G.stateNode.containerInfo!==Z.containerInfo||G.stateNode.implementation!==Z.implementation?(G=uc(Z,$.mode,Te),G.return=$,G):(G=c(G,Z.children||[]),G.return=$,G)}function xe($,G,Z,Te,je){return G===null||G.tag!==7?(G=Ir(Z,$.mode,Te,je),G.return=$,G):(G=c(G,Z),G.return=$,G)}function ye($,G,Z){if(typeof G=="string"&&G!==""||typeof G=="number")return G=lc(""+G,$.mode,Z),G.return=$,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case V:return Z=Va(G.type,G.key,G.props,null,$.mode,Z),Z.ref=po($,null,G),Z.return=$,Z;case I:return G=uc(G,$.mode,Z),G.return=$,G;case ne:var Te=G._init;return ye($,Te(G._payload),Z)}if(We(G)||ue(G))return G=Ir(G,$.mode,Z,null),G.return=$,G;va($,G)}return null}function ge($,G,Z,Te){var je=G!==null?G.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number")return je!==null?null:N($,G,""+Z,Te);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case V:return Z.key===je?B($,G,Z,Te):null;case I:return Z.key===je?re($,G,Z,Te):null;case ne:return je=Z._init,ge($,G,je(Z._payload),Te)}if(We(Z)||ue(Z))return je!==null?null:xe($,G,Z,Te,null);va($,Z)}return null}function Ue($,G,Z,Te,je){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return $=$.get(Z)||null,N(G,$,""+Te,je);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case V:return $=$.get(Te.key===null?Z:Te.key)||null,B(G,$,Te,je);case I:return $=$.get(Te.key===null?Z:Te.key)||null,re(G,$,Te,je);case ne:var Ze=Te._init;return Ue($,G,Z,Ze(Te._payload),je)}if(We(Te)||ue(Te))return $=$.get(Z)||null,xe(G,$,Te,je,null);va(G,Te)}return null}function ze($,G,Z,Te){for(var je=null,Ze=null,Qe=G,nt=G=0,rn=null;Qe!==null&&nt<Z.length;nt++){Qe.index>nt?(rn=Qe,Qe=null):rn=Qe.sibling;var Et=ge($,Qe,Z[nt],Te);if(Et===null){Qe===null&&(Qe=rn);break}t&&Qe&&Et.alternate===null&&i($,Qe),G=h(Et,G,nt),Ze===null?je=Et:Ze.sibling=Et,Ze=Et,Qe=rn}if(nt===Z.length)return s($,Qe),Ot&&Rr($,nt),je;if(Qe===null){for(;nt<Z.length;nt++)Qe=ye($,Z[nt],Te),Qe!==null&&(G=h(Qe,G,nt),Ze===null?je=Qe:Ze.sibling=Qe,Ze=Qe);return Ot&&Rr($,nt),je}for(Qe=l($,Qe);nt<Z.length;nt++)rn=Ue(Qe,$,nt,Z[nt],Te),rn!==null&&(t&&rn.alternate!==null&&Qe.delete(rn.key===null?nt:rn.key),G=h(rn,G,nt),Ze===null?je=rn:Ze.sibling=rn,Ze=rn);return t&&Qe.forEach(function(cr){return i($,cr)}),Ot&&Rr($,nt),je}function Ve($,G,Z,Te){var je=ue(Z);if(typeof je!="function")throw Error(n(150));if(Z=je.call(Z),Z==null)throw Error(n(151));for(var Ze=je=null,Qe=G,nt=G=0,rn=null,Et=Z.next();Qe!==null&&!Et.done;nt++,Et=Z.next()){Qe.index>nt?(rn=Qe,Qe=null):rn=Qe.sibling;var cr=ge($,Qe,Et.value,Te);if(cr===null){Qe===null&&(Qe=rn);break}t&&Qe&&cr.alternate===null&&i($,Qe),G=h(cr,G,nt),Ze===null?je=cr:Ze.sibling=cr,Ze=cr,Qe=rn}if(Et.done)return s($,Qe),Ot&&Rr($,nt),je;if(Qe===null){for(;!Et.done;nt++,Et=Z.next())Et=ye($,Et.value,Te),Et!==null&&(G=h(Et,G,nt),Ze===null?je=Et:Ze.sibling=Et,Ze=Et);return Ot&&Rr($,nt),je}for(Qe=l($,Qe);!Et.done;nt++,Et=Z.next())Et=Ue(Qe,$,nt,Et.value,Te),Et!==null&&(t&&Et.alternate!==null&&Qe.delete(Et.key===null?nt:Et.key),G=h(Et,G,nt),Ze===null?je=Et:Ze.sibling=Et,Ze=Et);return t&&Qe.forEach(function(j_){return i($,j_)}),Ot&&Rr($,nt),je}function Xt($,G,Z,Te){if(typeof Z=="object"&&Z!==null&&Z.type===U&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case V:e:{for(var je=Z.key,Ze=G;Ze!==null;){if(Ze.key===je){if(je=Z.type,je===U){if(Ze.tag===7){s($,Ze.sibling),G=c(Ze,Z.props.children),G.return=$,$=G;break e}}else if(Ze.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===ne&&Jd(je)===Ze.type){s($,Ze.sibling),G=c(Ze,Z.props),G.ref=po($,Ze,Z),G.return=$,$=G;break e}s($,Ze);break}else i($,Ze);Ze=Ze.sibling}Z.type===U?(G=Ir(Z.props.children,$.mode,Te,Z.key),G.return=$,$=G):(Te=Va(Z.type,Z.key,Z.props,null,$.mode,Te),Te.ref=po($,G,Z),Te.return=$,$=Te)}return M($);case I:e:{for(Ze=Z.key;G!==null;){if(G.key===Ze)if(G.tag===4&&G.stateNode.containerInfo===Z.containerInfo&&G.stateNode.implementation===Z.implementation){s($,G.sibling),G=c(G,Z.children||[]),G.return=$,$=G;break e}else{s($,G);break}else i($,G);G=G.sibling}G=uc(Z,$.mode,Te),G.return=$,$=G}return M($);case ne:return Ze=Z._init,Xt($,G,Ze(Z._payload),Te)}if(We(Z))return ze($,G,Z,Te);if(ue(Z))return Ve($,G,Z,Te);va($,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"?(Z=""+Z,G!==null&&G.tag===6?(s($,G.sibling),G=c(G,Z),G.return=$,$=G):(s($,G),G=lc(Z,$.mode,Te),G.return=$,$=G),M($)):s($,G)}return Xt}var fs=eh(!0),th=eh(!1),xa=Ji(null),ya=null,ds=null,vu=null;function xu(){vu=ds=ya=null}function yu(t){var i=xa.current;It(xa),t._currentValue=i}function Su(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function hs(t,i){ya=t,vu=ds=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Cn=!0),t.firstContext=null)}function Xn(t){var i=t._currentValue;if(vu!==t)if(t={context:t,memoizedValue:i,next:null},ds===null){if(ya===null)throw Error(n(308));ds=t,ya.dependencies={lanes:0,firstContext:t}}else ds=ds.next=t;return i}var Cr=null;function Mu(t){Cr===null?Cr=[t]:Cr.push(t)}function nh(t,i,s,l){var c=i.interleaved;return c===null?(s.next=s,Mu(i)):(s.next=c.next,c.next=s),i.interleaved=s,Ri(t,l)}function Ri(t,i){t.lanes|=i;var s=t.alternate;for(s!==null&&(s.lanes|=i),s=t,t=t.return;t!==null;)t.childLanes|=i,s=t.alternate,s!==null&&(s.childLanes|=i),s=t,t=t.return;return s.tag===3?s.stateNode:null}var nr=!1;function Eu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ih(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ci(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function ir(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Mt&2)!==0){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,Ri(t,s)}return c=l.interleaved,c===null?(i.next=i,Mu(l)):(i.next=c.next,c.next=i),l.interleaved=i,Ri(t,s)}function Sa(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,en(t,s)}}function rh(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var c=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var M={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};h===null?c=h=M:h=h.next=M,s=s.next}while(s!==null);h===null?c=h=i:h=h.next=i}else c=h=i;s={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}function Ma(t,i,s,l){var c=t.updateQueue;nr=!1;var h=c.firstBaseUpdate,M=c.lastBaseUpdate,N=c.shared.pending;if(N!==null){c.shared.pending=null;var B=N,re=B.next;B.next=null,M===null?h=re:M.next=re,M=B;var xe=t.alternate;xe!==null&&(xe=xe.updateQueue,N=xe.lastBaseUpdate,N!==M&&(N===null?xe.firstBaseUpdate=re:N.next=re,xe.lastBaseUpdate=B))}if(h!==null){var ye=c.baseState;M=0,xe=re=B=null,N=h;do{var ge=N.lane,Ue=N.eventTime;if((l&ge)===ge){xe!==null&&(xe=xe.next={eventTime:Ue,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var ze=t,Ve=N;switch(ge=i,Ue=s,Ve.tag){case 1:if(ze=Ve.payload,typeof ze=="function"){ye=ze.call(Ue,ye,ge);break e}ye=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=Ve.payload,ge=typeof ze=="function"?ze.call(Ue,ye,ge):ze,ge==null)break e;ye=oe({},ye,ge);break e;case 2:nr=!0}}N.callback!==null&&N.lane!==0&&(t.flags|=64,ge=c.effects,ge===null?c.effects=[N]:ge.push(N))}else Ue={eventTime:Ue,lane:ge,tag:N.tag,payload:N.payload,callback:N.callback,next:null},xe===null?(re=xe=Ue,B=ye):xe=xe.next=Ue,M|=ge;if(N=N.next,N===null){if(N=c.shared.pending,N===null)break;ge=N,N=ge.next,ge.next=null,c.lastBaseUpdate=ge,c.shared.pending=null}}while(!0);if(xe===null&&(B=ye),c.baseState=B,c.firstBaseUpdate=re,c.lastBaseUpdate=xe,i=c.shared.interleaved,i!==null){c=i;do M|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);Lr|=M,t.lanes=M,t.memoizedState=ye}}function sh(t,i,s){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=s,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var mo={},hi=Ji(mo),go=Ji(mo),_o=Ji(mo);function br(t){if(t===mo)throw Error(n(174));return t}function Tu(t,i){switch(Dt(_o,i),Dt(go,t),Dt(hi,mo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Xe(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Xe(i,t)}It(hi),Dt(hi,i)}function ps(){It(hi),It(go),It(_o)}function oh(t){br(_o.current);var i=br(hi.current),s=Xe(i,t.type);i!==s&&(Dt(go,t),Dt(hi,s))}function wu(t){go.current===t&&(It(hi),It(go))}var zt=Ji(0);function Ea(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Au=[];function Ru(){for(var t=0;t<Au.length;t++)Au[t]._workInProgressVersionPrimary=null;Au.length=0}var Ta=C.ReactCurrentDispatcher,Cu=C.ReactCurrentBatchConfig,Pr=0,Ht=null,$t=null,tn=null,wa=!1,vo=!1,xo=0,p_=0;function hn(){throw Error(n(321))}function bu(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!Qn(t[s],i[s]))return!1;return!0}function Pu(t,i,s,l,c,h){if(Pr=h,Ht=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ta.current=t===null||t.memoizedState===null?v_:x_,t=s(l,c),vo){h=0;do{if(vo=!1,xo=0,25<=h)throw Error(n(301));h+=1,tn=$t=null,i.updateQueue=null,Ta.current=y_,t=s(l,c)}while(vo)}if(Ta.current=Ca,i=$t!==null&&$t.next!==null,Pr=0,tn=$t=Ht=null,wa=!1,i)throw Error(n(300));return t}function Lu(){var t=xo!==0;return xo=0,t}function pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?Ht.memoizedState=tn=t:tn=tn.next=t,tn}function jn(){if($t===null){var t=Ht.alternate;t=t!==null?t.memoizedState:null}else t=$t.next;var i=tn===null?Ht.memoizedState:tn.next;if(i!==null)tn=i,$t=t;else{if(t===null)throw Error(n(310));$t=t,t={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},tn===null?Ht.memoizedState=tn=t:tn=tn.next=t}return tn}function yo(t,i){return typeof i=="function"?i(t):i}function Du(t){var i=jn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=$t,c=l.baseQueue,h=s.pending;if(h!==null){if(c!==null){var M=c.next;c.next=h.next,h.next=M}l.baseQueue=c=h,s.pending=null}if(c!==null){h=c.next,l=l.baseState;var N=M=null,B=null,re=h;do{var xe=re.lane;if((Pr&xe)===xe)B!==null&&(B=B.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),l=re.hasEagerState?re.eagerState:t(l,re.action);else{var ye={lane:xe,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};B===null?(N=B=ye,M=l):B=B.next=ye,Ht.lanes|=xe,Lr|=xe}re=re.next}while(re!==null&&re!==h);B===null?M=l:B.next=N,Qn(l,i.memoizedState)||(Cn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=B,s.lastRenderedState=l}if(t=s.interleaved,t!==null){c=t;do h=c.lane,Ht.lanes|=h,Lr|=h,c=c.next;while(c!==t)}else c===null&&(s.lanes=0);return[i.memoizedState,s.dispatch]}function Nu(t){var i=jn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=s.dispatch,c=s.pending,h=i.memoizedState;if(c!==null){s.pending=null;var M=c=c.next;do h=t(h,M.action),M=M.next;while(M!==c);Qn(h,i.memoizedState)||(Cn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,l]}function ah(){}function lh(t,i){var s=Ht,l=jn(),c=i(),h=!Qn(l.memoizedState,c);if(h&&(l.memoizedState=c,Cn=!0),l=l.queue,Uu(fh.bind(null,s,l,t),[t]),l.getSnapshot!==i||h||tn!==null&&tn.memoizedState.tag&1){if(s.flags|=2048,So(9,ch.bind(null,s,l,c,i),void 0,null),nn===null)throw Error(n(349));(Pr&30)!==0||uh(s,i,c)}return c}function uh(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function ch(t,i,s,l){i.value=s,i.getSnapshot=l,dh(i)&&hh(t)}function fh(t,i,s){return s(function(){dh(i)&&hh(t)})}function dh(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!Qn(t,s)}catch{return!0}}function hh(t){var i=Ri(t,1);i!==null&&ii(i,t,1,-1)}function ph(t){var i=pi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yo,lastRenderedState:t},i.queue=t,t=t.dispatch=__.bind(null,Ht,t),[i.memoizedState,t]}function So(t,i,s,l){return t={tag:t,create:i,destroy:s,deps:l,next:null},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.lastEffect=t.next=t):(s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t)),t}function mh(){return jn().memoizedState}function Aa(t,i,s,l){var c=pi();Ht.flags|=t,c.memoizedState=So(1|i,s,void 0,l===void 0?null:l)}function Ra(t,i,s,l){var c=jn();l=l===void 0?null:l;var h=void 0;if($t!==null){var M=$t.memoizedState;if(h=M.destroy,l!==null&&bu(l,M.deps)){c.memoizedState=So(i,s,h,l);return}}Ht.flags|=t,c.memoizedState=So(1|i,s,h,l)}function gh(t,i){return Aa(8390656,8,t,i)}function Uu(t,i){return Ra(2048,8,t,i)}function _h(t,i){return Ra(4,2,t,i)}function vh(t,i){return Ra(4,4,t,i)}function xh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function yh(t,i,s){return s=s!=null?s.concat([t]):null,Ra(4,4,xh.bind(null,i,t),s)}function Iu(){}function Sh(t,i){var s=jn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&bu(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function Mh(t,i){var s=jn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&bu(i,l[1])?l[0]:(t=t(),s.memoizedState=[t,i],t)}function Eh(t,i,s){return(Pr&21)===0?(t.baseState&&(t.baseState=!1,Cn=!0),t.memoizedState=s):(Qn(s,i)||(s=bt(),Ht.lanes|=s,Lr|=s,t.baseState=!0),i)}function m_(t,i){var s=St;St=s!==0&&4>s?s:4,t(!0);var l=Cu.transition;Cu.transition={};try{t(!1),i()}finally{St=s,Cu.transition=l}}function Th(){return jn().memoizedState}function g_(t,i,s){var l=ar(t);if(s={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null},wh(t))Ah(i,s);else if(s=nh(t,i,s,l),s!==null){var c=Mn();ii(s,t,l,c),Rh(s,i,l)}}function __(t,i,s){var l=ar(t),c={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null};if(wh(t))Ah(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,N=h(M,s);if(c.hasEagerState=!0,c.eagerState=N,Qn(N,M)){var B=i.interleaved;B===null?(c.next=c,Mu(i)):(c.next=B.next,B.next=c),i.interleaved=c;return}}catch{}finally{}s=nh(t,i,c,l),s!==null&&(c=Mn(),ii(s,t,l,c),Rh(s,i,l))}}function wh(t){var i=t.alternate;return t===Ht||i!==null&&i===Ht}function Ah(t,i){vo=wa=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Rh(t,i,s){if((s&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,en(t,s)}}var Ca={readContext:Xn,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useInsertionEffect:hn,useLayoutEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useMutableSource:hn,useSyncExternalStore:hn,useId:hn,unstable_isNewReconciler:!1},v_={readContext:Xn,useCallback:function(t,i){return pi().memoizedState=[t,i===void 0?null:i],t},useContext:Xn,useEffect:gh,useImperativeHandle:function(t,i,s){return s=s!=null?s.concat([t]):null,Aa(4194308,4,xh.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Aa(4194308,4,t,i)},useInsertionEffect:function(t,i){return Aa(4,2,t,i)},useMemo:function(t,i){var s=pi();return i=i===void 0?null:i,t=t(),s.memoizedState=[t,i],t},useReducer:function(t,i,s){var l=pi();return i=s!==void 0?s(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=g_.bind(null,Ht,t),[l.memoizedState,t]},useRef:function(t){var i=pi();return t={current:t},i.memoizedState=t},useState:ph,useDebugValue:Iu,useDeferredValue:function(t){return pi().memoizedState=t},useTransition:function(){var t=ph(!1),i=t[0];return t=m_.bind(null,t[1]),pi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,s){var l=Ht,c=pi();if(Ot){if(s===void 0)throw Error(n(407));s=s()}else{if(s=i(),nn===null)throw Error(n(349));(Pr&30)!==0||uh(l,i,s)}c.memoizedState=s;var h={value:s,getSnapshot:i};return c.queue=h,gh(fh.bind(null,l,h,t),[t]),l.flags|=2048,So(9,ch.bind(null,l,h,s,i),void 0,null),s},useId:function(){var t=pi(),i=nn.identifierPrefix;if(Ot){var s=Ai,l=wi;s=(l&~(1<<32-st(l)-1)).toString(32)+s,i=":"+i+"R"+s,s=xo++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=p_++,i=":"+i+"r"+s.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},x_={readContext:Xn,useCallback:Sh,useContext:Xn,useEffect:Uu,useImperativeHandle:yh,useInsertionEffect:_h,useLayoutEffect:vh,useMemo:Mh,useReducer:Du,useRef:mh,useState:function(){return Du(yo)},useDebugValue:Iu,useDeferredValue:function(t){var i=jn();return Eh(i,$t.memoizedState,t)},useTransition:function(){var t=Du(yo)[0],i=jn().memoizedState;return[t,i]},useMutableSource:ah,useSyncExternalStore:lh,useId:Th,unstable_isNewReconciler:!1},y_={readContext:Xn,useCallback:Sh,useContext:Xn,useEffect:Uu,useImperativeHandle:yh,useInsertionEffect:_h,useLayoutEffect:vh,useMemo:Mh,useReducer:Nu,useRef:mh,useState:function(){return Nu(yo)},useDebugValue:Iu,useDeferredValue:function(t){var i=jn();return $t===null?i.memoizedState=t:Eh(i,$t.memoizedState,t)},useTransition:function(){var t=Nu(yo)[0],i=jn().memoizedState;return[t,i]},useMutableSource:ah,useSyncExternalStore:lh,useId:Th,unstable_isNewReconciler:!1};function ei(t,i){if(t&&t.defaultProps){i=oe({},i),t=t.defaultProps;for(var s in t)i[s]===void 0&&(i[s]=t[s]);return i}return i}function Fu(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:oe({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var ba={isMounted:function(t){return(t=t._reactInternals)?ci(t)===t:!1},enqueueSetState:function(t,i,s){t=t._reactInternals;var l=Mn(),c=ar(t),h=Ci(l,c);h.payload=i,s!=null&&(h.callback=s),i=ir(t,h,c),i!==null&&(ii(i,t,c,l),Sa(i,t,c))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=Mn(),c=ar(t),h=Ci(l,c);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=ir(t,h,c),i!==null&&(ii(i,t,c,l),Sa(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=Mn(),l=ar(t),c=Ci(s,l);c.tag=2,i!=null&&(c.callback=i),i=ir(t,c,l),i!==null&&(ii(i,t,l,s),Sa(i,t,l))}};function Ch(t,i,s,l,c,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,M):i.prototype&&i.prototype.isPureReactComponent?!oo(s,l)||!oo(c,h):!0}function bh(t,i,s){var l=!1,c=er,h=i.contextType;return typeof h=="object"&&h!==null?h=Xn(h):(c=Rn(i)?wr:dn.current,l=i.contextTypes,h=(l=l!=null)?as(t,c):er),i=new i(s,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ba,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function Ph(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&ba.enqueueReplaceState(i,i.state,null)}function Ou(t,i,s,l){var c=t.stateNode;c.props=s,c.state=t.memoizedState,c.refs={},Eu(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=Xn(h):(h=Rn(i)?wr:dn.current,c.context=as(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Fu(t,i,h,s),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&ba.enqueueReplaceState(c,c.state,null),Ma(t,s,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function ms(t,i){try{var s="",l=i;do s+=fe(l),l=l.return;while(l);var c=s}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function ku(t,i,s){return{value:t,source:null,stack:s??null,digest:i??null}}function Bu(t,i){try{console.error(i.value)}catch(s){setTimeout(function(){throw s})}}var S_=typeof WeakMap=="function"?WeakMap:Map;function Lh(t,i,s){s=Ci(-1,s),s.tag=3,s.payload={element:null};var l=i.value;return s.callback=function(){Fa||(Fa=!0,ec=l),Bu(t,i)},s}function Dh(t,i,s){s=Ci(-1,s),s.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;s.payload=function(){return l(c)},s.callback=function(){Bu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(s.callback=function(){Bu(t,i),typeof l!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),s}function Nh(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new S_;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(s)||(c.add(s),t=I_.bind(null,t,i,s),i.then(t,t))}function Uh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Ih(t,i,s,l,c){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(i=Ci(-1,1),i.tag=2,ir(s,i,1))),s.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var M_=C.ReactCurrentOwner,Cn=!1;function Sn(t,i,s,l){i.child=t===null?th(i,null,s,l):fs(i,t.child,s,l)}function Fh(t,i,s,l,c){s=s.render;var h=i.ref;return hs(i,c),l=Pu(t,i,s,l,h,c),s=Lu(),t!==null&&!Cn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,bi(t,i,c)):(Ot&&s&&hu(i),i.flags|=1,Sn(t,i,l,c),i.child)}function Oh(t,i,s,l,c){if(t===null){var h=s.type;return typeof h=="function"&&!ac(h)&&h.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(i.tag=15,i.type=h,kh(t,i,h,l,c)):(t=Va(s.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&c)===0){var M=h.memoizedProps;if(s=s.compare,s=s!==null?s:oo,s(M,l)&&t.ref===i.ref)return bi(t,i,c)}return i.flags|=1,t=ur(h,l),t.ref=i.ref,t.return=i,i.child=t}function kh(t,i,s,l,c){if(t!==null){var h=t.memoizedProps;if(oo(h,l)&&t.ref===i.ref)if(Cn=!1,i.pendingProps=l=h,(t.lanes&c)!==0)(t.flags&131072)!==0&&(Cn=!0);else return i.lanes=t.lanes,bi(t,i,c)}return zu(t,i,s,l,c)}function Bh(t,i,s){var l=i.pendingProps,c=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Dt(_s,kn),kn|=s;else{if((s&1073741824)===0)return t=h!==null?h.baseLanes|s:s,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Dt(_s,kn),kn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:s,Dt(_s,kn),kn|=l}else h!==null?(l=h.baseLanes|s,i.memoizedState=null):l=s,Dt(_s,kn),kn|=l;return Sn(t,i,c,s),i.child}function zh(t,i){var s=i.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(i.flags|=512,i.flags|=2097152)}function zu(t,i,s,l,c){var h=Rn(s)?wr:dn.current;return h=as(i,h),hs(i,c),s=Pu(t,i,s,l,h,c),l=Lu(),t!==null&&!Cn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,bi(t,i,c)):(Ot&&l&&hu(i),i.flags|=1,Sn(t,i,s,c),i.child)}function Hh(t,i,s,l,c){if(Rn(s)){var h=!0;ha(i)}else h=!1;if(hs(i,c),i.stateNode===null)La(t,i),bh(i,s,l),Ou(i,s,l,c),l=!0;else if(t===null){var M=i.stateNode,N=i.memoizedProps;M.props=N;var B=M.context,re=s.contextType;typeof re=="object"&&re!==null?re=Xn(re):(re=Rn(s)?wr:dn.current,re=as(i,re));var xe=s.getDerivedStateFromProps,ye=typeof xe=="function"||typeof M.getSnapshotBeforeUpdate=="function";ye||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(N!==l||B!==re)&&Ph(i,M,l,re),nr=!1;var ge=i.memoizedState;M.state=ge,Ma(i,l,M,c),B=i.memoizedState,N!==l||ge!==B||An.current||nr?(typeof xe=="function"&&(Fu(i,s,xe,l),B=i.memoizedState),(N=nr||Ch(i,s,N,l,ge,B,re))?(ye||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=B),M.props=l,M.state=B,M.context=re,l=N):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,ih(t,i),N=i.memoizedProps,re=i.type===i.elementType?N:ei(i.type,N),M.props=re,ye=i.pendingProps,ge=M.context,B=s.contextType,typeof B=="object"&&B!==null?B=Xn(B):(B=Rn(s)?wr:dn.current,B=as(i,B));var Ue=s.getDerivedStateFromProps;(xe=typeof Ue=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(N!==ye||ge!==B)&&Ph(i,M,l,B),nr=!1,ge=i.memoizedState,M.state=ge,Ma(i,l,M,c);var ze=i.memoizedState;N!==ye||ge!==ze||An.current||nr?(typeof Ue=="function"&&(Fu(i,s,Ue,l),ze=i.memoizedState),(re=nr||Ch(i,s,re,l,ge,ze,B)||!1)?(xe||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,ze,B),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,ze,B)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||N===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ze),M.props=l,M.state=ze,M.context=B,l=re):(typeof M.componentDidUpdate!="function"||N===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),l=!1)}return Hu(t,i,s,l,h,c)}function Hu(t,i,s,l,c,h){zh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return c&&jd(i,s,!1),bi(t,i,h);l=i.stateNode,M_.current=i;var N=M&&typeof s.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=fs(i,t.child,null,h),i.child=fs(i,null,N,h)):Sn(t,i,N,h),i.memoizedState=l.state,c&&jd(i,s,!0),i.child}function Vh(t){var i=t.stateNode;i.pendingContext?Wd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Wd(t,i.context,!1),Tu(t,i.containerInfo)}function Gh(t,i,s,l,c){return cs(),_u(c),i.flags|=256,Sn(t,i,s,l),i.child}var Vu={dehydrated:null,treeContext:null,retryLane:0};function Gu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Wh(t,i,s){var l=i.pendingProps,c=zt.current,h=!1,M=(i.flags&128)!==0,N;if((N=M)||(N=t!==null&&t.memoizedState===null?!1:(c&2)!==0),N?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Dt(zt,c&1),t===null)return gu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,h?(l=i.mode,h=i.child,M={mode:"hidden",children:M},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=M):h=Ga(M,l,0,null),t=Ir(t,l,s,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Gu(s),i.memoizedState=Vu,t):Wu(i,M));if(c=t.memoizedState,c!==null&&(N=c.dehydrated,N!==null))return E_(t,i,M,l,N,c,s);if(h){h=l.fallback,M=i.mode,c=t.child,N=c.sibling;var B={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=B,i.deletions=null):(l=ur(c,B),l.subtreeFlags=c.subtreeFlags&14680064),N!==null?h=ur(N,h):(h=Ir(h,M,s,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,M=t.child.memoizedState,M=M===null?Gu(s):{baseLanes:M.baseLanes|s,cachePool:null,transitions:M.transitions},h.memoizedState=M,h.childLanes=t.childLanes&~s,i.memoizedState=Vu,l}return h=t.child,t=h.sibling,l=ur(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=s),l.return=i,l.sibling=null,t!==null&&(s=i.deletions,s===null?(i.deletions=[t],i.flags|=16):s.push(t)),i.child=l,i.memoizedState=null,l}function Wu(t,i){return i=Ga({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Pa(t,i,s,l){return l!==null&&_u(l),fs(i,t.child,null,s),t=Wu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function E_(t,i,s,l,c,h,M){if(s)return i.flags&256?(i.flags&=-257,l=ku(Error(n(422))),Pa(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,c=i.mode,l=Ga({mode:"visible",children:l.children},c,0,null),h=Ir(h,c,M,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&fs(i,t.child,null,M),i.child.memoizedState=Gu(M),i.memoizedState=Vu,h);if((i.mode&1)===0)return Pa(t,i,M,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var N=l.dgst;return l=N,h=Error(n(419)),l=ku(h,l,void 0),Pa(t,i,M,l)}if(N=(M&t.childLanes)!==0,Cn||N){if(l=nn,l!==null){switch(M&-M){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|M))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,Ri(t,c),ii(l,t,c,-1))}return oc(),l=ku(Error(n(421))),Pa(t,i,M,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=F_.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,On=Qi(c.nextSibling),Fn=i,Ot=!0,Jn=null,t!==null&&(Gn[Wn++]=wi,Gn[Wn++]=Ai,Gn[Wn++]=Ar,wi=t.id,Ai=t.overflow,Ar=i),i=Wu(i,l.children),i.flags|=4096,i)}function Xh(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Su(t.return,i,s)}function Xu(t,i,s,l,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=s,h.tailMode=c)}function jh(t,i,s){var l=i.pendingProps,c=l.revealOrder,h=l.tail;if(Sn(t,i,l.children,s),l=zt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xh(t,s,i);else if(t.tag===19)Xh(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Dt(zt,l),(i.mode&1)===0)i.memoizedState=null;else switch(c){case"forwards":for(s=i.child,c=null;s!==null;)t=s.alternate,t!==null&&Ea(t)===null&&(c=s),s=s.sibling;s=c,s===null?(c=i.child,i.child=null):(c=s.sibling,s.sibling=null),Xu(i,!1,c,s,h);break;case"backwards":for(s=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&Ea(t)===null){i.child=c;break}t=c.sibling,c.sibling=s,s=c,c=t}Xu(i,!0,s,null,h);break;case"together":Xu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function La(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function bi(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Lr|=i.lanes,(s&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,s=ur(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=ur(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function T_(t,i,s){switch(i.tag){case 3:Vh(i),cs();break;case 5:oh(i);break;case 1:Rn(i.type)&&ha(i);break;case 4:Tu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;Dt(xa,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Dt(zt,zt.current&1),i.flags|=128,null):(s&i.child.childLanes)!==0?Wh(t,i,s):(Dt(zt,zt.current&1),t=bi(t,i,s),t!==null?t.sibling:null);Dt(zt,zt.current&1);break;case 19:if(l=(s&i.childLanes)!==0,(t.flags&128)!==0){if(l)return jh(t,i,s);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Dt(zt,zt.current),l)break;return null;case 22:case 23:return i.lanes=0,Bh(t,i,s)}return bi(t,i,s)}var qh,ju,Yh,$h;qh=function(t,i){for(var s=i.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},ju=function(){},Yh=function(t,i,s,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,br(hi.current);var h=null;switch(s){case"input":c=H(t,c),l=H(t,l),h=[];break;case"select":c=oe({},c,{value:void 0}),l=oe({},l,{value:void 0}),h=[];break;case"textarea":c=E(t,c),l=E(t,l),h=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=ca)}ft(s,l);var M;s=null;for(re in c)if(!l.hasOwnProperty(re)&&c.hasOwnProperty(re)&&c[re]!=null)if(re==="style"){var N=c[re];for(M in N)N.hasOwnProperty(M)&&(s||(s={}),s[M]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(a.hasOwnProperty(re)?h||(h=[]):(h=h||[]).push(re,null));for(re in l){var B=l[re];if(N=c?.[re],l.hasOwnProperty(re)&&B!==N&&(B!=null||N!=null))if(re==="style")if(N){for(M in N)!N.hasOwnProperty(M)||B&&B.hasOwnProperty(M)||(s||(s={}),s[M]="");for(M in B)B.hasOwnProperty(M)&&N[M]!==B[M]&&(s||(s={}),s[M]=B[M])}else s||(h||(h=[]),h.push(re,s)),s=B;else re==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,N=N?N.__html:void 0,B!=null&&N!==B&&(h=h||[]).push(re,B)):re==="children"?typeof B!="string"&&typeof B!="number"||(h=h||[]).push(re,""+B):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(a.hasOwnProperty(re)?(B!=null&&re==="onScroll"&&Ut("scroll",t),h||N===B||(h=[])):(h=h||[]).push(re,B))}s&&(h=h||[]).push("style",s);var re=h;(i.updateQueue=re)&&(i.flags|=4)}},$h=function(t,i,s,l){s!==l&&(i.flags|=4)};function Mo(t,i){if(!Ot)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function pn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function w_(t,i,s){var l=i.pendingProps;switch(pu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pn(i),null;case 1:return Rn(i.type)&&da(),pn(i),null;case 3:return l=i.stateNode,ps(),It(An),It(dn),Ru(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(_a(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Jn!==null&&(ic(Jn),Jn=null))),ju(t,i),pn(i),null;case 5:wu(i);var c=br(_o.current);if(s=i.type,t!==null&&i.stateNode!=null)Yh(t,i,s,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return pn(i),null}if(t=br(hi.current),_a(i)){l=i.stateNode,s=i.type;var h=i.memoizedProps;switch(l[di]=i,l[fo]=h,t=(i.mode&1)!==0,s){case"dialog":Ut("cancel",l),Ut("close",l);break;case"iframe":case"object":case"embed":Ut("load",l);break;case"video":case"audio":for(c=0;c<lo.length;c++)Ut(lo[c],l);break;case"source":Ut("error",l);break;case"img":case"image":case"link":Ut("error",l),Ut("load",l);break;case"details":Ut("toggle",l);break;case"input":vn(l,h),Ut("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Ut("invalid",l);break;case"textarea":ee(l,h),Ut("invalid",l)}ft(s,h),c=null;for(var M in h)if(h.hasOwnProperty(M)){var N=h[M];M==="children"?typeof N=="string"?l.textContent!==N&&(h.suppressHydrationWarning!==!0&&ua(l.textContent,N,t),c=["children",N]):typeof N=="number"&&l.textContent!==""+N&&(h.suppressHydrationWarning!==!0&&ua(l.textContent,N,t),c=["children",""+N]):a.hasOwnProperty(M)&&N!=null&&M==="onScroll"&&Ut("scroll",l)}switch(s){case"input":Pt(l),Ye(l,h,!0);break;case"textarea":Pt(l),ve(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=ca)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=de(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(s,{is:l.is}):(t=M.createElement(s),s==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,s),t[di]=i,t[fo]=l,qh(t,i,!1,!1),i.stateNode=t;e:{switch(M=it(s,l),s){case"dialog":Ut("cancel",t),Ut("close",t),c=l;break;case"iframe":case"object":case"embed":Ut("load",t),c=l;break;case"video":case"audio":for(c=0;c<lo.length;c++)Ut(lo[c],t);c=l;break;case"source":Ut("error",t),c=l;break;case"img":case"image":case"link":Ut("error",t),Ut("load",t),c=l;break;case"details":Ut("toggle",t),c=l;break;case"input":vn(t,l),c=H(t,l),Ut("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=oe({},l,{value:void 0}),Ut("invalid",t);break;case"textarea":ee(t,l),c=E(t,l),Ut("invalid",t);break;default:c=l}ft(s,c),N=c;for(h in N)if(N.hasOwnProperty(h)){var B=N[h];h==="style"?et(t,B):h==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&Ie(t,B)):h==="children"?typeof B=="string"?(s!=="textarea"||B!=="")&&ut(t,B):typeof B=="number"&&ut(t,""+B):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?B!=null&&h==="onScroll"&&Ut("scroll",t):B!=null&&P(t,h,B,M))}switch(s){case"input":Pt(t),Ye(t,l,!1);break;case"textarea":Pt(t),ve(t);break;case"option":l.value!=null&&t.setAttribute("value",""+we(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?L(t,!!l.multiple,h,!1):l.defaultValue!=null&&L(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=ca)}switch(s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return pn(i),null;case 6:if(t&&i.stateNode!=null)$h(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(s=br(_o.current),br(hi.current),_a(i)){if(l=i.stateNode,s=i.memoizedProps,l[di]=i,(h=l.nodeValue!==s)&&(t=Fn,t!==null))switch(t.tag){case 3:ua(l.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ua(l.nodeValue,s,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(s.nodeType===9?s:s.ownerDocument).createTextNode(l),l[di]=i,i.stateNode=l}return pn(i),null;case 13:if(It(zt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ot&&On!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Qd(),cs(),i.flags|=98560,h=!1;else if(h=_a(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[di]=i}else cs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;pn(i),h=!1}else Jn!==null&&(ic(Jn),Jn=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=s,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(zt.current&1)!==0?Kt===0&&(Kt=3):oc())),i.updateQueue!==null&&(i.flags|=4),pn(i),null);case 4:return ps(),ju(t,i),t===null&&uo(i.stateNode.containerInfo),pn(i),null;case 10:return yu(i.type._context),pn(i),null;case 17:return Rn(i.type)&&da(),pn(i),null;case 19:if(It(zt),h=i.memoizedState,h===null)return pn(i),null;if(l=(i.flags&128)!==0,M=h.rendering,M===null)if(l)Mo(h,!1);else{if(Kt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=Ea(t),M!==null){for(i.flags|=128,Mo(h,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=s,s=i.child;s!==null;)h=s,t=l,h.flags&=14680066,M=h.alternate,M===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=M.childLanes,h.lanes=M.lanes,h.child=M.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=M.memoizedProps,h.memoizedState=M.memoizedState,h.updateQueue=M.updateQueue,h.type=M.type,t=M.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return Dt(zt,zt.current&1|2),i.child}t=t.sibling}h.tail!==null&&K()>vs&&(i.flags|=128,l=!0,Mo(h,!1),i.lanes=4194304)}else{if(!l)if(t=Ea(M),t!==null){if(i.flags|=128,l=!0,s=t.updateQueue,s!==null&&(i.updateQueue=s,i.flags|=4),Mo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!M.alternate&&!Ot)return pn(i),null}else 2*K()-h.renderingStartTime>vs&&s!==1073741824&&(i.flags|=128,l=!0,Mo(h,!1),i.lanes=4194304);h.isBackwards?(M.sibling=i.child,i.child=M):(s=h.last,s!==null?s.sibling=M:i.child=M,h.last=M)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=K(),i.sibling=null,s=zt.current,Dt(zt,l?s&1|2:s&1),i):(pn(i),null);case 22:case 23:return sc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(kn&1073741824)!==0&&(pn(i),i.subtreeFlags&6&&(i.flags|=8192)):pn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function A_(t,i){switch(pu(i),i.tag){case 1:return Rn(i.type)&&da(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ps(),It(An),It(dn),Ru(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return wu(i),null;case 13:if(It(zt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));cs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return It(zt),null;case 4:return ps(),null;case 10:return yu(i.type._context),null;case 22:case 23:return sc(),null;case 24:return null;default:return null}}var Da=!1,mn=!1,R_=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function gs(t,i){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(l){Wt(t,i,l)}else s.current=null}function qu(t,i,s){try{s()}catch(l){Wt(t,i,l)}}var Kh=!1;function C_(t,i){if(su=Qo,t=Cd(),Zl(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var M=0,N=-1,B=-1,re=0,xe=0,ye=t,ge=null;t:for(;;){for(var Ue;ye!==s||c!==0&&ye.nodeType!==3||(N=M+c),ye!==h||l!==0&&ye.nodeType!==3||(B=M+l),ye.nodeType===3&&(M+=ye.nodeValue.length),(Ue=ye.firstChild)!==null;)ge=ye,ye=Ue;for(;;){if(ye===t)break t;if(ge===s&&++re===c&&(N=M),ge===h&&++xe===l&&(B=M),(Ue=ye.nextSibling)!==null)break;ye=ge,ge=ye.parentNode}ye=Ue}s=N===-1||B===-1?null:{start:N,end:B}}else s=null}s=s||{start:0,end:0}}else s=null;for(ou={focusedElem:t,selectionRange:s},Qo=!1,Fe=i;Fe!==null;)if(i=Fe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Fe=t;else for(;Fe!==null;){i=Fe;try{var ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var Ve=ze.memoizedProps,Xt=ze.memoizedState,$=i.stateNode,G=$.getSnapshotBeforeUpdate(i.elementType===i.type?Ve:ei(i.type,Ve),Xt);$.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var Z=i.stateNode.containerInfo;Z.nodeType===1?Z.textContent="":Z.nodeType===9&&Z.documentElement&&Z.removeChild(Z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Te){Wt(i,i.return,Te)}if(t=i.sibling,t!==null){t.return=i.return,Fe=t;break}Fe=i.return}return ze=Kh,Kh=!1,ze}function Eo(t,i,s){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&qu(i,s,h)}c=c.next}while(c!==l)}}function Na(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var l=s.create;s.destroy=l()}s=s.next}while(s!==i)}}function Yu(t){var i=t.ref;if(i!==null){var s=t.stateNode;switch(t.tag){case 5:t=s;break;default:t=s}typeof i=="function"?i(t):i.current=t}}function Zh(t){var i=t.alternate;i!==null&&(t.alternate=null,Zh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[di],delete i[fo],delete i[cu],delete i[c_],delete i[f_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Qh(t){return t.tag===5||t.tag===3||t.tag===4}function Jh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Qh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $u(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(t,i):s.insertBefore(t,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(t,s)):(i=s,i.appendChild(t)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=ca));else if(l!==4&&(t=t.child,t!==null))for($u(t,i,s),t=t.sibling;t!==null;)$u(t,i,s),t=t.sibling}function Ku(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Ku(t,i,s),t=t.sibling;t!==null;)Ku(t,i,s),t=t.sibling}var an=null,ti=!1;function rr(t,i,s){for(s=s.child;s!==null;)ep(t,i,s),s=s.sibling}function ep(t,i,s){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(Je,s)}catch{}switch(s.tag){case 5:mn||gs(s,i);case 6:var l=an,c=ti;an=null,rr(t,i,s),an=l,ti=c,an!==null&&(ti?(t=an,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):an.removeChild(s.stateNode));break;case 18:an!==null&&(ti?(t=an,s=s.stateNode,t.nodeType===8?uu(t.parentNode,s):t.nodeType===1&&uu(t,s),eo(t)):uu(an,s.stateNode));break;case 4:l=an,c=ti,an=s.stateNode.containerInfo,ti=!0,rr(t,i,s),an=l,ti=c;break;case 0:case 11:case 14:case 15:if(!mn&&(l=s.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var h=c,M=h.destroy;h=h.tag,M!==void 0&&((h&2)!==0||(h&4)!==0)&&qu(s,i,M),c=c.next}while(c!==l)}rr(t,i,s);break;case 1:if(!mn&&(gs(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=s.memoizedProps,l.state=s.memoizedState,l.componentWillUnmount()}catch(N){Wt(s,i,N)}rr(t,i,s);break;case 21:rr(t,i,s);break;case 22:s.mode&1?(mn=(l=mn)||s.memoizedState!==null,rr(t,i,s),mn=l):rr(t,i,s);break;default:rr(t,i,s)}}function tp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new R_),i.forEach(function(l){var c=O_.bind(null,t,l);s.has(l)||(s.add(l),l.then(c,c))})}}function ni(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];try{var h=t,M=i,N=M;e:for(;N!==null;){switch(N.tag){case 5:an=N.stateNode,ti=!1;break e;case 3:an=N.stateNode.containerInfo,ti=!0;break e;case 4:an=N.stateNode.containerInfo,ti=!0;break e}N=N.return}if(an===null)throw Error(n(160));ep(h,M,c),an=null,ti=!1;var B=c.alternate;B!==null&&(B.return=null),c.return=null}catch(re){Wt(c,i,re)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)np(i,t),i=i.sibling}function np(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ni(i,t),mi(t),l&4){try{Eo(3,t,t.return),Na(3,t)}catch(Ve){Wt(t,t.return,Ve)}try{Eo(5,t,t.return)}catch(Ve){Wt(t,t.return,Ve)}}break;case 1:ni(i,t),mi(t),l&512&&s!==null&&gs(s,s.return);break;case 5:if(ni(i,t),mi(t),l&512&&s!==null&&gs(s,s.return),t.flags&32){var c=t.stateNode;try{ut(c,"")}catch(Ve){Wt(t,t.return,Ve)}}if(l&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,M=s!==null?s.memoizedProps:h,N=t.type,B=t.updateQueue;if(t.updateQueue=null,B!==null)try{N==="input"&&h.type==="radio"&&h.name!=null&&ht(c,h),it(N,M);var re=it(N,h);for(M=0;M<B.length;M+=2){var xe=B[M],ye=B[M+1];xe==="style"?et(c,ye):xe==="dangerouslySetInnerHTML"?Ie(c,ye):xe==="children"?ut(c,ye):P(c,xe,ye,re)}switch(N){case"input":ct(c,h);break;case"textarea":pe(c,h);break;case"select":var ge=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var Ue=h.value;Ue!=null?L(c,!!h.multiple,Ue,!1):ge!==!!h.multiple&&(h.defaultValue!=null?L(c,!!h.multiple,h.defaultValue,!0):L(c,!!h.multiple,h.multiple?[]:"",!1))}c[fo]=h}catch(Ve){Wt(t,t.return,Ve)}}break;case 6:if(ni(i,t),mi(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(Ve){Wt(t,t.return,Ve)}}break;case 3:if(ni(i,t),mi(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{eo(i.containerInfo)}catch(Ve){Wt(t,t.return,Ve)}break;case 4:ni(i,t),mi(t);break;case 13:ni(i,t),mi(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(Ju=K())),l&4&&tp(t);break;case 22:if(xe=s!==null&&s.memoizedState!==null,t.mode&1?(mn=(re=mn)||xe,ni(i,t),mn=re):ni(i,t),mi(t),l&8192){if(re=t.memoizedState!==null,(t.stateNode.isHidden=re)&&!xe&&(t.mode&1)!==0)for(Fe=t,xe=t.child;xe!==null;){for(ye=Fe=xe;Fe!==null;){switch(ge=Fe,Ue=ge.child,ge.tag){case 0:case 11:case 14:case 15:Eo(4,ge,ge.return);break;case 1:gs(ge,ge.return);var ze=ge.stateNode;if(typeof ze.componentWillUnmount=="function"){l=ge,s=ge.return;try{i=l,ze.props=i.memoizedProps,ze.state=i.memoizedState,ze.componentWillUnmount()}catch(Ve){Wt(l,s,Ve)}}break;case 5:gs(ge,ge.return);break;case 22:if(ge.memoizedState!==null){sp(ye);continue}}Ue!==null?(Ue.return=ge,Fe=Ue):sp(ye)}xe=xe.sibling}e:for(xe=null,ye=t;;){if(ye.tag===5){if(xe===null){xe=ye;try{c=ye.stateNode,re?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(N=ye.stateNode,B=ye.memoizedProps.style,M=B!=null&&B.hasOwnProperty("display")?B.display:null,N.style.display=Ke("display",M))}catch(Ve){Wt(t,t.return,Ve)}}}else if(ye.tag===6){if(xe===null)try{ye.stateNode.nodeValue=re?"":ye.memoizedProps}catch(Ve){Wt(t,t.return,Ve)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===t)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===t)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===t)break e;xe===ye&&(xe=null),ye=ye.return}xe===ye&&(xe=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:ni(i,t),mi(t),l&4&&tp(t);break;case 21:break;default:ni(i,t),mi(t)}}function mi(t){var i=t.flags;if(i&2){try{e:{for(var s=t.return;s!==null;){if(Qh(s)){var l=s;break e}s=s.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(ut(c,""),l.flags&=-33);var h=Jh(t);Ku(t,h,c);break;case 3:case 4:var M=l.stateNode.containerInfo,N=Jh(t);$u(t,N,M);break;default:throw Error(n(161))}}catch(B){Wt(t,t.return,B)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function b_(t,i,s){Fe=t,ip(t)}function ip(t,i,s){for(var l=(t.mode&1)!==0;Fe!==null;){var c=Fe,h=c.child;if(c.tag===22&&l){var M=c.memoizedState!==null||Da;if(!M){var N=c.alternate,B=N!==null&&N.memoizedState!==null||mn;N=Da;var re=mn;if(Da=M,(mn=B)&&!re)for(Fe=c;Fe!==null;)M=Fe,B=M.child,M.tag===22&&M.memoizedState!==null?op(c):B!==null?(B.return=M,Fe=B):op(c);for(;h!==null;)Fe=h,ip(h),h=h.sibling;Fe=c,Da=N,mn=re}rp(t)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,Fe=h):rp(t)}}function rp(t){for(;Fe!==null;){var i=Fe;if((i.flags&8772)!==0){var s=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:mn||Na(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!mn)if(s===null)l.componentDidMount();else{var c=i.elementType===i.type?s.memoizedProps:ei(i.type,s.memoizedProps);l.componentDidUpdate(c,s.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&sh(i,h,l);break;case 3:var M=i.updateQueue;if(M!==null){if(s=null,i.child!==null)switch(i.child.tag){case 5:s=i.child.stateNode;break;case 1:s=i.child.stateNode}sh(i,M,s)}break;case 5:var N=i.stateNode;if(s===null&&i.flags&4){s=N;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&s.focus();break;case"img":B.src&&(s.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var re=i.alternate;if(re!==null){var xe=re.memoizedState;if(xe!==null){var ye=xe.dehydrated;ye!==null&&eo(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}mn||i.flags&512&&Yu(i)}catch(ge){Wt(i,i.return,ge)}}if(i===t){Fe=null;break}if(s=i.sibling,s!==null){s.return=i.return,Fe=s;break}Fe=i.return}}function sp(t){for(;Fe!==null;){var i=Fe;if(i===t){Fe=null;break}var s=i.sibling;if(s!==null){s.return=i.return,Fe=s;break}Fe=i.return}}function op(t){for(;Fe!==null;){var i=Fe;try{switch(i.tag){case 0:case 11:case 15:var s=i.return;try{Na(4,i)}catch(B){Wt(i,s,B)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(B){Wt(i,c,B)}}var h=i.return;try{Yu(i)}catch(B){Wt(i,h,B)}break;case 5:var M=i.return;try{Yu(i)}catch(B){Wt(i,M,B)}}}catch(B){Wt(i,i.return,B)}if(i===t){Fe=null;break}var N=i.sibling;if(N!==null){N.return=i.return,Fe=N;break}Fe=i.return}}var P_=Math.ceil,Ua=C.ReactCurrentDispatcher,Zu=C.ReactCurrentOwner,qn=C.ReactCurrentBatchConfig,Mt=0,nn=null,jt=null,ln=0,kn=0,_s=Ji(0),Kt=0,To=null,Lr=0,Ia=0,Qu=0,wo=null,bn=null,Ju=0,vs=1/0,Pi=null,Fa=!1,ec=null,sr=null,Oa=!1,or=null,ka=0,Ao=0,tc=null,Ba=-1,za=0;function Mn(){return(Mt&6)!==0?K():Ba!==-1?Ba:Ba=K()}function ar(t){return(t.mode&1)===0?1:(Mt&2)!==0&&ln!==0?ln&-ln:h_.transition!==null?(za===0&&(za=bt()),za):(t=St,t!==0||(t=window.event,t=t===void 0?16:ld(t.type)),t)}function ii(t,i,s,l){if(50<Ao)throw Ao=0,tc=null,Error(n(185));Jt(t,s,l),((Mt&2)===0||t!==nn)&&(t===nn&&((Mt&2)===0&&(Ia|=s),Kt===4&&lr(t,ln)),Pn(t,l),s===1&&Mt===0&&(i.mode&1)===0&&(vs=K()+500,pa&&tr()))}function Pn(t,i){var s=t.callbackNode;yn(t,i);var l=cn(t,t===nn?ln:0);if(l===0)s!==null&&R(s),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(s!=null&&R(s),i===1)t.tag===0?d_(lp.bind(null,t)):qd(lp.bind(null,t)),l_(function(){(Mt&6)===0&&tr()}),s=null;else{switch(fi(l)){case 1:s=Me;break;case 4:s=Ce;break;case 16:s=Ne;break;case 536870912:s=tt;break;default:s=Ne}s=gp(s,ap.bind(null,t))}t.callbackPriority=i,t.callbackNode=s}}function ap(t,i){if(Ba=-1,za=0,(Mt&6)!==0)throw Error(n(327));var s=t.callbackNode;if(xs()&&t.callbackNode!==s)return null;var l=cn(t,t===nn?ln:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Ha(t,l);else{i=l;var c=Mt;Mt|=2;var h=cp();(nn!==t||ln!==i)&&(Pi=null,vs=K()+500,Nr(t,i));do try{N_();break}catch(N){up(t,N)}while(!0);xu(),Ua.current=h,Mt=c,jt!==null?i=0:(nn=null,ln=0,i=Kt)}if(i!==0){if(i===2&&(c=Mi(t),c!==0&&(l=c,i=nc(t,c))),i===1)throw s=To,Nr(t,0),lr(t,l),Pn(t,K()),s;if(i===6)lr(t,l);else{if(c=t.current.alternate,(l&30)===0&&!L_(c)&&(i=Ha(t,l),i===2&&(h=Mi(t),h!==0&&(l=h,i=nc(t,h))),i===1))throw s=To,Nr(t,0),lr(t,l),Pn(t,K()),s;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Ur(t,bn,Pi);break;case 3:if(lr(t,l),(l&130023424)===l&&(i=Ju+500-K(),10<i)){if(cn(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){Mn(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=lu(Ur.bind(null,t,bn,Pi),i);break}Ur(t,bn,Pi);break;case 4:if(lr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var M=31-st(l);h=1<<M,M=i[M],M>c&&(c=M),l&=~h}if(l=c,l=K()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*P_(l/1960))-l,10<l){t.timeoutHandle=lu(Ur.bind(null,t,bn,Pi),l);break}Ur(t,bn,Pi);break;case 5:Ur(t,bn,Pi);break;default:throw Error(n(329))}}}return Pn(t,K()),t.callbackNode===s?ap.bind(null,t):null}function nc(t,i){var s=wo;return t.current.memoizedState.isDehydrated&&(Nr(t,i).flags|=256),t=Ha(t,i),t!==2&&(i=bn,bn=s,i!==null&&ic(i)),t}function ic(t){bn===null?bn=t:bn.push.apply(bn,t)}function L_(t){for(var i=t;;){if(i.flags&16384){var s=i.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var l=0;l<s.length;l++){var c=s[l],h=c.getSnapshot;c=c.value;try{if(!Qn(h(),c))return!1}catch{return!1}}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function lr(t,i){for(i&=~Qu,i&=~Ia,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var s=31-st(i),l=1<<s;t[s]=-1,i&=~l}}function lp(t){if((Mt&6)!==0)throw Error(n(327));xs();var i=cn(t,0);if((i&1)===0)return Pn(t,K()),null;var s=Ha(t,i);if(t.tag!==0&&s===2){var l=Mi(t);l!==0&&(i=l,s=nc(t,l))}if(s===1)throw s=To,Nr(t,0),lr(t,i),Pn(t,K()),s;if(s===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Ur(t,bn,Pi),Pn(t,K()),null}function rc(t,i){var s=Mt;Mt|=1;try{return t(i)}finally{Mt=s,Mt===0&&(vs=K()+500,pa&&tr())}}function Dr(t){or!==null&&or.tag===0&&(Mt&6)===0&&xs();var i=Mt;Mt|=1;var s=qn.transition,l=St;try{if(qn.transition=null,St=1,t)return t()}finally{St=l,qn.transition=s,Mt=i,(Mt&6)===0&&tr()}}function sc(){kn=_s.current,It(_s)}function Nr(t,i){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,a_(s)),jt!==null)for(s=jt.return;s!==null;){var l=s;switch(pu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&da();break;case 3:ps(),It(An),It(dn),Ru();break;case 5:wu(l);break;case 4:ps();break;case 13:It(zt);break;case 19:It(zt);break;case 10:yu(l.type._context);break;case 22:case 23:sc()}s=s.return}if(nn=t,jt=t=ur(t.current,null),ln=kn=i,Kt=0,To=null,Qu=Ia=Lr=0,bn=wo=null,Cr!==null){for(i=0;i<Cr.length;i++)if(s=Cr[i],l=s.interleaved,l!==null){s.interleaved=null;var c=l.next,h=s.pending;if(h!==null){var M=h.next;h.next=c,l.next=M}s.pending=l}Cr=null}return t}function up(t,i){do{var s=jt;try{if(xu(),Ta.current=Ca,wa){for(var l=Ht.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}wa=!1}if(Pr=0,tn=$t=Ht=null,vo=!1,xo=0,Zu.current=null,s===null||s.return===null){Kt=1,To=i,jt=null;break}e:{var h=t,M=s.return,N=s,B=i;if(i=ln,N.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var re=B,xe=N,ye=xe.tag;if((xe.mode&1)===0&&(ye===0||ye===11||ye===15)){var ge=xe.alternate;ge?(xe.updateQueue=ge.updateQueue,xe.memoizedState=ge.memoizedState,xe.lanes=ge.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Ue=Uh(M);if(Ue!==null){Ue.flags&=-257,Ih(Ue,M,N,h,i),Ue.mode&1&&Nh(h,re,i),i=Ue,B=re;var ze=i.updateQueue;if(ze===null){var Ve=new Set;Ve.add(B),i.updateQueue=Ve}else ze.add(B);break e}else{if((i&1)===0){Nh(h,re,i),oc();break e}B=Error(n(426))}}else if(Ot&&N.mode&1){var Xt=Uh(M);if(Xt!==null){(Xt.flags&65536)===0&&(Xt.flags|=256),Ih(Xt,M,N,h,i),_u(ms(B,N));break e}}h=B=ms(B,N),Kt!==4&&(Kt=2),wo===null?wo=[h]:wo.push(h),h=M;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var $=Lh(h,B,i);rh(h,$);break e;case 1:N=B;var G=h.type,Z=h.stateNode;if((h.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||Z!==null&&typeof Z.componentDidCatch=="function"&&(sr===null||!sr.has(Z)))){h.flags|=65536,i&=-i,h.lanes|=i;var Te=Dh(h,N,i);rh(h,Te);break e}}h=h.return}while(h!==null)}dp(s)}catch(je){i=je,jt===s&&s!==null&&(jt=s=s.return);continue}break}while(!0)}function cp(){var t=Ua.current;return Ua.current=Ca,t===null?Ca:t}function oc(){(Kt===0||Kt===3||Kt===2)&&(Kt=4),nn===null||(Lr&268435455)===0&&(Ia&268435455)===0||lr(nn,ln)}function Ha(t,i){var s=Mt;Mt|=2;var l=cp();(nn!==t||ln!==i)&&(Pi=null,Nr(t,i));do try{D_();break}catch(c){up(t,c)}while(!0);if(xu(),Mt=s,Ua.current=l,jt!==null)throw Error(n(261));return nn=null,ln=0,Kt}function D_(){for(;jt!==null;)fp(jt)}function N_(){for(;jt!==null&&!X();)fp(jt)}function fp(t){var i=mp(t.alternate,t,kn);t.memoizedProps=t.pendingProps,i===null?dp(t):jt=i,Zu.current=null}function dp(t){var i=t;do{var s=i.alternate;if(t=i.return,(i.flags&32768)===0){if(s=w_(s,i,kn),s!==null){jt=s;return}}else{if(s=A_(s,i),s!==null){s.flags&=32767,jt=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Kt=6,jt=null;return}}if(i=i.sibling,i!==null){jt=i;return}jt=i=t}while(i!==null);Kt===0&&(Kt=5)}function Ur(t,i,s){var l=St,c=qn.transition;try{qn.transition=null,St=1,U_(t,i,s,l)}finally{qn.transition=c,St=l}return null}function U_(t,i,s,l){do xs();while(or!==null);if((Mt&6)!==0)throw Error(n(327));s=t.finishedWork;var c=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=s.lanes|s.childLanes;if(on(t,h),t===nn&&(jt=nn=null,ln=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||Oa||(Oa=!0,gp(Ne,function(){return xs(),null})),h=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||h){h=qn.transition,qn.transition=null;var M=St;St=1;var N=Mt;Mt|=4,Zu.current=null,C_(t,s),np(s,t),e_(ou),Qo=!!su,ou=su=null,t.current=s,b_(s),ie(),Mt=N,St=M,qn.transition=h}else t.current=s;if(Oa&&(Oa=!1,or=t,ka=c),h=t.pendingLanes,h===0&&(sr=null),mt(s.stateNode),Pn(t,K()),i!==null)for(l=t.onRecoverableError,s=0;s<i.length;s++)c=i[s],l(c.value,{componentStack:c.stack,digest:c.digest});if(Fa)throw Fa=!1,t=ec,ec=null,t;return(ka&1)!==0&&t.tag!==0&&xs(),h=t.pendingLanes,(h&1)!==0?t===tc?Ao++:(Ao=0,tc=t):Ao=0,tr(),null}function xs(){if(or!==null){var t=fi(ka),i=qn.transition,s=St;try{if(qn.transition=null,St=16>t?16:t,or===null)var l=!1;else{if(t=or,or=null,ka=0,(Mt&6)!==0)throw Error(n(331));var c=Mt;for(Mt|=4,Fe=t.current;Fe!==null;){var h=Fe,M=h.child;if((Fe.flags&16)!==0){var N=h.deletions;if(N!==null){for(var B=0;B<N.length;B++){var re=N[B];for(Fe=re;Fe!==null;){var xe=Fe;switch(xe.tag){case 0:case 11:case 15:Eo(8,xe,h)}var ye=xe.child;if(ye!==null)ye.return=xe,Fe=ye;else for(;Fe!==null;){xe=Fe;var ge=xe.sibling,Ue=xe.return;if(Zh(xe),xe===re){Fe=null;break}if(ge!==null){ge.return=Ue,Fe=ge;break}Fe=Ue}}}var ze=h.alternate;if(ze!==null){var Ve=ze.child;if(Ve!==null){ze.child=null;do{var Xt=Ve.sibling;Ve.sibling=null,Ve=Xt}while(Ve!==null)}}Fe=h}}if((h.subtreeFlags&2064)!==0&&M!==null)M.return=h,Fe=M;else e:for(;Fe!==null;){if(h=Fe,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Eo(9,h,h.return)}var $=h.sibling;if($!==null){$.return=h.return,Fe=$;break e}Fe=h.return}}var G=t.current;for(Fe=G;Fe!==null;){M=Fe;var Z=M.child;if((M.subtreeFlags&2064)!==0&&Z!==null)Z.return=M,Fe=Z;else e:for(M=G;Fe!==null;){if(N=Fe,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:Na(9,N)}}catch(je){Wt(N,N.return,je)}if(N===M){Fe=null;break e}var Te=N.sibling;if(Te!==null){Te.return=N.return,Fe=Te;break e}Fe=N.return}}if(Mt=c,tr(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(Je,t)}catch{}l=!0}return l}finally{St=s,qn.transition=i}}return!1}function hp(t,i,s){i=ms(s,i),i=Lh(t,i,1),t=ir(t,i,1),i=Mn(),t!==null&&(Jt(t,1,i),Pn(t,i))}function Wt(t,i,s){if(t.tag===3)hp(t,t,s);else for(;i!==null;){if(i.tag===3){hp(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(sr===null||!sr.has(l))){t=ms(s,t),t=Dh(i,t,1),i=ir(i,t,1),t=Mn(),i!==null&&(Jt(i,1,t),Pn(i,t));break}}i=i.return}}function I_(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),i=Mn(),t.pingedLanes|=t.suspendedLanes&s,nn===t&&(ln&s)===s&&(Kt===4||Kt===3&&(ln&130023424)===ln&&500>K()-Ju?Nr(t,0):Qu|=s),Pn(t,i)}function pp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Gt,Gt<<=1,(Gt&130023424)===0&&(Gt=4194304)));var s=Mn();t=Ri(t,i),t!==null&&(Jt(t,i,s),Pn(t,s))}function F_(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),pp(t,s)}function O_(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(s=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),pp(t,s)}var mp;mp=function(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps||An.current)Cn=!0;else{if((t.lanes&s)===0&&(i.flags&128)===0)return Cn=!1,T_(t,i,s);Cn=(t.flags&131072)!==0}else Cn=!1,Ot&&(i.flags&1048576)!==0&&Yd(i,ga,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;La(t,i),t=i.pendingProps;var c=as(i,dn.current);hs(i,s),c=Pu(null,i,l,t,c,s);var h=Lu();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Rn(l)?(h=!0,ha(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,Eu(i),c.updater=ba,i.stateNode=c,c._reactInternals=i,Ou(i,l,t,s),i=Hu(null,i,l,!0,h,s)):(i.tag=0,Ot&&h&&hu(i),Sn(null,i,c,s),i=i.child),i;case 16:l=i.elementType;e:{switch(La(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=B_(l),t=ei(l,t),c){case 0:i=zu(null,i,l,t,s);break e;case 1:i=Hh(null,i,l,t,s);break e;case 11:i=Fh(null,i,l,t,s);break e;case 14:i=Oh(null,i,l,ei(l.type,t),s);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ei(l,c),zu(t,i,l,c,s);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ei(l,c),Hh(t,i,l,c,s);case 3:e:{if(Vh(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,c=h.element,ih(t,i),Ma(i,l,null,s);var M=i.memoizedState;if(l=M.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=ms(Error(n(423)),i),i=Gh(t,i,l,s,c);break e}else if(l!==c){c=ms(Error(n(424)),i),i=Gh(t,i,l,s,c);break e}else for(On=Qi(i.stateNode.containerInfo.firstChild),Fn=i,Ot=!0,Jn=null,s=th(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(cs(),l===c){i=bi(t,i,s);break e}Sn(t,i,l,s)}i=i.child}return i;case 5:return oh(i),t===null&&gu(i),l=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,M=c.children,au(l,c)?M=null:h!==null&&au(l,h)&&(i.flags|=32),zh(t,i),Sn(t,i,M,s),i.child;case 6:return t===null&&gu(i),null;case 13:return Wh(t,i,s);case 4:return Tu(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=fs(i,null,l,s):Sn(t,i,l,s),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ei(l,c),Fh(t,i,l,c,s);case 7:return Sn(t,i,i.pendingProps,s),i.child;case 8:return Sn(t,i,i.pendingProps.children,s),i.child;case 12:return Sn(t,i,i.pendingProps.children,s),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,h=i.memoizedProps,M=c.value,Dt(xa,l._currentValue),l._currentValue=M,h!==null)if(Qn(h.value,M)){if(h.children===c.children&&!An.current){i=bi(t,i,s);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var N=h.dependencies;if(N!==null){M=h.child;for(var B=N.firstContext;B!==null;){if(B.context===l){if(h.tag===1){B=Ci(-1,s&-s),B.tag=2;var re=h.updateQueue;if(re!==null){re=re.shared;var xe=re.pending;xe===null?B.next=B:(B.next=xe.next,xe.next=B),re.pending=B}}h.lanes|=s,B=h.alternate,B!==null&&(B.lanes|=s),Su(h.return,s,i),N.lanes|=s;break}B=B.next}}else if(h.tag===10)M=h.type===i.type?null:h.child;else if(h.tag===18){if(M=h.return,M===null)throw Error(n(341));M.lanes|=s,N=M.alternate,N!==null&&(N.lanes|=s),Su(M,s,i),M=h.sibling}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===i){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}Sn(t,i,c.children,s),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,hs(i,s),c=Xn(c),l=l(c),i.flags|=1,Sn(t,i,l,s),i.child;case 14:return l=i.type,c=ei(l,i.pendingProps),c=ei(l.type,c),Oh(t,i,l,c,s);case 15:return kh(t,i,i.type,i.pendingProps,s);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ei(l,c),La(t,i),i.tag=1,Rn(l)?(t=!0,ha(i)):t=!1,hs(i,s),bh(i,l,c),Ou(i,l,c,s),Hu(null,i,l,!0,t,s);case 19:return jh(t,i,s);case 22:return Bh(t,i,s)}throw Error(n(156,i.tag))};function gp(t,i){return $o(t,i)}function k_(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,i,s,l){return new k_(t,i,s,l)}function ac(t){return t=t.prototype,!(!t||!t.isReactComponent)}function B_(t){if(typeof t=="function")return ac(t)?1:0;if(t!=null){if(t=t.$$typeof,t===J)return 11;if(t===Y)return 14}return 2}function ur(t,i){var s=t.alternate;return s===null?(s=Yn(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function Va(t,i,s,l,c,h){var M=2;if(l=t,typeof t=="function")ac(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case U:return Ir(s.children,c,h,i);case z:M=8,c|=8;break;case b:return t=Yn(12,s,i,c|2),t.elementType=b,t.lanes=h,t;case Q:return t=Yn(13,s,i,c),t.elementType=Q,t.lanes=h,t;case ce:return t=Yn(19,s,i,c),t.elementType=ce,t.lanes=h,t;case ae:return Ga(s,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case T:M=10;break e;case k:M=9;break e;case J:M=11;break e;case Y:M=14;break e;case ne:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Yn(M,s,i,c),i.elementType=t,i.type=l,i.lanes=h,i}function Ir(t,i,s,l){return t=Yn(7,t,l,i),t.lanes=s,t}function Ga(t,i,s,l){return t=Yn(22,t,l,i),t.elementType=ae,t.lanes=s,t.stateNode={isHidden:!1},t}function lc(t,i,s){return t=Yn(6,t,null,i),t.lanes=s,t}function uc(t,i,s){return i=Yn(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function z_(t,i,s,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fn(0),this.expirationTimes=fn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fn(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function cc(t,i,s,l,c,h,M,N,B){return t=new z_(t,i,s,N,B),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Yn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Eu(h),t}function H_(t,i,s){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:l==null?null:""+l,children:t,containerInfo:i,implementation:s}}function _p(t){if(!t)return er;t=t._reactInternals;e:{if(ci(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Rn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var s=t.type;if(Rn(s))return Xd(t,s,i)}return i}function vp(t,i,s,l,c,h,M,N,B){return t=cc(s,l,!0,t,c,h,M,N,B),t.context=_p(null),s=t.current,l=Mn(),c=ar(s),h=Ci(l,c),h.callback=i??null,ir(s,h,c),t.current.lanes=c,Jt(t,c,l),Pn(t,l),t}function Wa(t,i,s,l){var c=i.current,h=Mn(),M=ar(c);return s=_p(s),i.context===null?i.context=s:i.pendingContext=s,i=Ci(h,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=ir(c,i,M),t!==null&&(ii(t,c,M,h),Sa(t,c,M)),M}function Xa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function xp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function fc(t,i){xp(t,i),(t=t.alternate)&&xp(t,i)}function V_(){return null}var yp=typeof reportError=="function"?reportError:function(t){console.error(t)};function dc(t){this._internalRoot=t}ja.prototype.render=dc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Wa(t,i,null,null)},ja.prototype.unmount=dc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Dr(function(){Wa(null,t,null,null)}),i[Ei]=null}};function ja(t){this._internalRoot=t}ja.prototype.unstable_scheduleHydration=function(t){if(t){var i=id();t={blockedOn:null,target:t,priority:i};for(var s=0;s<$i.length&&i!==0&&i<$i[s].priority;s++);$i.splice(s,0,t),s===0&&od(t)}};function hc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function qa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Sp(){}function G_(t,i,s,l,c){if(c){if(typeof l=="function"){var h=l;l=function(){var re=Xa(M);h.call(re)}}var M=vp(i,l,t,0,null,!1,!1,"",Sp);return t._reactRootContainer=M,t[Ei]=M.current,uo(t.nodeType===8?t.parentNode:t),Dr(),M}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var N=l;l=function(){var re=Xa(B);N.call(re)}}var B=cc(t,0,!1,null,null,!1,!1,"",Sp);return t._reactRootContainer=B,t[Ei]=B.current,uo(t.nodeType===8?t.parentNode:t),Dr(function(){Wa(i,B,s,l)}),B}function Ya(t,i,s,l,c){var h=s._reactRootContainer;if(h){var M=h;if(typeof c=="function"){var N=c;c=function(){var B=Xa(M);N.call(B)}}Wa(i,M,t,c)}else M=G_(s,i,t,c,l);return Xa(M)}td=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var s=pt(i.pendingLanes);s!==0&&(en(i,s|1),Pn(i,K()),(Mt&6)===0&&(vs=K()+500,tr()))}break;case 13:Dr(function(){var l=Ri(t,1);if(l!==null){var c=Mn();ii(l,t,1,c)}}),fc(t,1)}},kl=function(t){if(t.tag===13){var i=Ri(t,134217728);if(i!==null){var s=Mn();ii(i,t,134217728,s)}fc(t,134217728)}},nd=function(t){if(t.tag===13){var i=ar(t),s=Ri(t,i);if(s!==null){var l=Mn();ii(s,t,i,l)}fc(t,i)}},id=function(){return St},rd=function(t,i){var s=St;try{return St=t,i()}finally{St=s}},Re=function(t,i,s){switch(i){case"input":if(ct(t,s),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var c=fa(l);if(!c)throw Error(n(90));Lt(l),ct(l,c)}}}break;case"textarea":pe(t,s);break;case"select":i=s.value,i!=null&&L(t,!!s.multiple,i,!1)}},Nt=rc,Yt=Dr;var W_={usingClientEntryPoint:!1,Events:[ho,ss,fa,Pe,rt,rc]},Ro={findFiberByHostInstance:Tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},X_={bundleType:Ro.bundleType,version:Ro.version,rendererPackageName:Ro.rendererPackageName,rendererConfig:Ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=qo(t),t===null?null:t.stateNode},findFiberByHostInstance:Ro.findFiberByHostInstance||V_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$a.isDisabled&&$a.supportsFiber)try{Je=$a.inject(X_),He=$a}catch{}}return Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W_,Ln.createPortal=function(t,i){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hc(i))throw Error(n(200));return H_(t,i,null,s)},Ln.createRoot=function(t,i){if(!hc(t))throw Error(n(299));var s=!1,l="",c=yp;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=cc(t,1,!1,null,null,s,!1,l,c),t[Ei]=i.current,uo(t.nodeType===8?t.parentNode:t),new dc(i)},Ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=qo(i),t=t===null?null:t.stateNode,t},Ln.flushSync=function(t){return Dr(t)},Ln.hydrate=function(t,i,s){if(!qa(i))throw Error(n(200));return Ya(null,t,i,!0,s)},Ln.hydrateRoot=function(t,i,s){if(!hc(t))throw Error(n(405));var l=s!=null&&s.hydratedSources||null,c=!1,h="",M=yp;if(s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(M=s.onRecoverableError)),i=vp(i,null,t,1,s??null,c,!1,h,M),t[Ei]=i.current,uo(t),l)for(t=0;t<l.length;t++)s=l[t],c=s._getVersion,c=c(s._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[s,c]:i.mutableSourceEagerHydrationData.push(s,c);return new ja(i)},Ln.render=function(t,i,s){if(!qa(i))throw Error(n(200));return Ya(null,t,i,!1,s)},Ln.unmountComponentAtNode=function(t){if(!qa(t))throw Error(n(40));return t._reactRootContainer?(Dr(function(){Ya(null,null,t,!1,function(){t._reactRootContainer=null,t[Ei]=null})}),!0):!1},Ln.unstable_batchedUpdates=rc,Ln.unstable_renderSubtreeIntoContainer=function(t,i,s,l){if(!qa(s))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Ya(t,i,s,!1,l)},Ln.version="18.3.1-next-f1338f8080-20240426",Ln}var bp;function ev(){if(bp)return gc.exports;bp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),gc.exports=J_(),gc.exports}var Pp;function tv(){if(Pp)return Ka;Pp=1;var o=ev();return Ka.createRoot=o.createRoot,Ka.hydrateRoot=o.hydrateRoot,Ka}var nv=tv();const iv=Dm(nv);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hf="173",rv=0,Lp=1,sv=2,Nm=1,ov=2,Fi=3,yr=0,Nn=1,Oi=2,vr=0,Fs=1,Dp=2,Np=3,Up=4,av=5,Wr=100,lv=101,uv=102,cv=103,fv=104,dv=200,hv=201,pv=202,mv=203,Qc=204,Jc=205,gv=206,_v=207,vv=208,xv=209,yv=210,Sv=211,Mv=212,Ev=213,Tv=214,ef=0,tf=1,nf=2,Bs=3,rf=4,sf=5,of=6,af=7,Um=0,wv=1,Av=2,xr=0,Rv=1,Cv=2,bv=3,Pv=4,Lv=5,Dv=6,Nv=7,Im=300,zs=301,Hs=302,lf=303,uf=304,Nl=306,cf=1e3,jr=1001,ff=1002,ui=1003,Uv=1004,Za=1005,_i=1006,xc=1007,qr=1008,Hi=1009,Fm=1010,Om=1011,ko=1012,Vf=1013,Yr=1014,ki=1015,Bo=1016,Gf=1017,Wf=1018,Vs=1020,km=35902,Bm=1021,zm=1022,li=1023,Hm=1024,Vm=1025,Os=1026,Gs=1027,Gm=1028,Xf=1029,Wm=1030,jf=1031,qf=1033,Ml=33776,El=33777,Tl=33778,wl=33779,df=35840,hf=35841,pf=35842,mf=35843,gf=36196,_f=37492,vf=37496,xf=37808,yf=37809,Sf=37810,Mf=37811,Ef=37812,Tf=37813,wf=37814,Af=37815,Rf=37816,Cf=37817,bf=37818,Pf=37819,Lf=37820,Df=37821,Al=36492,Nf=36494,Uf=36495,Xm=36283,If=36284,Ff=36285,Of=36286,Iv=3200,Fv=3201,jm=0,Ov=1,_r="",Kn="srgb",Ws="srgb-linear",Cl="linear",Rt="srgb",ys=7680,Ip=519,kv=512,Bv=513,zv=514,qm=515,Hv=516,Vv=517,Gv=518,Wv=519,Fp=35044,Op="300 es",Bi=2e3,bl=2001;class js{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,f=a.length;u<f;u++)a[u].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yc=Math.PI/180,kf=180/Math.PI;function zo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(gn[o&255]+gn[o>>8&255]+gn[o>>16&255]+gn[o>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[n&63|128]+gn[n>>8&255]+"-"+gn[n>>16&255]+gn[n>>24&255]+gn[r&255]+gn[r>>8&255]+gn[r>>16&255]+gn[r>>24&255]).toLowerCase()}function gt(o,e,n){return Math.max(e,Math.min(n,o))}function Xv(o,e){return(o%e+e)%e}function Sc(o,e,n){return(1-n)*o+n*e}function bo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Dn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class _t{constructor(e=0,n=0){_t.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*a+e.x,this.y=u*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,n,r,a,u,f,d,p,m){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m)}set(e,n,r,a,u,f,d,p,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=d,_[3]=n,_[4]=u,_[5]=p,_[6]=r,_[7]=f,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],_=r[4],v=r[7],x=r[2],S=r[5],w=r[8],A=a[0],y=a[3],g=a[6],D=a[1],P=a[4],C=a[7],V=a[2],I=a[5],U=a[8];return u[0]=f*A+d*D+p*V,u[3]=f*y+d*P+p*I,u[6]=f*g+d*C+p*U,u[1]=m*A+_*D+v*V,u[4]=m*y+_*P+v*I,u[7]=m*g+_*C+v*U,u[2]=x*A+S*D+w*V,u[5]=x*y+S*P+w*I,u[8]=x*g+S*C+w*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8];return n*f*_-n*d*m-r*u*_+r*d*p+a*u*m-a*f*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8],v=_*f-d*m,x=d*p-_*u,S=m*u-f*p,w=n*v+r*x+a*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=v*A,e[1]=(a*m-_*r)*A,e[2]=(d*r-a*f)*A,e[3]=x*A,e[4]=(_*n-a*p)*A,e[5]=(a*u-d*n)*A,e[6]=S*A,e[7]=(r*p-m*n)*A,e[8]=(f*n-r*u)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,f,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*f+m*d)+f+e,-a*m,a*p,-a*(-m*f+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Mc.makeScale(e,n)),this}rotate(e){return this.premultiply(Mc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Mc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mc=new ot;function Ym(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Pl(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function jv(){const o=Pl("canvas");return o.style.display="block",o}const kp={};function Us(o){o in kp||(kp[o]=!0,console.warn(o))}function qv(o,e,n){return new Promise(function(r,a){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:a();break;case o.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function Yv(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function $v(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Bp=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zp=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kv(){const o={enabled:!0,workingColorSpace:Ws,spaces:{},convert:function(a,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===Rt&&(a.r=zi(a.r),a.g=zi(a.g),a.b=zi(a.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(a.applyMatrix3(this.spaces[u].toXYZ),a.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Rt&&(a.r=ks(a.r),a.g=ks(a.g),a.b=ks(a.b))),a},fromWorkingColorSpace:function(a,u){return this.convert(a,this.workingColorSpace,u)},toWorkingColorSpace:function(a,u){return this.convert(a,u,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===_r?Cl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,u=this.workingColorSpace){return a.fromArray(this.spaces[u].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,u,f){return a.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Ws]:{primaries:e,whitePoint:r,transfer:Cl,toXYZ:Bp,fromXYZ:zp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:e,whitePoint:r,transfer:Rt,toXYZ:Bp,fromXYZ:zp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}}),o}const Tt=Kv();function zi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ks(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Ss;class Zv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ss===void 0&&(Ss=Pl("canvas")),Ss.width=e.width,Ss.height=e.height;const r=Ss.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ss}return n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Pl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let f=0;f<u.length;f++)u[f]=zi(u[f]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(zi(n[r]/255)*255):n[r]=zi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qv=0;class $m{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=zo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?u.push(Ec(a[f].image)):u.push(Ec(a[f]))}else u=Ec(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function Ec(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Zv.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jv=0;class Un extends js{constructor(e=Un.DEFAULT_IMAGE,n=Un.DEFAULT_MAPPING,r=jr,a=jr,u=_i,f=qr,d=li,p=Hi,m=Un.DEFAULT_ANISOTROPY,_=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jv++}),this.uuid=zo(),this.name="",this.source=new $m(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Im)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cf:e.x=e.x-Math.floor(e.x);break;case jr:e.x=e.x<0?0:1;break;case ff:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cf:e.y=e.y-Math.floor(e.y);break;case jr:e.y=e.y<0?0:1;break;case ff:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=Im;Un.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,n=0,r=0,a=1){Ct.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*a+f[12]*u,this.y=f[1]*n+f[5]*r+f[9]*a+f[13]*u,this.z=f[2]*n+f[6]*r+f[10]*a+f[14]*u,this.w=f[3]*n+f[7]*r+f[11]*a+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const p=e.elements,m=p[0],_=p[4],v=p[8],x=p[1],S=p[5],w=p[9],A=p[2],y=p[6],g=p[10];if(Math.abs(_-x)<.01&&Math.abs(v-A)<.01&&Math.abs(w-y)<.01){if(Math.abs(_+x)<.1&&Math.abs(v+A)<.1&&Math.abs(w+y)<.1&&Math.abs(m+S+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const P=(m+1)/2,C=(S+1)/2,V=(g+1)/2,I=(_+x)/4,U=(v+A)/4,z=(w+y)/4;return P>C&&P>V?P<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(P),a=I/r,u=U/r):C>V?C<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(C),r=I/a,u=z/a):V<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(V),r=U/u,a=z/u),this.set(r,a,u,n),this}let D=Math.sqrt((y-w)*(y-w)+(v-A)*(v-A)+(x-_)*(x-_));return Math.abs(D)<.001&&(D=1),this.x=(y-w)/D,this.y=(v-A)/D,this.z=(x-_)/D,this.w=Math.acos((m+S+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this.w=gt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this.w=gt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class e0 extends js{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Un(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const n=Object.assign({},e.texture.image);return this.texture.source=new $m(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $r extends e0{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Km extends Un{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=ui,this.minFilter=ui,this.wrapR=jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class t0 extends Un{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=ui,this.minFilter=ui,this.wrapR=jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ho{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,f,d){let p=r[a+0],m=r[a+1],_=r[a+2],v=r[a+3];const x=u[f+0],S=u[f+1],w=u[f+2],A=u[f+3];if(d===0){e[n+0]=p,e[n+1]=m,e[n+2]=_,e[n+3]=v;return}if(d===1){e[n+0]=x,e[n+1]=S,e[n+2]=w,e[n+3]=A;return}if(v!==A||p!==x||m!==S||_!==w){let y=1-d;const g=p*x+m*S+_*w+v*A,D=g>=0?1:-1,P=1-g*g;if(P>Number.EPSILON){const V=Math.sqrt(P),I=Math.atan2(V,g*D);y=Math.sin(y*I)/V,d=Math.sin(d*I)/V}const C=d*D;if(p=p*y+x*C,m=m*y+S*C,_=_*y+w*C,v=v*y+A*C,y===1-d){const V=1/Math.sqrt(p*p+m*m+_*_+v*v);p*=V,m*=V,_*=V,v*=V}}e[n]=p,e[n+1]=m,e[n+2]=_,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,a,u,f){const d=r[a],p=r[a+1],m=r[a+2],_=r[a+3],v=u[f],x=u[f+1],S=u[f+2],w=u[f+3];return e[n]=d*w+_*v+p*S-m*x,e[n+1]=p*w+_*x+m*v-d*S,e[n+2]=m*w+_*S+d*x-p*v,e[n+3]=_*w-d*v-p*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(r/2),_=d(a/2),v=d(u/2),x=p(r/2),S=p(a/2),w=p(u/2);switch(f){case"XYZ":this._x=x*_*v+m*S*w,this._y=m*S*v-x*_*w,this._z=m*_*w+x*S*v,this._w=m*_*v-x*S*w;break;case"YXZ":this._x=x*_*v+m*S*w,this._y=m*S*v-x*_*w,this._z=m*_*w-x*S*v,this._w=m*_*v+x*S*w;break;case"ZXY":this._x=x*_*v-m*S*w,this._y=m*S*v+x*_*w,this._z=m*_*w+x*S*v,this._w=m*_*v-x*S*w;break;case"ZYX":this._x=x*_*v-m*S*w,this._y=m*S*v+x*_*w,this._z=m*_*w-x*S*v,this._w=m*_*v+x*S*w;break;case"YZX":this._x=x*_*v+m*S*w,this._y=m*S*v+x*_*w,this._z=m*_*w-x*S*v,this._w=m*_*v-x*S*w;break;case"XZY":this._x=x*_*v-m*S*w,this._y=m*S*v-x*_*w,this._z=m*_*w+x*S*v,this._w=m*_*v+x*S*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],f=n[1],d=n[5],p=n[9],m=n[2],_=n[6],v=n[10],x=r+d+v;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(_-p)*S,this._y=(u-m)*S,this._z=(f-a)*S}else if(r>d&&r>v){const S=2*Math.sqrt(1+r-d-v);this._w=(_-p)/S,this._x=.25*S,this._y=(a+f)/S,this._z=(u+m)/S}else if(d>v){const S=2*Math.sqrt(1+d-r-v);this._w=(u-m)/S,this._x=(a+f)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+v-r-d);this._w=(f-a)/S,this._x=(u+m)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,f=e._w,d=n._x,p=n._y,m=n._z,_=n._w;return this._x=r*_+f*d+a*m-u*p,this._y=a*_+f*p+u*d-r*m,this._z=u*_+f*m+r*p-a*d,this._w=f*_-r*d-a*p-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,f=this._w;let d=f*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=a,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-n;return this._w=S*f+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*u+n*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,d),v=Math.sin((1-n)*_)/m,x=Math.sin(n*_)/m;return this._w=f*v+this._w*x,this._x=r*v+this._x*x,this._y=a*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,n=0,r=0){q.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Hp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Hp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,f=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*f,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*f,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*a-d*r),_=2*(d*n-u*a),v=2*(u*r-f*n);return this.x=n+p*m+f*v-d*_,this.y=r+p*_+d*m-u*v,this.z=a+p*v+u*_-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,f=n.x,d=n.y,p=n.z;return this.x=a*p-u*d,this.y=u*f-r*p,this.z=r*d-a*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Tc.copy(this).projectOnVector(e),this.sub(Tc)}reflect(e){return this.sub(Tc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tc=new q,Hp=new Ho;class Vo{constructor(e=new q(1/0,1/0,1/0),n=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ri.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ri.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ri.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,ri):ri.fromBufferAttribute(u,f),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qa.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Qa.copy(r.boundingBox)),Qa.applyMatrix4(e.matrixWorld),this.union(Qa)}const a=e.children;for(let u=0,f=a.length;u<f;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Po),Ja.subVectors(this.max,Po),Ms.subVectors(e.a,Po),Es.subVectors(e.b,Po),Ts.subVectors(e.c,Po),fr.subVectors(Es,Ms),dr.subVectors(Ts,Es),Fr.subVectors(Ms,Ts);let n=[0,-fr.z,fr.y,0,-dr.z,dr.y,0,-Fr.z,Fr.y,fr.z,0,-fr.x,dr.z,0,-dr.x,Fr.z,0,-Fr.x,-fr.y,fr.x,0,-dr.y,dr.x,0,-Fr.y,Fr.x,0];return!wc(n,Ms,Es,Ts,Ja)||(n=[1,0,0,0,1,0,0,0,1],!wc(n,Ms,Es,Ts,Ja))?!1:(el.crossVectors(fr,dr),n=[el.x,el.y,el.z],wc(n,Ms,Es,Ts,Ja))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Li=[new q,new q,new q,new q,new q,new q,new q,new q],ri=new q,Qa=new Vo,Ms=new q,Es=new q,Ts=new q,fr=new q,dr=new q,Fr=new q,Po=new q,Ja=new q,el=new q,Or=new q;function wc(o,e,n,r,a){for(let u=0,f=o.length-3;u<=f;u+=3){Or.fromArray(o,u);const d=a.x*Math.abs(Or.x)+a.y*Math.abs(Or.y)+a.z*Math.abs(Or.z),p=e.dot(Or),m=n.dot(Or),_=r.dot(Or);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const n0=new Vo,Lo=new q,Ac=new q;class Ul{constructor(e=new q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):n0.setFromPoints(e).getCenter(r);let a=0;for(let u=0,f=e.length;u<f;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lo.subVectors(e,this.center);const n=Lo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Lo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ac.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lo.copy(e.center).add(Ac)),this.expandByPoint(Lo.copy(e.center).sub(Ac))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Di=new q,Rc=new q,tl=new q,hr=new q,Cc=new q,nl=new q,bc=new q;class Zm{constructor(e=new q,n=new q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Di.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,n),Di.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Rc.copy(e).add(n).multiplyScalar(.5),tl.copy(n).sub(e).normalize(),hr.copy(this.origin).sub(Rc);const u=e.distanceTo(n)*.5,f=-this.direction.dot(tl),d=hr.dot(this.direction),p=-hr.dot(tl),m=hr.lengthSq(),_=Math.abs(1-f*f);let v,x,S,w;if(_>0)if(v=f*p-d,x=f*d-p,w=u*_,v>=0)if(x>=-w)if(x<=w){const A=1/_;v*=A,x*=A,S=v*(v+f*x+2*d)+x*(f*v+x+2*p)+m}else x=u,v=Math.max(0,-(f*x+d)),S=-v*v+x*(x+2*p)+m;else x=-u,v=Math.max(0,-(f*x+d)),S=-v*v+x*(x+2*p)+m;else x<=-w?(v=Math.max(0,-(-f*u+d)),x=v>0?-u:Math.min(Math.max(-u,-p),u),S=-v*v+x*(x+2*p)+m):x<=w?(v=0,x=Math.min(Math.max(-u,-p),u),S=x*(x+2*p)+m):(v=Math.max(0,-(f*u+d)),x=v>0?u:Math.min(Math.max(-u,-p),u),S=-v*v+x*(x+2*p)+m);else x=f>0?-u:u,v=Math.max(0,-(f*x+d)),S=-v*v+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Rc).addScaledVector(tl,x),S}intersectSphere(e,n){Di.subVectors(e.center,this.origin);const r=Di.dot(this.direction),a=Di.dot(Di)-r*r,u=e.radius*e.radius;if(a>u)return null;const f=Math.sqrt(u-a),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,f,d,p;const m=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),_>=0?(u=(e.min.y-x.y)*_,f=(e.max.y-x.y)*_):(u=(e.max.y-x.y)*_,f=(e.min.y-x.y)*_),r>f||u>a||((u>r||isNaN(r))&&(r=u),(f<a||isNaN(a))&&(a=f),v>=0?(d=(e.min.z-x.z)*v,p=(e.max.z-x.z)*v):(d=(e.max.z-x.z)*v,p=(e.min.z-x.z)*v),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,n,r,a,u){Cc.subVectors(n,e),nl.subVectors(r,e),bc.crossVectors(Cc,nl);let f=this.direction.dot(bc),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;hr.subVectors(this.origin,e);const p=d*this.direction.dot(nl.crossVectors(hr,nl));if(p<0)return null;const m=d*this.direction.dot(Cc.cross(hr));if(m<0||p+m>f)return null;const _=-d*hr.dot(bc);return _<0?null:this.at(_/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,n,r,a,u,f,d,p,m,_,v,x,S,w,A,y){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m,_,v,x,S,w,A,y)}set(e,n,r,a,u,f,d,p,m,_,v,x,S,w,A,y){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=u,g[5]=f,g[9]=d,g[13]=p,g[2]=m,g[6]=_,g[10]=v,g[14]=x,g[3]=S,g[7]=w,g[11]=A,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/ws.setFromMatrixColumn(e,0).length(),u=1/ws.setFromMatrixColumn(e,1).length(),f=1/ws.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),_=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const x=f*_,S=f*v,w=d*_,A=d*v;n[0]=p*_,n[4]=-p*v,n[8]=m,n[1]=S+w*m,n[5]=x-A*m,n[9]=-d*p,n[2]=A-x*m,n[6]=w+S*m,n[10]=f*p}else if(e.order==="YXZ"){const x=p*_,S=p*v,w=m*_,A=m*v;n[0]=x+A*d,n[4]=w*d-S,n[8]=f*m,n[1]=f*v,n[5]=f*_,n[9]=-d,n[2]=S*d-w,n[6]=A+x*d,n[10]=f*p}else if(e.order==="ZXY"){const x=p*_,S=p*v,w=m*_,A=m*v;n[0]=x-A*d,n[4]=-f*v,n[8]=w+S*d,n[1]=S+w*d,n[5]=f*_,n[9]=A-x*d,n[2]=-f*m,n[6]=d,n[10]=f*p}else if(e.order==="ZYX"){const x=f*_,S=f*v,w=d*_,A=d*v;n[0]=p*_,n[4]=w*m-S,n[8]=x*m+A,n[1]=p*v,n[5]=A*m+x,n[9]=S*m-w,n[2]=-m,n[6]=d*p,n[10]=f*p}else if(e.order==="YZX"){const x=f*p,S=f*m,w=d*p,A=d*m;n[0]=p*_,n[4]=A-x*v,n[8]=w*v+S,n[1]=v,n[5]=f*_,n[9]=-d*_,n[2]=-m*_,n[6]=S*v+w,n[10]=x-A*v}else if(e.order==="XZY"){const x=f*p,S=f*m,w=d*p,A=d*m;n[0]=p*_,n[4]=-v,n[8]=m*_,n[1]=x*v+A,n[5]=f*_,n[9]=S*v-w,n[2]=w*v-S,n[6]=d*_,n[10]=A*v+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(i0,e,r0)}lookAt(e,n,r){const a=this.elements;return Bn.subVectors(e,n),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),pr.crossVectors(r,Bn),pr.lengthSq()===0&&(Math.abs(r.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),pr.crossVectors(r,Bn)),pr.normalize(),il.crossVectors(Bn,pr),a[0]=pr.x,a[4]=il.x,a[8]=Bn.x,a[1]=pr.y,a[5]=il.y,a[9]=Bn.y,a[2]=pr.z,a[6]=il.z,a[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],_=r[1],v=r[5],x=r[9],S=r[13],w=r[2],A=r[6],y=r[10],g=r[14],D=r[3],P=r[7],C=r[11],V=r[15],I=a[0],U=a[4],z=a[8],b=a[12],T=a[1],k=a[5],J=a[9],Q=a[13],ce=a[2],Y=a[6],ne=a[10],ae=a[14],O=a[3],ue=a[7],oe=a[11],F=a[15];return u[0]=f*I+d*T+p*ce+m*O,u[4]=f*U+d*k+p*Y+m*ue,u[8]=f*z+d*J+p*ne+m*oe,u[12]=f*b+d*Q+p*ae+m*F,u[1]=_*I+v*T+x*ce+S*O,u[5]=_*U+v*k+x*Y+S*ue,u[9]=_*z+v*J+x*ne+S*oe,u[13]=_*b+v*Q+x*ae+S*F,u[2]=w*I+A*T+y*ce+g*O,u[6]=w*U+A*k+y*Y+g*ue,u[10]=w*z+A*J+y*ne+g*oe,u[14]=w*b+A*Q+y*ae+g*F,u[3]=D*I+P*T+C*ce+V*O,u[7]=D*U+P*k+C*Y+V*ue,u[11]=D*z+P*J+C*ne+V*oe,u[15]=D*b+P*Q+C*ae+V*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],f=e[1],d=e[5],p=e[9],m=e[13],_=e[2],v=e[6],x=e[10],S=e[14],w=e[3],A=e[7],y=e[11],g=e[15];return w*(+u*p*v-a*m*v-u*d*x+r*m*x+a*d*S-r*p*S)+A*(+n*p*S-n*m*x+u*f*x-a*f*S+a*m*_-u*p*_)+y*(+n*m*v-n*d*S-u*f*v+r*f*S+u*d*_-r*m*_)+g*(-a*d*_-n*p*v+n*d*x+a*f*v-r*f*x+r*p*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8],v=e[9],x=e[10],S=e[11],w=e[12],A=e[13],y=e[14],g=e[15],D=v*y*m-A*x*m+A*p*S-d*y*S-v*p*g+d*x*g,P=w*x*m-_*y*m-w*p*S+f*y*S+_*p*g-f*x*g,C=_*A*m-w*v*m+w*d*S-f*A*S-_*d*g+f*v*g,V=w*v*p-_*A*p-w*d*x+f*A*x+_*d*y-f*v*y,I=n*D+r*P+a*C+u*V;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/I;return e[0]=D*U,e[1]=(A*x*u-v*y*u-A*a*S+r*y*S+v*a*g-r*x*g)*U,e[2]=(d*y*u-A*p*u+A*a*m-r*y*m-d*a*g+r*p*g)*U,e[3]=(v*p*u-d*x*u-v*a*m+r*x*m+d*a*S-r*p*S)*U,e[4]=P*U,e[5]=(_*y*u-w*x*u+w*a*S-n*y*S-_*a*g+n*x*g)*U,e[6]=(w*p*u-f*y*u-w*a*m+n*y*m+f*a*g-n*p*g)*U,e[7]=(f*x*u-_*p*u+_*a*m-n*x*m-f*a*S+n*p*S)*U,e[8]=C*U,e[9]=(w*v*u-_*A*u-w*r*S+n*A*S+_*r*g-n*v*g)*U,e[10]=(f*A*u-w*d*u+w*r*m-n*A*m-f*r*g+n*d*g)*U,e[11]=(_*d*u-f*v*u-_*r*m+n*v*m+f*r*S-n*d*S)*U,e[12]=V*U,e[13]=(_*A*a-w*v*a+w*r*x-n*A*x-_*r*y+n*v*y)*U,e[14]=(w*d*a-f*A*a-w*r*p+n*A*p+f*r*y-n*d*y)*U,e[15]=(f*v*a-_*d*a+_*r*p-n*v*p-f*r*x+n*d*x)*U,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,f=e.x,d=e.y,p=e.z,m=u*f,_=u*d;return this.set(m*f+r,m*d-a*p,m*p+a*d,0,m*d+a*p,_*d+r,_*p-a*f,0,m*p-a*d,_*p+a*f,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,f){return this.set(1,r,u,0,e,1,f,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,f=n._y,d=n._z,p=n._w,m=u+u,_=f+f,v=d+d,x=u*m,S=u*_,w=u*v,A=f*_,y=f*v,g=d*v,D=p*m,P=p*_,C=p*v,V=r.x,I=r.y,U=r.z;return a[0]=(1-(A+g))*V,a[1]=(S+C)*V,a[2]=(w-P)*V,a[3]=0,a[4]=(S-C)*I,a[5]=(1-(x+g))*I,a[6]=(y+D)*I,a[7]=0,a[8]=(w+P)*U,a[9]=(y-D)*U,a[10]=(1-(x+A))*U,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=ws.set(a[0],a[1],a[2]).length();const f=ws.set(a[4],a[5],a[6]).length(),d=ws.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],si.copy(this);const m=1/u,_=1/f,v=1/d;return si.elements[0]*=m,si.elements[1]*=m,si.elements[2]*=m,si.elements[4]*=_,si.elements[5]*=_,si.elements[6]*=_,si.elements[8]*=v,si.elements[9]*=v,si.elements[10]*=v,n.setFromRotationMatrix(si),r.x=u,r.y=f,r.z=d,this}makePerspective(e,n,r,a,u,f,d=Bi){const p=this.elements,m=2*u/(n-e),_=2*u/(r-a),v=(n+e)/(n-e),x=(r+a)/(r-a);let S,w;if(d===Bi)S=-(f+u)/(f-u),w=-2*f*u/(f-u);else if(d===bl)S=-f/(f-u),w=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,u,f,d=Bi){const p=this.elements,m=1/(n-e),_=1/(r-a),v=1/(f-u),x=(n+e)*m,S=(r+a)*_;let w,A;if(d===Bi)w=(f+u)*v,A=-2*v;else if(d===bl)w=u*v,A=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=A,p[14]=-w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const ws=new q,si=new Bt,i0=new q(0,0,0),r0=new q(1,1,1),pr=new q,il=new q,Bn=new q,Vp=new Bt,Gp=new Ho;class xi{constructor(e=0,n=0,r=0,a=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],f=a[4],d=a[8],p=a[1],m=a[5],_=a[9],v=a[2],x=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(gt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-gt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(gt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Vp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Gp.setFromEuler(this),this.setFromQuaternion(Gp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";let Qm=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},s0=0;const Wp=new q,As=new Ho,Ni=new Bt,rl=new q,Do=new q,o0=new q,a0=new Ho,Xp=new q(1,0,0),jp=new q(0,1,0),qp=new q(0,0,1),Yp={type:"added"},l0={type:"removed"},Rs={type:"childadded",child:null},Pc={type:"childremoved",child:null};class Tn extends js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=zo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const e=new q,n=new xi,r=new Ho,a=new q(1,1,1);function u(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Bt},normalMatrix:{value:new ot}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return As.setFromAxisAngle(e,n),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,n){return As.setFromAxisAngle(e,n),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(Xp,e)}rotateY(e){return this.rotateOnAxis(jp,e)}rotateZ(e){return this.rotateOnAxis(qp,e)}translateOnAxis(e,n){return Wp.copy(e).applyQuaternion(this.quaternion),this.position.add(Wp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Xp,e)}translateY(e){return this.translateOnAxis(jp,e)}translateZ(e){return this.translateOnAxis(qp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?rl.copy(e):rl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(Do,rl,this.up):Ni.lookAt(rl,Do,this.up),this.quaternion.setFromRotationMatrix(Ni),a&&(Ni.extractRotation(a.matrixWorld),As.setFromRotationMatrix(Ni),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yp),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(l0),Pc.child=e,this.dispatchEvent(Pc),Pc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yp),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,e,o0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,a0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const v=p[m];u(e.shapes,v)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(u(e.animations,p))}}if(n){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),_=f(e.images),v=f(e.shapes),x=f(e.skeletons),S=f(e.animations),w=f(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),w.length>0&&(r.nodes=w)}return r.object=a,r;function f(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Tn.DEFAULT_UP=new q(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new q,Ui=new q,Lc=new q,Ii=new q,Cs=new q,bs=new q,$p=new q,Dc=new q,Nc=new q,Uc=new q,Ic=new Ct,Fc=new Ct,Oc=new Ct;class ai{constructor(e=new q,n=new q,r=new q){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),oi.subVectors(e,n),a.cross(oi);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){oi.subVectors(a,n),Ui.subVectors(r,n),Lc.subVectors(e,n);const f=oi.dot(oi),d=oi.dot(Ui),p=oi.dot(Lc),m=Ui.dot(Ui),_=Ui.dot(Lc),v=f*m-d*d;if(v===0)return u.set(0,0,0),null;const x=1/v,S=(m*p-d*_)*x,w=(f*_-d*p)*x;return u.set(1-S-w,w,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,n,r,a,u,f,d,p){return this.getBarycoord(e,n,r,a,Ii)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Ii.x),p.addScaledVector(f,Ii.y),p.addScaledVector(d,Ii.z),p)}static getInterpolatedAttribute(e,n,r,a,u,f){return Ic.setScalar(0),Fc.setScalar(0),Oc.setScalar(0),Ic.fromBufferAttribute(e,n),Fc.fromBufferAttribute(e,r),Oc.fromBufferAttribute(e,a),f.setScalar(0),f.addScaledVector(Ic,u.x),f.addScaledVector(Fc,u.y),f.addScaledVector(Oc,u.z),f}static isFrontFacing(e,n,r,a){return oi.subVectors(r,n),Ui.subVectors(e,n),oi.cross(Ui).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),oi.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ai.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return ai.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let f,d;Cs.subVectors(a,r),bs.subVectors(u,r),Dc.subVectors(e,r);const p=Cs.dot(Dc),m=bs.dot(Dc);if(p<=0&&m<=0)return n.copy(r);Nc.subVectors(e,a);const _=Cs.dot(Nc),v=bs.dot(Nc);if(_>=0&&v<=_)return n.copy(a);const x=p*v-_*m;if(x<=0&&p>=0&&_<=0)return f=p/(p-_),n.copy(r).addScaledVector(Cs,f);Uc.subVectors(e,u);const S=Cs.dot(Uc),w=bs.dot(Uc);if(w>=0&&S<=w)return n.copy(u);const A=S*m-p*w;if(A<=0&&m>=0&&w<=0)return d=m/(m-w),n.copy(r).addScaledVector(bs,d);const y=_*w-S*v;if(y<=0&&v-_>=0&&S-w>=0)return $p.subVectors(u,a),d=(v-_)/(v-_+(S-w)),n.copy(a).addScaledVector($p,d);const g=1/(y+A+x);return f=A*g,d=x*g,n.copy(r).addScaledVector(Cs,f).addScaledVector(bs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},sl={h:0,s:0,l:0};function kc(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class xt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Tt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Tt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Tt.workingColorSpace){if(e=Xv(e,1),n=gt(n,0,1),r=gt(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,f=2*r-u;this.r=kc(f,u,e+1/3),this.g=kc(f,u,e),this.b=kc(f,u,e-1/3)}return Tt.toWorkingColorSpace(this,a),this}setStyle(e,n=Kn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Kn){const r=Jm[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return Tt.fromWorkingColorSpace(_n.copy(this),e),Math.round(gt(_n.r*255,0,255))*65536+Math.round(gt(_n.g*255,0,255))*256+Math.round(gt(_n.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Tt.workingColorSpace){Tt.fromWorkingColorSpace(_n.copy(this),n);const r=_n.r,a=_n.g,u=_n.b,f=Math.max(r,a,u),d=Math.min(r,a,u);let p,m;const _=(d+f)/2;if(d===f)p=0,m=0;else{const v=f-d;switch(m=_<=.5?v/(f+d):v/(2-f-d),f){case r:p=(a-u)/v+(a<u?6:0);break;case a:p=(u-r)/v+2;break;case u:p=(r-a)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,n=Tt.workingColorSpace){return Tt.fromWorkingColorSpace(_n.copy(this),n),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=Kn){Tt.fromWorkingColorSpace(_n.copy(this),e);const n=_n.r,r=_n.g,a=_n.b;return e!==Kn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(mr),this.setHSL(mr.h+e,mr.s+n,mr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(mr),e.getHSL(sl);const r=Sc(mr.h,sl.h,n),a=Sc(mr.s,sl.s,n),u=Sc(mr.l,sl.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new xt;xt.NAMES=Jm;let u0=0;class qs extends js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=zo(),this.name="",this.type="Material",this.blending=Fs,this.side=yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qc,this.blendDst=Jc,this.blendEquation=Wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ip,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(r.blending=this.blending),this.side!==yr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Qc&&(r.blendSrc=this.blendSrc),this.blendDst!==Jc&&(r.blendDst=this.blendDst),this.blendEquation!==Wr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ip&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}if(n){const u=a(e.textures),f=a(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class eg extends qs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=Um,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new q,ol=new _t;let c0=0;class vi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:c0++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Fp,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)ol.fromBufferAttribute(this,n),ol.applyMatrix3(e),this.setXY(n,ol.x,ol.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.applyMatrix3(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.applyMatrix4(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.applyNormalMatrix(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.transformDirection(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=bo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Dn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=bo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Dn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=bo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Dn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=bo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Dn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=bo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Dn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Dn(n,this.array),r=Dn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Dn(n,this.array),r=Dn(r,this.array),a=Dn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=Dn(n,this.array),r=Dn(r,this.array),a=Dn(a,this.array),u=Dn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fp&&(e.usage=this.usage),e}}class tg extends vi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class ng extends vi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class un extends vi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let f0=0;const $n=new Bt,Bc=new Tn,Ps=new q,zn=new Vo,No=new Vo,sn=new q;class Zn extends js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=zo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ym(e)?ng:tg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ot().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,n,r){return $n.makeTranslation(e,n,r),this.applyMatrix4($n),this}scale(e,n,r){return $n.makeScale(e,n,r),this.applyMatrix4($n),this}lookAt(e){return Bc.lookAt(e),Bc.updateMatrix(),this.applyMatrix4(Bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,u=e.length;a<u;a++){const f=e[a];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new un(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const u=e[a];n.setXYZ(a,u.x,u.y,u.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];zn.setFromBufferAttribute(u),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ul);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const r=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),n)for(let u=0,f=n.length;u<f;u++){const d=n[u];No.setFromBufferAttribute(d),this.morphTargetsRelative?(sn.addVectors(zn.min,No.min),zn.expandByPoint(sn),sn.addVectors(zn.max,No.max),zn.expandByPoint(sn)):(zn.expandByPoint(No.min),zn.expandByPoint(No.max))}zn.getCenter(r);let a=0;for(let u=0,f=e.count;u<f;u++)sn.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(sn));if(n)for(let u=0,f=n.length;u<f;u++){const d=n[u],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)sn.fromBufferAttribute(d,m),p&&(Ps.fromBufferAttribute(e,m),sn.add(Ps)),a=Math.max(a,r.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let z=0;z<r.count;z++)d[z]=new q,p[z]=new q;const m=new q,_=new q,v=new q,x=new _t,S=new _t,w=new _t,A=new q,y=new q;function g(z,b,T){m.fromBufferAttribute(r,z),_.fromBufferAttribute(r,b),v.fromBufferAttribute(r,T),x.fromBufferAttribute(u,z),S.fromBufferAttribute(u,b),w.fromBufferAttribute(u,T),_.sub(m),v.sub(m),S.sub(x),w.sub(x);const k=1/(S.x*w.y-w.x*S.y);isFinite(k)&&(A.copy(_).multiplyScalar(w.y).addScaledVector(v,-S.y).multiplyScalar(k),y.copy(v).multiplyScalar(S.x).addScaledVector(_,-w.x).multiplyScalar(k),d[z].add(A),d[b].add(A),d[T].add(A),p[z].add(y),p[b].add(y),p[T].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let z=0,b=D.length;z<b;++z){const T=D[z],k=T.start,J=T.count;for(let Q=k,ce=k+J;Q<ce;Q+=3)g(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const P=new q,C=new q,V=new q,I=new q;function U(z){V.fromBufferAttribute(a,z),I.copy(V);const b=d[z];P.copy(b),P.sub(V.multiplyScalar(V.dot(b))).normalize(),C.crossVectors(I,b);const k=C.dot(p[z])<0?-1:1;f.setXYZW(z,P.x,P.y,P.z,k)}for(let z=0,b=D.length;z<b;++z){const T=D[z],k=T.start,J=T.count;for(let Q=k,ce=k+J;Q<ce;Q+=3)U(e.getX(Q+0)),U(e.getX(Q+1)),U(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new vi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new q,u=new q,f=new q,d=new q,p=new q,m=new q,_=new q,v=new q;if(e)for(let x=0,S=e.count;x<S;x+=3){const w=e.getX(x+0),A=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(n,w),u.fromBufferAttribute(n,A),f.fromBufferAttribute(n,y),_.subVectors(f,u),v.subVectors(a,u),_.cross(v),d.fromBufferAttribute(r,w),p.fromBufferAttribute(r,A),m.fromBufferAttribute(r,y),d.add(_),p.add(_),m.add(_),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(A,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,S=n.count;x<S;x+=3)a.fromBufferAttribute(n,x+0),u.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),_.subVectors(f,u),v.subVectors(a,u),_.cross(v),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)sn.fromBufferAttribute(e,n),sn.normalize(),e.setXYZ(n,sn.x,sn.y,sn.z)}toNonIndexed(){function e(d,p){const m=d.array,_=d.itemSize,v=d.normalized,x=new m.constructor(p.length*_);let S=0,w=0;for(let A=0,y=p.length;A<y;A++){d.isInterleavedBufferAttribute?S=p[A]*d.data.stride+d.offset:S=p[A]*_;for(let g=0;g<_;g++)x[w++]=m[S++]}return new vi(x,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Zn,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);n.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let _=0,v=m.length;_<v;_++){const x=m[_],S=e(x,r);p.push(S)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let v=0,x=m.length;v<x;v++){const S=m[v];_.push(S.toJSON(e.data))}_.length>0&&(a[p]=_,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(n))}const u=e.morphAttributes;for(const m in u){const _=[],v=u[m];for(let x=0,S=v.length;x<S;x++)_.push(v[x].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,_=f.length;m<_;m++){const v=f[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kp=new Bt,kr=new Zm,al=new Ul,Zp=new q,ll=new q,ul=new q,cl=new q,zc=new q,fl=new q,Qp=new q,dl=new q;class Vn extends Tn{constructor(e=new Zn,n=new eg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){fl.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const _=d[p],v=u[p];_!==0&&(zc.fromBufferAttribute(v,e),f?fl.addScaledVector(zc,_):fl.addScaledVector(zc.sub(n),_))}n.add(fl)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),al.copy(r.boundingSphere),al.applyMatrix4(u),kr.copy(e.ray).recast(e.near),!(al.containsPoint(kr.origin)===!1&&(kr.intersectSphere(al,Zp)===null||kr.origin.distanceToSquared(Zp)>(e.far-e.near)**2))&&(Kp.copy(u).invert(),kr.copy(e.ray).applyMatrix4(Kp),!(r.boundingBox!==null&&kr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,kr)))}_computeIntersections(e,n,r){let a;const u=this.geometry,f=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,v=u.attributes.normal,x=u.groups,S=u.drawRange;if(d!==null)if(Array.isArray(f))for(let w=0,A=x.length;w<A;w++){const y=x[w],g=f[y.materialIndex],D=Math.max(y.start,S.start),P=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let C=D,V=P;C<V;C+=3){const I=d.getX(C),U=d.getX(C+1),z=d.getX(C+2);a=hl(this,g,e,r,m,_,v,I,U,z),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),A=Math.min(d.count,S.start+S.count);for(let y=w,g=A;y<g;y+=3){const D=d.getX(y),P=d.getX(y+1),C=d.getX(y+2);a=hl(this,f,e,r,m,_,v,D,P,C),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(f))for(let w=0,A=x.length;w<A;w++){const y=x[w],g=f[y.materialIndex],D=Math.max(y.start,S.start),P=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let C=D,V=P;C<V;C+=3){const I=C,U=C+1,z=C+2;a=hl(this,g,e,r,m,_,v,I,U,z),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),A=Math.min(p.count,S.start+S.count);for(let y=w,g=A;y<g;y+=3){const D=y,P=y+1,C=y+2;a=hl(this,f,e,r,m,_,v,D,P,C),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}}}function d0(o,e,n,r,a,u,f,d){let p;if(e.side===Nn?p=r.intersectTriangle(f,u,a,!0,d):p=r.intersectTriangle(a,u,f,e.side===yr,d),p===null)return null;dl.copy(d),dl.applyMatrix4(o.matrixWorld);const m=n.ray.origin.distanceTo(dl);return m<n.near||m>n.far?null:{distance:m,point:dl.clone(),object:o}}function hl(o,e,n,r,a,u,f,d,p,m){o.getVertexPosition(d,ll),o.getVertexPosition(p,ul),o.getVertexPosition(m,cl);const _=d0(o,e,n,r,ll,ul,cl,Qp);if(_){const v=new q;ai.getBarycoord(Qp,ll,ul,cl,v),a&&(_.uv=ai.getInterpolatedAttribute(a,d,p,m,v,new _t)),u&&(_.uv1=ai.getInterpolatedAttribute(u,d,p,m,v,new _t)),f&&(_.normal=ai.getInterpolatedAttribute(f,d,p,m,v,new q),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new q,materialIndex:0};ai.getNormal(ll,ul,cl,x.normal),_.face=x,_.barycoord=v}return _}class Ys extends Zn{constructor(e=1,n=1,r=1,a=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:f};const d=this;a=Math.floor(a),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],_=[],v=[];let x=0,S=0;w("z","y","x",-1,-1,r,n,e,f,u,0),w("z","y","x",1,-1,r,n,-e,f,u,1),w("x","z","y",1,1,e,r,n,a,f,2),w("x","z","y",1,-1,e,r,-n,a,f,3),w("x","y","z",1,-1,e,n,r,a,u,4),w("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(p),this.setAttribute("position",new un(m,3)),this.setAttribute("normal",new un(_,3)),this.setAttribute("uv",new un(v,2));function w(A,y,g,D,P,C,V,I,U,z,b){const T=C/U,k=V/z,J=C/2,Q=V/2,ce=I/2,Y=U+1,ne=z+1;let ae=0,O=0;const ue=new q;for(let oe=0;oe<ne;oe++){const F=oe*k-Q;for(let se=0;se<Y;se++){const De=se*T-J;ue[A]=De*D,ue[y]=F*P,ue[g]=ce,m.push(ue.x,ue.y,ue.z),ue[A]=0,ue[y]=0,ue[g]=I>0?1:-1,_.push(ue.x,ue.y,ue.z),v.push(se/U),v.push(1-oe/z),ae+=1}}for(let oe=0;oe<z;oe++)for(let F=0;F<U;F++){const se=x+F+Y*oe,De=x+F+Y*(oe+1),te=x+(F+1)+Y*(oe+1),fe=x+(F+1)+Y*oe;p.push(se,De,fe),p.push(De,te,fe),O+=6}d.addGroup(S,O,b),S+=O,x+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xs(o){const e={};for(const n in o){e[n]={};for(const r in o[n]){const a=o[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function En(o){const e={};for(let n=0;n<o.length;n++){const r=Xs(o[n]);for(const a in r)e[a]=r[a]}return e}function h0(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function ig(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const p0={clone:Xs,merge:En};var m0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,g0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sr extends qs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=m0,this.fragmentShader=g0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=h0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?n.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[a]={type:"m4",value:f.toArray()}:n.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class rg extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=Bi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gr=new q,Jp=new _t,em=new _t;class Hn extends rg{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=kf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kf*2*Math.atan(Math.tan(yc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gr.x,gr.y).multiplyScalar(-e/gr.z),gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(gr.x,gr.y).multiplyScalar(-e/gr.z)}getViewSize(e,n){return this.getViewBounds(e,Jp,em),n.subVectors(em,Jp)}setViewOffset(e,n,r,a,u,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(yc*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*a/p,n-=f.offsetY*r/m,a*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ls=-90,Ds=1;class _0 extends Tn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Hn(Ls,Ds,e,n);a.layers=this.layers,this.add(a);const u=new Hn(Ls,Ds,e,n);u.layers=this.layers,this.add(u);const f=new Hn(Ls,Ds,e,n);f.layers=this.layers,this.add(f);const d=new Hn(Ls,Ds,e,n);d.layers=this.layers,this.add(d);const p=new Hn(Ls,Ds,e,n);p.layers=this.layers,this.add(p);const m=new Hn(Ls,Ds,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,f,d,p]=n;for(const m of n)this.remove(m);if(e===Bi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===bl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,p,m,_]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,f),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(v,x,S),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class sg extends Un{constructor(e,n,r,a,u,f,d,p,m,_){e=e!==void 0?e:[],n=n!==void 0?n:zs,super(e,n,r,a,u,f,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class v0 extends $r{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new sg(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:_i}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Ys(5,5,5),u=new Sr({name:"CubemapFromEquirect",uniforms:Xs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Nn,blending:vr});u.uniforms.tEquirect.value=n;const f=new Vn(a,u),d=n.minFilter;return n.minFilter===qr&&(n.minFilter=_i),new _0(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n,r,a){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,a);e.setRenderTarget(u)}}class Fo extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const x0={type:"move"};class Hc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const A of e.hand.values()){const y=n.getJointPose(A,r),g=this._getHandJoint(m,A);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const _=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=_.position.distanceTo(v.position),S=.02,w=.005;m.inputState.pinching&&x>S+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(x0)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Fo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class Yf{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new xt(e),this.density=n}clone(){return new Yf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class y0 extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Vc=new q,S0=new q,M0=new ot;class Vr{constructor(e=new q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Vc.subVectors(r,n).cross(S0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Vc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||M0.getNormalMatrix(e),a=this.coplanarPoint(Vc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Br=new Ul,pl=new q;class $f{constructor(e=new Vr,n=new Vr,r=new Vr,a=new Vr,u=new Vr,f=new Vr){this.planes=[e,n,r,a,u,f]}set(e,n,r,a,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Bi){const r=this.planes,a=e.elements,u=a[0],f=a[1],d=a[2],p=a[3],m=a[4],_=a[5],v=a[6],x=a[7],S=a[8],w=a[9],A=a[10],y=a[11],g=a[12],D=a[13],P=a[14],C=a[15];if(r[0].setComponents(p-u,x-m,y-S,C-g).normalize(),r[1].setComponents(p+u,x+m,y+S,C+g).normalize(),r[2].setComponents(p+f,x+_,y+w,C+D).normalize(),r[3].setComponents(p-f,x-_,y-w,C-D).normalize(),r[4].setComponents(p-d,x-v,y-A,C-P).normalize(),n===Bi)r[5].setComponents(p+d,x+v,y+A,C+P).normalize();else if(n===bl)r[5].setComponents(d,v,A,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){return Br.center.set(0,0,0),Br.radius=.7071067811865476,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(pl.x=a.normal.x>0?e.max.x:e.min.x,pl.y=a.normal.y>0?e.max.y:e.min.y,pl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(pl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class og extends qs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ll=new q,Dl=new q,tm=new Bt,Uo=new Zm,ml=new Ul,Gc=new q,nm=new q;class E0 extends Tn{constructor(e=new Zn,n=new og){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,u=n.count;a<u;a++)Ll.fromBufferAttribute(n,a-1),Dl.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=Ll.distanceTo(Dl);e.setAttribute("lineDistance",new un(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,u=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),ml.copy(r.boundingSphere),ml.applyMatrix4(a),ml.radius+=u,e.ray.intersectsSphere(ml)===!1)return;tm.copy(a).invert(),Uo.copy(e.ray).applyMatrix4(tm);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,_=r.index,x=r.attributes.position;if(_!==null){const S=Math.max(0,f.start),w=Math.min(_.count,f.start+f.count);for(let A=S,y=w-1;A<y;A+=m){const g=_.getX(A),D=_.getX(A+1),P=gl(this,e,Uo,p,g,D,A);P&&n.push(P)}if(this.isLineLoop){const A=_.getX(w-1),y=_.getX(S),g=gl(this,e,Uo,p,A,y,w-1);g&&n.push(g)}}else{const S=Math.max(0,f.start),w=Math.min(x.count,f.start+f.count);for(let A=S,y=w-1;A<y;A+=m){const g=gl(this,e,Uo,p,A,A+1,A);g&&n.push(g)}if(this.isLineLoop){const A=gl(this,e,Uo,p,w-1,S,w-1);A&&n.push(A)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function gl(o,e,n,r,a,u,f){const d=o.geometry.attributes.position;if(Ll.fromBufferAttribute(d,a),Dl.fromBufferAttribute(d,u),n.distanceSqToSegment(Ll,Dl,Gc,nm)>r)return;Gc.applyMatrix4(o.matrixWorld);const m=e.ray.origin.distanceTo(Gc);if(!(m<e.near||m>e.far))return{distance:m,point:nm.clone().applyMatrix4(o.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:o}}class ag extends Un{constructor(e,n,r,a,u,f,d,p,m,_=Os){if(_!==Os&&_!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Os&&(r=Yr),r===void 0&&_===Gs&&(r=Vs),super(null,a,u,f,d,p,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:ui,this.minFilter=p!==void 0?p:ui,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Kf extends Zn{constructor(e=1,n=1,r=1,a=32,u=1,f=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:a,heightSegments:u,openEnded:f,thetaStart:d,thetaLength:p};const m=this;a=Math.floor(a),u=Math.floor(u);const _=[],v=[],x=[],S=[];let w=0;const A=[],y=r/2;let g=0;D(),f===!1&&(e>0&&P(!0),n>0&&P(!1)),this.setIndex(_),this.setAttribute("position",new un(v,3)),this.setAttribute("normal",new un(x,3)),this.setAttribute("uv",new un(S,2));function D(){const C=new q,V=new q;let I=0;const U=(n-e)/r;for(let z=0;z<=u;z++){const b=[],T=z/u,k=T*(n-e)+e;for(let J=0;J<=a;J++){const Q=J/a,ce=Q*p+d,Y=Math.sin(ce),ne=Math.cos(ce);V.x=k*Y,V.y=-T*r+y,V.z=k*ne,v.push(V.x,V.y,V.z),C.set(Y,U,ne).normalize(),x.push(C.x,C.y,C.z),S.push(Q,1-T),b.push(w++)}A.push(b)}for(let z=0;z<a;z++)for(let b=0;b<u;b++){const T=A[b][z],k=A[b+1][z],J=A[b+1][z+1],Q=A[b][z+1];(e>0||b!==0)&&(_.push(T,k,Q),I+=3),(n>0||b!==u-1)&&(_.push(k,J,Q),I+=3)}m.addGroup(g,I,0),g+=I}function P(C){const V=w,I=new _t,U=new q;let z=0;const b=C===!0?e:n,T=C===!0?1:-1;for(let J=1;J<=a;J++)v.push(0,y*T,0),x.push(0,T,0),S.push(.5,.5),w++;const k=w;for(let J=0;J<=a;J++){const ce=J/a*p+d,Y=Math.cos(ce),ne=Math.sin(ce);U.x=b*ne,U.y=y*T,U.z=b*Y,v.push(U.x,U.y,U.z),x.push(0,T,0),I.x=Y*.5+.5,I.y=ne*.5*T+.5,S.push(I.x,I.y),w++}for(let J=0;J<a;J++){const Q=V+J,ce=k+J;C===!0?_.push(ce,ce+1,Q):_.push(ce+1,ce,Q),z+=3}m.addGroup(g,z,C===!0?1:2),g+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Zf extends Zn{constructor(e=[],n=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:a};const u=[],f=[];d(a),m(r),_(),this.setAttribute("position",new un(u,3)),this.setAttribute("normal",new un(u.slice(),3)),this.setAttribute("uv",new un(f,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function d(D){const P=new q,C=new q,V=new q;for(let I=0;I<n.length;I+=3)S(n[I+0],P),S(n[I+1],C),S(n[I+2],V),p(P,C,V,D)}function p(D,P,C,V){const I=V+1,U=[];for(let z=0;z<=I;z++){U[z]=[];const b=D.clone().lerp(C,z/I),T=P.clone().lerp(C,z/I),k=I-z;for(let J=0;J<=k;J++)J===0&&z===I?U[z][J]=b:U[z][J]=b.clone().lerp(T,J/k)}for(let z=0;z<I;z++)for(let b=0;b<2*(I-z)-1;b++){const T=Math.floor(b/2);b%2===0?(x(U[z][T+1]),x(U[z+1][T]),x(U[z][T])):(x(U[z][T+1]),x(U[z+1][T+1]),x(U[z+1][T]))}}function m(D){const P=new q;for(let C=0;C<u.length;C+=3)P.x=u[C+0],P.y=u[C+1],P.z=u[C+2],P.normalize().multiplyScalar(D),u[C+0]=P.x,u[C+1]=P.y,u[C+2]=P.z}function _(){const D=new q;for(let P=0;P<u.length;P+=3){D.x=u[P+0],D.y=u[P+1],D.z=u[P+2];const C=y(D)/2/Math.PI+.5,V=g(D)/Math.PI+.5;f.push(C,1-V)}w(),v()}function v(){for(let D=0;D<f.length;D+=6){const P=f[D+0],C=f[D+2],V=f[D+4],I=Math.max(P,C,V),U=Math.min(P,C,V);I>.9&&U<.1&&(P<.2&&(f[D+0]+=1),C<.2&&(f[D+2]+=1),V<.2&&(f[D+4]+=1))}}function x(D){u.push(D.x,D.y,D.z)}function S(D,P){const C=D*3;P.x=e[C+0],P.y=e[C+1],P.z=e[C+2]}function w(){const D=new q,P=new q,C=new q,V=new q,I=new _t,U=new _t,z=new _t;for(let b=0,T=0;b<u.length;b+=9,T+=6){D.set(u[b+0],u[b+1],u[b+2]),P.set(u[b+3],u[b+4],u[b+5]),C.set(u[b+6],u[b+7],u[b+8]),I.set(f[T+0],f[T+1]),U.set(f[T+2],f[T+3]),z.set(f[T+4],f[T+5]),V.copy(D).add(P).add(C).divideScalar(3);const k=y(V);A(I,T+0,D,k),A(U,T+2,P,k),A(z,T+4,C,k)}}function A(D,P,C,V){V<0&&D.x===1&&(f[P]=D.x-1),C.x===0&&C.z===0&&(f[P]=V/2/Math.PI+.5)}function y(D){return Math.atan2(D.z,-D.x)}function g(D){return Math.atan2(-D.y,Math.sqrt(D.x*D.x+D.z*D.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zf(e.vertices,e.indices,e.radius,e.details)}}class Qf extends Zf{constructor(e=1,n=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,a,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Qf(e.radius,e.detail)}}class Il extends Zn{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,f=n/2,d=Math.floor(r),p=Math.floor(a),m=d+1,_=p+1,v=e/d,x=n/p,S=[],w=[],A=[],y=[];for(let g=0;g<_;g++){const D=g*x-f;for(let P=0;P<m;P++){const C=P*v-u;w.push(C,-D,0),A.push(0,0,1),y.push(P/d),y.push(1-g/p)}}for(let g=0;g<p;g++)for(let D=0;D<d;D++){const P=D+m*g,C=D+m*(g+1),V=D+1+m*(g+1),I=D+1+m*g;S.push(P,C,I),S.push(C,V,I)}this.setIndex(S),this.setAttribute("position",new un(w,3)),this.setAttribute("normal",new un(A,3)),this.setAttribute("uv",new un(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Il(e.width,e.height,e.widthSegments,e.heightSegments)}}class Jf extends Zn{constructor(e=1,n=32,r=16,a=0,u=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:a,phiLength:u,thetaStart:f,thetaLength:d},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const p=Math.min(f+d,Math.PI);let m=0;const _=[],v=new q,x=new q,S=[],w=[],A=[],y=[];for(let g=0;g<=r;g++){const D=[],P=g/r;let C=0;g===0&&f===0?C=.5/n:g===r&&p===Math.PI&&(C=-.5/n);for(let V=0;V<=n;V++){const I=V/n;v.x=-e*Math.cos(a+I*u)*Math.sin(f+P*d),v.y=e*Math.cos(f+P*d),v.z=e*Math.sin(a+I*u)*Math.sin(f+P*d),w.push(v.x,v.y,v.z),x.copy(v).normalize(),A.push(x.x,x.y,x.z),y.push(I+C,1-P),D.push(m++)}_.push(D)}for(let g=0;g<r;g++)for(let D=0;D<n;D++){const P=_[g][D+1],C=_[g][D],V=_[g+1][D],I=_[g+1][D+1];(g!==0||f>0)&&S.push(P,C,I),(g!==r-1||p<Math.PI)&&S.push(C,V,I)}this.setIndex(S),this.setAttribute("position",new un(w,3)),this.setAttribute("normal",new un(A,3)),this.setAttribute("uv",new un(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _l extends qs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jm,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class T0 extends qs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Iv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class w0 extends qs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class lg extends Tn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Wc=new Bt,im=new q,rm=new q;class A0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $f,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;im.setFromMatrixPosition(e.matrixWorld),n.position.copy(im),rm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(rm),n.updateMatrixWorld(),Wc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wc),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Wc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const sm=new Bt,Io=new q,Xc=new q;class R0 extends A0{constructor(){super(new Hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _t(4,2),this._viewportCount=6,this._viewports=[new Ct(2,1,1,1),new Ct(0,1,1,1),new Ct(3,1,1,1),new Ct(1,1,1,1),new Ct(3,0,1,1),new Ct(1,0,1,1)],this._cubeDirections=[new q(1,0,0),new q(-1,0,0),new q(0,0,1),new q(0,0,-1),new q(0,1,0),new q(0,-1,0)],this._cubeUps=[new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,0,1),new q(0,0,-1)]}updateMatrices(e,n=0){const r=this.camera,a=this.matrix,u=e.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),Io.setFromMatrixPosition(e.matrixWorld),r.position.copy(Io),Xc.copy(r.position),Xc.add(this._cubeDirections[n]),r.up.copy(this._cubeUps[n]),r.lookAt(Xc),r.updateMatrixWorld(),a.makeTranslation(-Io.x,-Io.y,-Io.z),sm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sm)}}class C0 extends lg{constructor(e,n,r=0,a=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new R0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class b0 extends rg{constructor(e=-1,n=1,r=1,a=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,f=r+e,d=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class P0 extends lg{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class L0 extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function om(o,e,n,r){const a=D0(r);switch(n){case Bm:return o*e;case Hm:return o*e;case Vm:return o*e*2;case Gm:return o*e/a.components*a.byteLength;case Xf:return o*e/a.components*a.byteLength;case Wm:return o*e*2/a.components*a.byteLength;case jf:return o*e*2/a.components*a.byteLength;case zm:return o*e*3/a.components*a.byteLength;case li:return o*e*4/a.components*a.byteLength;case qf:return o*e*4/a.components*a.byteLength;case Ml:case El:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Tl:case wl:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case hf:case mf:return Math.max(o,16)*Math.max(e,8)/4;case df:case pf:return Math.max(o,8)*Math.max(e,8)/2;case gf:case _f:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case vf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case xf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case yf:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Sf:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Mf:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Ef:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Tf:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case wf:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Af:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Rf:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case bf:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Pf:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Lf:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Df:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Al:case Nf:case Uf:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Xm:case If:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Ff:case Of:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function D0(o){switch(o){case Hi:case Fm:return{byteLength:1,components:1};case ko:case Om:case Bo:return{byteLength:2,components:1};case Gf:case Wf:return{byteLength:2,components:4};case Yr:case Vf:case ki:return{byteLength:4,components:1};case km:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ug(){let o=null,e=!1,n=null,r=null;function a(u,f){n(u,f),r=o.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=o.requestAnimationFrame(a),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){o=u}}}function N0(o){const e=new WeakMap;function n(d,p){const m=d.array,_=d.usage,v=m.byteLength,x=o.createBuffer();o.bindBuffer(p,x),o.bufferData(p,m,_),d.onUploadCallback();let S;if(m instanceof Float32Array)S=o.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=o.SHORT;else if(m instanceof Uint32Array)S=o.UNSIGNED_INT;else if(m instanceof Int32Array)S=o.INT;else if(m instanceof Int8Array)S=o.BYTE;else if(m instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,p,m){const _=p.array,v=p.updateRanges;if(o.bindBuffer(m,d),v.length===0)o.bufferSubData(m,0,_);else{v.sort((S,w)=>S.start-w.start);let x=0;for(let S=1;S<v.length;S++){const w=v[x],A=v[S];A.start<=w.start+w.count+1?w.count=Math.max(w.count,A.start+A.count-w.start):(++x,v[x]=A)}v.length=x+1;for(let S=0,w=v.length;S<w;S++){const A=v[S];o.bufferSubData(m,A.start*_.BYTES_PER_ELEMENT,_,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(o.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:u,update:f}}var U0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,I0=`#ifdef USE_ALPHAHASH
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
#endif`,F0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,O0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,k0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,B0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,z0=`#ifdef USE_AOMAP
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
#endif`,H0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,V0=`#ifdef USE_BATCHING
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
#endif`,G0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,W0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,X0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,j0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,q0=`#ifdef USE_IRIDESCENCE
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
#endif`,Y0=`#ifdef USE_BUMPMAP
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
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Q0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,J0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ex=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ix=`#define PI 3.141592653589793
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
} // validated`,rx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sx=`vec3 transformedNormal = objectNormal;
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
#endif`,ox=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ax=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ux=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cx="gl_FragColor = linearToOutputTexel( gl_FragColor );",fx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dx=`#ifdef USE_ENVMAP
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
#endif`,hx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,px=`#ifdef USE_ENVMAP
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
#endif`,mx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gx=`#ifdef USE_ENVMAP
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
#endif`,_x=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sx=`#ifdef USE_GRADIENTMAP
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
}`,Mx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ex=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wx=`uniform bool receiveShadow;
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
#endif`,Ax=`#ifdef USE_ENVMAP
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
#endif`,Rx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Px=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lx=`PhysicalMaterial material;
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
#endif`,Dx=`struct PhysicalMaterial {
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
}`,Nx=`
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
#endif`,Ux=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ix=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ox=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gx=`#if defined( USE_POINTS_UV )
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
#endif`,Wx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$x=`#ifdef USE_MORPHTARGETS
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
#endif`,Kx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ey=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ty=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ny=`#ifdef USE_NORMALMAP
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
#endif`,iy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ry=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ay=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ly=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,py=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,my=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_y=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vy=`float getShadowMask() {
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
}`,xy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yy=`#ifdef USE_SKINNING
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
#endif`,Sy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,My=`#ifdef USE_SKINNING
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
#endif`,Ey=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ty=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ay=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ry=`#ifdef USE_TRANSMISSION
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
#endif`,Cy=`#ifdef USE_TRANSMISSION
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
#endif`,by=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Py=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ly=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ny=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Uy=`uniform sampler2D t2D;
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
}`,Iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Oy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ky=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,By=`#include <common>
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
}`,zy=`#if DEPTH_PACKING == 3200
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
}`,Hy=`#define DISTANCE
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
}`,Vy=`#define DISTANCE
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
}`,Gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xy=`uniform float scale;
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
}`,jy=`uniform vec3 diffuse;
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
}`,qy=`#include <common>
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
}`,Yy=`uniform vec3 diffuse;
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
}`,$y=`#define LAMBERT
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
}`,Ky=`#define LAMBERT
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
}`,Zy=`#define MATCAP
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
}`,Qy=`#define MATCAP
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
}`,Jy=`#define NORMAL
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
}`,eS=`#define NORMAL
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
}`,tS=`#define PHONG
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
}`,nS=`#define PHONG
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
}`,iS=`#define STANDARD
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
}`,rS=`#define STANDARD
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
}`,sS=`#define TOON
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
}`,oS=`#define TOON
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
}`,aS=`uniform float size;
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
}`,lS=`uniform vec3 diffuse;
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
}`,uS=`#include <common>
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
}`,cS=`uniform vec3 color;
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
}`,fS=`uniform float rotation;
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
}`,dS=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:U0,alphahash_pars_fragment:I0,alphamap_fragment:F0,alphamap_pars_fragment:O0,alphatest_fragment:k0,alphatest_pars_fragment:B0,aomap_fragment:z0,aomap_pars_fragment:H0,batching_pars_vertex:V0,batching_vertex:G0,begin_vertex:W0,beginnormal_vertex:X0,bsdfs:j0,iridescence_fragment:q0,bumpmap_pars_fragment:Y0,clipping_planes_fragment:$0,clipping_planes_pars_fragment:K0,clipping_planes_pars_vertex:Z0,clipping_planes_vertex:Q0,color_fragment:J0,color_pars_fragment:ex,color_pars_vertex:tx,color_vertex:nx,common:ix,cube_uv_reflection_fragment:rx,defaultnormal_vertex:sx,displacementmap_pars_vertex:ox,displacementmap_vertex:ax,emissivemap_fragment:lx,emissivemap_pars_fragment:ux,colorspace_fragment:cx,colorspace_pars_fragment:fx,envmap_fragment:dx,envmap_common_pars_fragment:hx,envmap_pars_fragment:px,envmap_pars_vertex:mx,envmap_physical_pars_fragment:Ax,envmap_vertex:gx,fog_vertex:_x,fog_pars_vertex:vx,fog_fragment:xx,fog_pars_fragment:yx,gradientmap_pars_fragment:Sx,lightmap_pars_fragment:Mx,lights_lambert_fragment:Ex,lights_lambert_pars_fragment:Tx,lights_pars_begin:wx,lights_toon_fragment:Rx,lights_toon_pars_fragment:Cx,lights_phong_fragment:bx,lights_phong_pars_fragment:Px,lights_physical_fragment:Lx,lights_physical_pars_fragment:Dx,lights_fragment_begin:Nx,lights_fragment_maps:Ux,lights_fragment_end:Ix,logdepthbuf_fragment:Fx,logdepthbuf_pars_fragment:Ox,logdepthbuf_pars_vertex:kx,logdepthbuf_vertex:Bx,map_fragment:zx,map_pars_fragment:Hx,map_particle_fragment:Vx,map_particle_pars_fragment:Gx,metalnessmap_fragment:Wx,metalnessmap_pars_fragment:Xx,morphinstance_vertex:jx,morphcolor_vertex:qx,morphnormal_vertex:Yx,morphtarget_pars_vertex:$x,morphtarget_vertex:Kx,normal_fragment_begin:Zx,normal_fragment_maps:Qx,normal_pars_fragment:Jx,normal_pars_vertex:ey,normal_vertex:ty,normalmap_pars_fragment:ny,clearcoat_normal_fragment_begin:iy,clearcoat_normal_fragment_maps:ry,clearcoat_pars_fragment:sy,iridescence_pars_fragment:oy,opaque_fragment:ay,packing:ly,premultiplied_alpha_fragment:uy,project_vertex:cy,dithering_fragment:fy,dithering_pars_fragment:dy,roughnessmap_fragment:hy,roughnessmap_pars_fragment:py,shadowmap_pars_fragment:my,shadowmap_pars_vertex:gy,shadowmap_vertex:_y,shadowmask_pars_fragment:vy,skinbase_vertex:xy,skinning_pars_vertex:yy,skinning_vertex:Sy,skinnormal_vertex:My,specularmap_fragment:Ey,specularmap_pars_fragment:Ty,tonemapping_fragment:wy,tonemapping_pars_fragment:Ay,transmission_fragment:Ry,transmission_pars_fragment:Cy,uv_pars_fragment:by,uv_pars_vertex:Py,uv_vertex:Ly,worldpos_vertex:Dy,background_vert:Ny,background_frag:Uy,backgroundCube_vert:Iy,backgroundCube_frag:Fy,cube_vert:Oy,cube_frag:ky,depth_vert:By,depth_frag:zy,distanceRGBA_vert:Hy,distanceRGBA_frag:Vy,equirect_vert:Gy,equirect_frag:Wy,linedashed_vert:Xy,linedashed_frag:jy,meshbasic_vert:qy,meshbasic_frag:Yy,meshlambert_vert:$y,meshlambert_frag:Ky,meshmatcap_vert:Zy,meshmatcap_frag:Qy,meshnormal_vert:Jy,meshnormal_frag:eS,meshphong_vert:tS,meshphong_frag:nS,meshphysical_vert:iS,meshphysical_frag:rS,meshtoon_vert:sS,meshtoon_frag:oS,points_vert:aS,points_frag:lS,shadow_vert:uS,shadow_frag:cS,sprite_vert:fS,sprite_frag:dS},be={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},gi={basic:{uniforms:En([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:En([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new xt(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:En([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:En([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:En([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new xt(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:En([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:En([be.points,be.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:En([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:En([be.common,be.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:En([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:En([be.sprite,be.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:En([be.common,be.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:En([be.lights,be.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};gi.physical={uniforms:En([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const vl={r:0,b:0,g:0},zr=new xi,hS=new Bt;function pS(o,e,n,r,a,u,f){const d=new xt(0);let p=u===!0?0:1,m,_,v=null,x=0,S=null;function w(P){let C=P.isScene===!0?P.background:null;return C&&C.isTexture&&(C=(P.backgroundBlurriness>0?n:e).get(C)),C}function A(P){let C=!1;const V=w(P);V===null?g(d,p):V&&V.isColor&&(g(V,1),C=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?r.buffers.color.setClear(0,0,0,1,f):I==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(o.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(P,C){const V=w(C);V&&(V.isCubeTexture||V.mapping===Nl)?(_===void 0&&(_=new Vn(new Ys(1,1,1),new Sr({name:"BackgroundCubeMaterial",uniforms:Xs(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(I,U,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),zr.copy(C.backgroundRotation),zr.x*=-1,zr.y*=-1,zr.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),_.material.uniforms.envMap.value=V,_.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(hS.makeRotationFromEuler(zr)),_.material.toneMapped=Tt.getTransfer(V.colorSpace)!==Rt,(v!==V||x!==V.version||S!==o.toneMapping)&&(_.material.needsUpdate=!0,v=V,x=V.version,S=o.toneMapping),_.layers.enableAll(),P.unshift(_,_.geometry,_.material,0,0,null)):V&&V.isTexture&&(m===void 0&&(m=new Vn(new Il(2,2),new Sr({name:"BackgroundMaterial",uniforms:Xs(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:yr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=V,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.toneMapped=Tt.getTransfer(V.colorSpace)!==Rt,V.matrixAutoUpdate===!0&&V.updateMatrix(),m.material.uniforms.uvTransform.value.copy(V.matrix),(v!==V||x!==V.version||S!==o.toneMapping)&&(m.material.needsUpdate=!0,v=V,x=V.version,S=o.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null))}function g(P,C){P.getRGB(vl,ig(o)),r.buffers.color.setClear(vl.r,vl.g,vl.b,C,f)}function D(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,C=1){d.set(P),p=C,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(P){p=P,g(d,p)},render:A,addToRenderList:y,dispose:D}}function mS(o,e){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},a=x(null);let u=a,f=!1;function d(T,k,J,Q,ce){let Y=!1;const ne=v(Q,J,k);u!==ne&&(u=ne,m(u.object)),Y=S(T,Q,J,ce),Y&&w(T,Q,J,ce),ce!==null&&e.update(ce,o.ELEMENT_ARRAY_BUFFER),(Y||f)&&(f=!1,C(T,k,J,Q),ce!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function p(){return o.createVertexArray()}function m(T){return o.bindVertexArray(T)}function _(T){return o.deleteVertexArray(T)}function v(T,k,J){const Q=J.wireframe===!0;let ce=r[T.id];ce===void 0&&(ce={},r[T.id]=ce);let Y=ce[k.id];Y===void 0&&(Y={},ce[k.id]=Y);let ne=Y[Q];return ne===void 0&&(ne=x(p()),Y[Q]=ne),ne}function x(T){const k=[],J=[],Q=[];for(let ce=0;ce<n;ce++)k[ce]=0,J[ce]=0,Q[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:J,attributeDivisors:Q,object:T,attributes:{},index:null}}function S(T,k,J,Q){const ce=u.attributes,Y=k.attributes;let ne=0;const ae=J.getAttributes();for(const O in ae)if(ae[O].location>=0){const oe=ce[O];let F=Y[O];if(F===void 0&&(O==="instanceMatrix"&&T.instanceMatrix&&(F=T.instanceMatrix),O==="instanceColor"&&T.instanceColor&&(F=T.instanceColor)),oe===void 0||oe.attribute!==F||F&&oe.data!==F.data)return!0;ne++}return u.attributesNum!==ne||u.index!==Q}function w(T,k,J,Q){const ce={},Y=k.attributes;let ne=0;const ae=J.getAttributes();for(const O in ae)if(ae[O].location>=0){let oe=Y[O];oe===void 0&&(O==="instanceMatrix"&&T.instanceMatrix&&(oe=T.instanceMatrix),O==="instanceColor"&&T.instanceColor&&(oe=T.instanceColor));const F={};F.attribute=oe,oe&&oe.data&&(F.data=oe.data),ce[O]=F,ne++}u.attributes=ce,u.attributesNum=ne,u.index=Q}function A(){const T=u.newAttributes;for(let k=0,J=T.length;k<J;k++)T[k]=0}function y(T){g(T,0)}function g(T,k){const J=u.newAttributes,Q=u.enabledAttributes,ce=u.attributeDivisors;J[T]=1,Q[T]===0&&(o.enableVertexAttribArray(T),Q[T]=1),ce[T]!==k&&(o.vertexAttribDivisor(T,k),ce[T]=k)}function D(){const T=u.newAttributes,k=u.enabledAttributes;for(let J=0,Q=k.length;J<Q;J++)k[J]!==T[J]&&(o.disableVertexAttribArray(J),k[J]=0)}function P(T,k,J,Q,ce,Y,ne){ne===!0?o.vertexAttribIPointer(T,k,J,ce,Y):o.vertexAttribPointer(T,k,J,Q,ce,Y)}function C(T,k,J,Q){A();const ce=Q.attributes,Y=J.getAttributes(),ne=k.defaultAttributeValues;for(const ae in Y){const O=Y[ae];if(O.location>=0){let ue=ce[ae];if(ue===void 0&&(ae==="instanceMatrix"&&T.instanceMatrix&&(ue=T.instanceMatrix),ae==="instanceColor"&&T.instanceColor&&(ue=T.instanceColor)),ue!==void 0){const oe=ue.normalized,F=ue.itemSize,se=e.get(ue);if(se===void 0)continue;const De=se.buffer,te=se.type,fe=se.bytesPerElement,Se=te===o.INT||te===o.UNSIGNED_INT||ue.gpuType===Vf;if(ue.isInterleavedBufferAttribute){const _e=ue.data,we=_e.stride,qe=ue.offset;if(_e.isInstancedInterleavedBuffer){for(let Ge=0;Ge<O.locationSize;Ge++)g(O.location+Ge,_e.meshPerAttribute);T.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Ge=0;Ge<O.locationSize;Ge++)y(O.location+Ge);o.bindBuffer(o.ARRAY_BUFFER,De);for(let Ge=0;Ge<O.locationSize;Ge++)P(O.location+Ge,F/O.locationSize,te,oe,we*fe,(qe+F/O.locationSize*Ge)*fe,Se)}else{if(ue.isInstancedBufferAttribute){for(let _e=0;_e<O.locationSize;_e++)g(O.location+_e,ue.meshPerAttribute);T.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let _e=0;_e<O.locationSize;_e++)y(O.location+_e);o.bindBuffer(o.ARRAY_BUFFER,De);for(let _e=0;_e<O.locationSize;_e++)P(O.location+_e,F/O.locationSize,te,oe,F*fe,F/O.locationSize*_e*fe,Se)}}else if(ne!==void 0){const oe=ne[ae];if(oe!==void 0)switch(oe.length){case 2:o.vertexAttrib2fv(O.location,oe);break;case 3:o.vertexAttrib3fv(O.location,oe);break;case 4:o.vertexAttrib4fv(O.location,oe);break;default:o.vertexAttrib1fv(O.location,oe)}}}}D()}function V(){z();for(const T in r){const k=r[T];for(const J in k){const Q=k[J];for(const ce in Q)_(Q[ce].object),delete Q[ce];delete k[J]}delete r[T]}}function I(T){if(r[T.id]===void 0)return;const k=r[T.id];for(const J in k){const Q=k[J];for(const ce in Q)_(Q[ce].object),delete Q[ce];delete k[J]}delete r[T.id]}function U(T){for(const k in r){const J=r[k];if(J[T.id]===void 0)continue;const Q=J[T.id];for(const ce in Q)_(Q[ce].object),delete Q[ce];delete J[T.id]}}function z(){b(),f=!0,u!==a&&(u=a,m(u.object))}function b(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:z,resetDefaultState:b,dispose:V,releaseStatesOfGeometry:I,releaseStatesOfProgram:U,initAttributes:A,enableAttribute:y,disableUnusedAttributes:D}}function gS(o,e,n){let r;function a(m){r=m}function u(m,_){o.drawArrays(r,m,_),n.update(_,r,1)}function f(m,_,v){v!==0&&(o.drawArraysInstanced(r,m,_,v),n.update(_,r,v))}function d(m,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,v);let S=0;for(let w=0;w<v;w++)S+=_[w];n.update(S,r,1)}function p(m,_,v,x){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let w=0;w<m.length;w++)f(m[w],_[w],x[w]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,_,0,x,0,v);let w=0;for(let A=0;A<v;A++)w+=_[A]*x[A];n.update(w,r,1)}}this.setMode=a,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function _S(o,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");a=o.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(U){return!(U!==li&&r.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(U){const z=U===Bo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Hi&&r.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==ki&&!z)}function p(U){if(U==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const v=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),V=w>0,I=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:w,maxTextureSize:A,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:D,maxVaryings:P,maxFragmentUniforms:C,vertexTextures:V,maxSamples:I}}function vS(o){const e=this;let n=null,r=0,a=!1,u=!1;const f=new Vr,d=new ot,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const S=v.length!==0||x||r!==0||a;return a=x,r=v.length,S},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){n=_(v,x,0)},this.setState=function(v,x,S){const w=v.clippingPlanes,A=v.clipIntersection,y=v.clipShadows,g=o.get(v);if(!a||w===null||w.length===0||u&&!y)u?_(null):m();else{const D=u?0:r,P=D*4;let C=g.clippingState||null;p.value=C,C=_(w,x,P,S);for(let V=0;V!==P;++V)C[V]=n[V];g.clippingState=C,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=D}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,x,S,w){const A=v!==null?v.length:0;let y=null;if(A!==0){if(y=p.value,w!==!0||y===null){const g=S+A*4,D=x.matrixWorldInverse;d.getNormalMatrix(D),(y===null||y.length<g)&&(y=new Float32Array(g));for(let P=0,C=S;P!==A;++P,C+=4)f.copy(v[P]).applyMatrix4(D,d),f.normal.toArray(y,C),y[C+3]=f.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}function xS(o){let e=new WeakMap;function n(f,d){return d===lf?f.mapping=zs:d===uf&&(f.mapping=Hs),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===lf||d===uf)if(e.has(f)){const p=e.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new v0(p.height);return m.fromEquirectangularTexture(o,f),e.set(f,m),f.addEventListener("dispose",a),n(m.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const Is=4,am=[.125,.215,.35,.446,.526,.582],Xr=20,jc=new b0,lm=new xt;let qc=null,Yc=0,$c=0,Kc=!1;const Gr=(1+Math.sqrt(5))/2,Ns=1/Gr,um=[new q(-Gr,Ns,0),new q(Gr,Ns,0),new q(-Ns,0,Gr),new q(Ns,0,Gr),new q(0,Gr,-Ns),new q(0,Gr,Ns),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class cm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){qc=this._renderer.getRenderTarget(),Yc=this._renderer.getActiveCubeFace(),$c=this._renderer.getActiveMipmapLevel(),Kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,a,u),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qc,Yc,$c),this._renderer.xr.enabled=Kc,e.scissorTest=!1,xl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===zs||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qc=this._renderer.getRenderTarget(),Yc=this._renderer.getActiveCubeFace(),$c=this._renderer.getActiveMipmapLevel(),Kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:_i,minFilter:_i,generateMipmaps:!1,type:Bo,format:li,colorSpace:Ws,depthBuffer:!1},a=fm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fm(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yS(u)),this._blurMaterial=SS(u,e,n)}return a}_compileMaterial(e){const n=new Vn(this._lodPlanes[0],e);this._renderer.compile(n,jc)}_sceneToCubeUV(e,n,r,a){const d=new Hn(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(lm),_.toneMapping=xr,_.autoClear=!1;const S=new eg({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1}),w=new Vn(new Ys,S);let A=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,A=!0):(S.color.copy(lm),A=!0);for(let g=0;g<6;g++){const D=g%3;D===0?(d.up.set(0,p[g],0),d.lookAt(m[g],0,0)):D===1?(d.up.set(0,0,p[g]),d.lookAt(0,m[g],0)):(d.up.set(0,p[g],0),d.lookAt(0,0,m[g]));const P=this._cubeSize;xl(a,D*P,g>2?P:0,P,P),_.setRenderTarget(a),A&&_.render(w,d),_.render(e,d)}w.geometry.dispose(),w.material.dispose(),_.toneMapping=x,_.autoClear=v,e.background=y}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===zs||e.mapping===Hs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=hm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dm());const u=a?this._cubemapMaterial:this._equirectMaterial,f=new Vn(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;xl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,jc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=um[(a-u-1)%um.length];this._blur(e,u-1,u,f,d)}n.autoClear=r}_blur(e,n,r,a,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,a,"latitudinal",u),this._halfBlur(f,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new Vn(this._lodPlanes[a],m),x=m.uniforms,S=this._sizeLods[r]-1,w=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Xr-1),A=u/w,y=isFinite(u)?1+Math.floor(_*A):Xr;y>Xr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Xr}`);const g=[];let D=0;for(let U=0;U<Xr;++U){const z=U/A,b=Math.exp(-z*z/2);g.push(b),U===0?D+=b:U<y&&(D+=2*b)}for(let U=0;U<g.length;U++)g[U]=g[U]/D;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=g,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:P}=this;x.dTheta.value=w,x.mipInt.value=P-r;const C=this._sizeLods[a],V=3*C*(a>P-Is?a-P+Is:0),I=4*(this._cubeSize-C);xl(n,V,I,3*C,2*C),p.setRenderTarget(n),p.render(v,jc)}}function yS(o){const e=[],n=[],r=[];let a=o;const u=o-Is+1+am.length;for(let f=0;f<u;f++){const d=Math.pow(2,a);n.push(d);let p=1/d;f>o-Is?p=am[f-o+Is-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),_=-m,v=1+m,x=[_,_,v,_,v,v,_,_,v,v,_,v],S=6,w=6,A=3,y=2,g=1,D=new Float32Array(A*w*S),P=new Float32Array(y*w*S),C=new Float32Array(g*w*S);for(let I=0;I<S;I++){const U=I%3*2/3-1,z=I>2?0:-1,b=[U,z,0,U+2/3,z,0,U+2/3,z+1,0,U,z,0,U+2/3,z+1,0,U,z+1,0];D.set(b,A*w*I),P.set(x,y*w*I);const T=[I,I,I,I,I,I];C.set(T,g*w*I)}const V=new Zn;V.setAttribute("position",new vi(D,A)),V.setAttribute("uv",new vi(P,y)),V.setAttribute("faceIndex",new vi(C,g)),e.push(V),a>Is&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function fm(o,e,n){const r=new $r(o,e,n);return r.texture.mapping=Nl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function xl(o,e,n,r,a){o.viewport.set(e,n,r,a),o.scissor.set(e,n,r,a)}function SS(o,e,n){const r=new Float32Array(Xr),a=new q(0,1,0);return new Sr({name:"SphericalGaussianBlur",defines:{n:Xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:ed(),fragmentShader:`

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
		`,blending:vr,depthTest:!1,depthWrite:!1})}function dm(){return new Sr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ed(),fragmentShader:`

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
		`,blending:vr,depthTest:!1,depthWrite:!1})}function hm(){return new Sr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ed(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function ed(){return`

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
	`}function MS(o){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===lf||p===uf,_=p===zs||p===Hs;if(m||_){let v=e.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new cm(o)),v=m?n.fromEquirectangular(d,v):n.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const S=d.image;return m&&S&&S.height>0||_&&S&&a(S)?(n===null&&(n=new cm(o)),v=m?n.fromEquirectangular(d):n.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function a(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function ES(o){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=o.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Us("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function TS(o,e,n,r){const a={},u=new WeakMap;function f(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const w in x.attributes)e.remove(x.attributes[w]);x.removeEventListener("dispose",f),delete a[x.id];const S=u.get(x);S&&(e.remove(S),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(v,x){return a[x.id]===!0||(x.addEventListener("dispose",f),a[x.id]=!0,n.memory.geometries++),x}function p(v){const x=v.attributes;for(const S in x)e.update(x[S],o.ARRAY_BUFFER)}function m(v){const x=[],S=v.index,w=v.attributes.position;let A=0;if(S!==null){const D=S.array;A=S.version;for(let P=0,C=D.length;P<C;P+=3){const V=D[P+0],I=D[P+1],U=D[P+2];x.push(V,I,I,U,U,V)}}else if(w!==void 0){const D=w.array;A=w.version;for(let P=0,C=D.length/3-1;P<C;P+=3){const V=P+0,I=P+1,U=P+2;x.push(V,I,I,U,U,V)}}else return;const y=new(Ym(x)?ng:tg)(x,1);y.version=A;const g=u.get(v);g&&e.remove(g),u.set(v,y)}function _(v){const x=u.get(v);if(x){const S=v.index;S!==null&&x.version<S.version&&m(v)}else m(v);return u.get(v)}return{get:d,update:p,getWireframeAttribute:_}}function wS(o,e,n){let r;function a(x){r=x}let u,f;function d(x){u=x.type,f=x.bytesPerElement}function p(x,S){o.drawElements(r,S,u,x*f),n.update(S,r,1)}function m(x,S,w){w!==0&&(o.drawElementsInstanced(r,S,u,x*f,w),n.update(S,r,w))}function _(x,S,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,x,0,w);let y=0;for(let g=0;g<w;g++)y+=S[g];n.update(y,r,1)}function v(x,S,w,A){if(w===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<x.length;g++)m(x[g]/f,S[g],A[g]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,u,x,0,A,0,w);let g=0;for(let D=0;D<w;D++)g+=S[D]*A[D];n.update(g,r,1)}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function AS(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(n.calls++,f){case o.TRIANGLES:n.triangles+=d*(u/3);break;case o.LINES:n.lines+=d*(u/2);break;case o.LINE_STRIP:n.lines+=d*(u-1);break;case o.LINE_LOOP:n.lines+=d*u;break;case o.POINTS:n.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function RS(o,e,n){const r=new WeakMap,a=new Ct;function u(f,d,p){const m=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let T=function(){z.dispose(),r.delete(d),d.removeEventListener("dispose",T)};var S=T;x!==void 0&&x.texture.dispose();const w=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let C=0;w===!0&&(C=1),A===!0&&(C=2),y===!0&&(C=3);let V=d.attributes.position.count*C,I=1;V>e.maxTextureSize&&(I=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const U=new Float32Array(V*I*4*v),z=new Km(U,V,I,v);z.type=ki,z.needsUpdate=!0;const b=C*4;for(let k=0;k<v;k++){const J=g[k],Q=D[k],ce=P[k],Y=V*I*4*k;for(let ne=0;ne<J.count;ne++){const ae=ne*b;w===!0&&(a.fromBufferAttribute(J,ne),U[Y+ae+0]=a.x,U[Y+ae+1]=a.y,U[Y+ae+2]=a.z,U[Y+ae+3]=0),A===!0&&(a.fromBufferAttribute(Q,ne),U[Y+ae+4]=a.x,U[Y+ae+5]=a.y,U[Y+ae+6]=a.z,U[Y+ae+7]=0),y===!0&&(a.fromBufferAttribute(ce,ne),U[Y+ae+8]=a.x,U[Y+ae+9]=a.y,U[Y+ae+10]=a.z,U[Y+ae+11]=ce.itemSize===4?a.w:1)}}x={count:v,texture:z,size:new _t(V,I)},r.set(d,x),d.addEventListener("dispose",T)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",f.morphTexture,n);else{let w=0;for(let y=0;y<m.length;y++)w+=m[y];const A=d.morphTargetsRelative?1:1-w;p.getUniforms().setValue(o,"morphTargetBaseInfluence",A),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function CS(o,e,n,r){let a=new WeakMap;function u(p){const m=r.render.frame,_=p.geometry,v=e.get(p,_);if(a.get(v)!==m&&(e.update(v),a.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(n.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,o.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return v}function f(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:f}}const cg=new Un,pm=new ag(1,1),fg=new Km,dg=new t0,hg=new sg,mm=[],gm=[],_m=new Float32Array(16),vm=new Float32Array(9),xm=new Float32Array(4);function $s(o,e,n){const r=o[0];if(r<=0||r>0)return o;const a=e*n;let u=mm[a];if(u===void 0&&(u=new Float32Array(a),mm[a]=u),e!==0){r.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=n,o[f].toArray(u,d)}return u}function Zt(o,e){if(o.length!==e.length)return!1;for(let n=0,r=o.length;n<r;n++)if(o[n]!==e[n])return!1;return!0}function Qt(o,e){for(let n=0,r=e.length;n<r;n++)o[n]=e[n]}function Fl(o,e){let n=gm[e];n===void 0&&(n=new Int32Array(e),gm[e]=n);for(let r=0;r!==e;++r)n[r]=o.allocateTextureUnit();return n}function bS(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function PS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;o.uniform2fv(this.addr,e),Qt(n,e)}}function LS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Zt(n,e))return;o.uniform3fv(this.addr,e),Qt(n,e)}}function DS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;o.uniform4fv(this.addr,e),Qt(n,e)}}function NS(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;xm.set(r),o.uniformMatrix2fv(this.addr,!1,xm),Qt(n,r)}}function US(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;vm.set(r),o.uniformMatrix3fv(this.addr,!1,vm),Qt(n,r)}}function IS(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;_m.set(r),o.uniformMatrix4fv(this.addr,!1,_m),Qt(n,r)}}function FS(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function OS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;o.uniform2iv(this.addr,e),Qt(n,e)}}function kS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;o.uniform3iv(this.addr,e),Qt(n,e)}}function BS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;o.uniform4iv(this.addr,e),Qt(n,e)}}function zS(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function HS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;o.uniform2uiv(this.addr,e),Qt(n,e)}}function VS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;o.uniform3uiv(this.addr,e),Qt(n,e)}}function GS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;o.uniform4uiv(this.addr,e),Qt(n,e)}}function WS(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a);let u;this.type===o.SAMPLER_2D_SHADOW?(pm.compareFunction=qm,u=pm):u=cg,n.setTexture2D(e||u,a)}function XS(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||dg,a)}function jS(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||hg,a)}function qS(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||fg,a)}function YS(o){switch(o){case 5126:return bS;case 35664:return PS;case 35665:return LS;case 35666:return DS;case 35674:return NS;case 35675:return US;case 35676:return IS;case 5124:case 35670:return FS;case 35667:case 35671:return OS;case 35668:case 35672:return kS;case 35669:case 35673:return BS;case 5125:return zS;case 36294:return HS;case 36295:return VS;case 36296:return GS;case 35678:case 36198:case 36298:case 36306:case 35682:return WS;case 35679:case 36299:case 36307:return XS;case 35680:case 36300:case 36308:case 36293:return jS;case 36289:case 36303:case 36311:case 36292:return qS}}function $S(o,e){o.uniform1fv(this.addr,e)}function KS(o,e){const n=$s(e,this.size,2);o.uniform2fv(this.addr,n)}function ZS(o,e){const n=$s(e,this.size,3);o.uniform3fv(this.addr,n)}function QS(o,e){const n=$s(e,this.size,4);o.uniform4fv(this.addr,n)}function JS(o,e){const n=$s(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function eM(o,e){const n=$s(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function tM(o,e){const n=$s(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function nM(o,e){o.uniform1iv(this.addr,e)}function iM(o,e){o.uniform2iv(this.addr,e)}function rM(o,e){o.uniform3iv(this.addr,e)}function sM(o,e){o.uniform4iv(this.addr,e)}function oM(o,e){o.uniform1uiv(this.addr,e)}function aM(o,e){o.uniform2uiv(this.addr,e)}function lM(o,e){o.uniform3uiv(this.addr,e)}function uM(o,e){o.uniform4uiv(this.addr,e)}function cM(o,e,n){const r=this.cache,a=e.length,u=Fl(n,a);Zt(r,u)||(o.uniform1iv(this.addr,u),Qt(r,u));for(let f=0;f!==a;++f)n.setTexture2D(e[f]||cg,u[f])}function fM(o,e,n){const r=this.cache,a=e.length,u=Fl(n,a);Zt(r,u)||(o.uniform1iv(this.addr,u),Qt(r,u));for(let f=0;f!==a;++f)n.setTexture3D(e[f]||dg,u[f])}function dM(o,e,n){const r=this.cache,a=e.length,u=Fl(n,a);Zt(r,u)||(o.uniform1iv(this.addr,u),Qt(r,u));for(let f=0;f!==a;++f)n.setTextureCube(e[f]||hg,u[f])}function hM(o,e,n){const r=this.cache,a=e.length,u=Fl(n,a);Zt(r,u)||(o.uniform1iv(this.addr,u),Qt(r,u));for(let f=0;f!==a;++f)n.setTexture2DArray(e[f]||fg,u[f])}function pM(o){switch(o){case 5126:return $S;case 35664:return KS;case 35665:return ZS;case 35666:return QS;case 35674:return JS;case 35675:return eM;case 35676:return tM;case 5124:case 35670:return nM;case 35667:case 35671:return iM;case 35668:case 35672:return rM;case 35669:case 35673:return sM;case 5125:return oM;case 36294:return aM;case 36295:return lM;case 36296:return uM;case 35678:case 36198:case 36298:case 36306:case 35682:return cM;case 35679:case 36299:case 36307:return fM;case 35680:case 36300:case 36308:case 36293:return dM;case 36289:case 36303:case 36311:case 36292:return hM}}class mM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=YS(n.type)}}class gM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=pM(n.type)}}class _M{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,f=a.length;u!==f;++u){const d=a[u];d.setValue(e,n[d.id],r)}}}const Zc=/(\w+)(\])?(\[|\.)?/g;function ym(o,e){o.seq.push(e),o.map[e.id]=e}function vM(o,e,n){const r=o.name,a=r.length;for(Zc.lastIndex=0;;){const u=Zc.exec(r),f=Zc.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===a){ym(n,m===void 0?new mM(d,o,e):new gM(d,o,e));break}else{let v=n.map[d];v===void 0&&(v=new _M(d),ym(n,v)),n=v}}}class Rl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),f=e.getUniformLocation(n,u.name);vM(u,f,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,f=n.length;u!==f;++u){const d=n[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const f=e[a];f.id in n&&r.push(f)}return r}}function Sm(o,e,n){const r=o.createShader(e);return o.shaderSource(r,n),o.compileShader(r),r}const xM=37297;let yM=0;function SM(o,e){const n=o.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let f=a;f<u;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}const Mm=new ot;function MM(o){Tt._getMatrix(Mm,Tt.workingColorSpace,o);const e=`mat3( ${Mm.elements.map(n=>n.toFixed(4))} )`;switch(Tt.getTransfer(o)){case Cl:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Em(o,e,n){const r=o.getShaderParameter(e,o.COMPILE_STATUS),a=o.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+SM(o.getShaderSource(e),f)}else return a}function EM(o,e){const n=MM(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function TM(o,e){let n;switch(e){case Rv:n="Linear";break;case Cv:n="Reinhard";break;case bv:n="Cineon";break;case Pv:n="ACESFilmic";break;case Dv:n="AgX";break;case Nv:n="Neutral";break;case Lv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const yl=new q;function wM(){Tt.getLuminanceCoefficients(yl);const o=yl.x.toFixed(4),e=yl.y.toFixed(4),n=yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function AM(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function RM(o){const e=[];for(const n in o){const r=o[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function CM(o,e){const n={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=o.getActiveAttrib(e,a),f=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),n[f]={type:u.type,location:o.getAttribLocation(e,f),locationSize:d}}return n}function Oo(o){return o!==""}function Tm(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wm(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bf(o){return o.replace(bM,LM)}const PM=new Map;function LM(o,e){let n=at[e];if(n===void 0){const r=PM.get(e);if(r!==void 0)n=at[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Bf(n)}const DM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Am(o){return o.replace(DM,NM)}function NM(o,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function Rm(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function UM(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Nm?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===ov?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function IM(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case zs:case Hs:e="ENVMAP_TYPE_CUBE";break;case Nl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function FM(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function OM(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Um:e="ENVMAP_BLENDING_MULTIPLY";break;case wv:e="ENVMAP_BLENDING_MIX";break;case Av:e="ENVMAP_BLENDING_ADD";break}return e}function kM(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function BM(o,e,n,r){const a=o.getContext(),u=n.defines;let f=n.vertexShader,d=n.fragmentShader;const p=UM(n),m=IM(n),_=FM(n),v=OM(n),x=kM(n),S=AM(n),w=RM(u),A=a.createProgram();let y,g,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Oo).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Oo).join(`
`),g.length>0&&(g+=`
`)):(y=[Rm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),g=[Rm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==xr?"#define TONE_MAPPING":"",n.toneMapping!==xr?at.tonemapping_pars_fragment:"",n.toneMapping!==xr?TM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,EM("linearToOutputTexel",n.outputColorSpace),wM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Oo).join(`
`)),f=Bf(f),f=Tm(f,n),f=wm(f,n),d=Bf(d),d=Tm(d,n),d=wm(d,n),f=Am(f),d=Am(d),n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",n.glslVersion===Op?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Op?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const P=D+y+f,C=D+g+d,V=Sm(a,a.VERTEX_SHADER,P),I=Sm(a,a.FRAGMENT_SHADER,C);a.attachShader(A,V),a.attachShader(A,I),n.index0AttributeName!==void 0?a.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(A,0,"position"),a.linkProgram(A);function U(k){if(o.debug.checkShaderErrors){const J=a.getProgramInfoLog(A).trim(),Q=a.getShaderInfoLog(V).trim(),ce=a.getShaderInfoLog(I).trim();let Y=!0,ne=!0;if(a.getProgramParameter(A,a.LINK_STATUS)===!1)if(Y=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(a,A,V,I);else{const ae=Em(a,V,"vertex"),O=Em(a,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(A,a.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+J+`
`+ae+`
`+O)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(Q===""||ce==="")&&(ne=!1);ne&&(k.diagnostics={runnable:Y,programLog:J,vertexShader:{log:Q,prefix:y},fragmentShader:{log:ce,prefix:g}})}a.deleteShader(V),a.deleteShader(I),z=new Rl(a,A),b=CM(a,A)}let z;this.getUniforms=function(){return z===void 0&&U(this),z};let b;this.getAttributes=function(){return b===void 0&&U(this),b};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=a.getProgramParameter(A,xM)),T},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=yM++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=V,this.fragmentShader=I,this}let zM=0;class HM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new VM(e),n.set(e,r)),r}}class VM{constructor(e){this.id=zM++,this.code=e,this.usedTimes=0}}function GM(o,e,n,r,a,u,f){const d=new Qm,p=new HM,m=new Set,_=[],v=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(b){return m.add(b),b===0?"uv":`uv${b}`}function y(b,T,k,J,Q){const ce=J.fog,Y=Q.geometry,ne=b.isMeshStandardMaterial?J.environment:null,ae=(b.isMeshStandardMaterial?n:e).get(b.envMap||ne),O=ae&&ae.mapping===Nl?ae.image.height:null,ue=w[b.type];b.precision!==null&&(S=a.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const oe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,F=oe!==void 0?oe.length:0;let se=0;Y.morphAttributes.position!==void 0&&(se=1),Y.morphAttributes.normal!==void 0&&(se=2),Y.morphAttributes.color!==void 0&&(se=3);let De,te,fe,Se;if(ue){const yt=gi[ue];De=yt.vertexShader,te=yt.fragmentShader}else De=b.vertexShader,te=b.fragmentShader,p.update(b),fe=p.getVertexShaderID(b),Se=p.getFragmentShaderID(b);const _e=o.getRenderTarget(),we=o.state.buffers.depth.getReversed(),qe=Q.isInstancedMesh===!0,Ge=Q.isBatchedMesh===!0,Pt=!!b.map,Lt=!!b.matcap,lt=!!ae,H=!!b.aoMap,vn=!!b.lightMap,ht=!!b.bumpMap,ct=!!b.normalMap,Ye=!!b.displacementMap,At=!!b.emissiveMap,We=!!b.metalnessMap,L=!!b.roughnessMap,E=b.anisotropy>0,ee=b.clearcoat>0,pe=b.dispersion>0,ve=b.iridescence>0,de=b.sheen>0,Xe=b.transmission>0,Ae=E&&!!b.anisotropyMap,Ie=ee&&!!b.clearcoatMap,ut=ee&&!!b.clearcoatNormalMap,Ee=ee&&!!b.clearcoatRoughnessMap,Oe=ve&&!!b.iridescenceMap,Ke=ve&&!!b.iridescenceThicknessMap,et=de&&!!b.sheenColorMap,ke=de&&!!b.sheenRoughnessMap,ft=!!b.specularMap,it=!!b.specularColorMap,wt=!!b.specularIntensityMap,W=Xe&&!!b.transmissionMap,Re=Xe&&!!b.thicknessMap,le=!!b.gradientMap,he=!!b.alphaMap,Le=b.alphaTest>0,Pe=!!b.alphaHash,rt=!!b.extensions;let Nt=xr;b.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Nt=o.toneMapping);const Yt={shaderID:ue,shaderType:b.type,shaderName:b.name,vertexShader:De,fragmentShader:te,defines:b.defines,customVertexShaderID:fe,customFragmentShaderID:Se,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:Ge,batchingColor:Ge&&Q._colorsTexture!==null,instancing:qe,instancingColor:qe&&Q.instanceColor!==null,instancingMorph:qe&&Q.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:_e===null?o.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Ws,alphaToCoverage:!!b.alphaToCoverage,map:Pt,matcap:Lt,envMap:lt,envMapMode:lt&&ae.mapping,envMapCubeUVHeight:O,aoMap:H,lightMap:vn,bumpMap:ht,normalMap:ct,displacementMap:x&&Ye,emissiveMap:At,normalMapObjectSpace:ct&&b.normalMapType===Ov,normalMapTangentSpace:ct&&b.normalMapType===jm,metalnessMap:We,roughnessMap:L,anisotropy:E,anisotropyMap:Ae,clearcoat:ee,clearcoatMap:Ie,clearcoatNormalMap:ut,clearcoatRoughnessMap:Ee,dispersion:pe,iridescence:ve,iridescenceMap:Oe,iridescenceThicknessMap:Ke,sheen:de,sheenColorMap:et,sheenRoughnessMap:ke,specularMap:ft,specularColorMap:it,specularIntensityMap:wt,transmission:Xe,transmissionMap:W,thicknessMap:Re,gradientMap:le,opaque:b.transparent===!1&&b.blending===Fs&&b.alphaToCoverage===!1,alphaMap:he,alphaTest:Le,alphaHash:Pe,combine:b.combine,mapUv:Pt&&A(b.map.channel),aoMapUv:H&&A(b.aoMap.channel),lightMapUv:vn&&A(b.lightMap.channel),bumpMapUv:ht&&A(b.bumpMap.channel),normalMapUv:ct&&A(b.normalMap.channel),displacementMapUv:Ye&&A(b.displacementMap.channel),emissiveMapUv:At&&A(b.emissiveMap.channel),metalnessMapUv:We&&A(b.metalnessMap.channel),roughnessMapUv:L&&A(b.roughnessMap.channel),anisotropyMapUv:Ae&&A(b.anisotropyMap.channel),clearcoatMapUv:Ie&&A(b.clearcoatMap.channel),clearcoatNormalMapUv:ut&&A(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&A(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&A(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&A(b.iridescenceThicknessMap.channel),sheenColorMapUv:et&&A(b.sheenColorMap.channel),sheenRoughnessMapUv:ke&&A(b.sheenRoughnessMap.channel),specularMapUv:ft&&A(b.specularMap.channel),specularColorMapUv:it&&A(b.specularColorMap.channel),specularIntensityMapUv:wt&&A(b.specularIntensityMap.channel),transmissionMapUv:W&&A(b.transmissionMap.channel),thicknessMapUv:Re&&A(b.thicknessMap.channel),alphaMapUv:he&&A(b.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(ct||E),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!Y.attributes.uv&&(Pt||he),fog:!!ce,useFog:b.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:we,skinning:Q.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:se,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:Nt,decodeVideoTexture:Pt&&b.map.isVideoTexture===!0&&Tt.getTransfer(b.map.colorSpace)===Rt,decodeVideoTextureEmissive:At&&b.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(b.emissiveMap.colorSpace)===Rt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Oi,flipSided:b.side===Nn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:rt&&b.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&b.extensions.multiDraw===!0||Ge)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Yt.vertexUv1s=m.has(1),Yt.vertexUv2s=m.has(2),Yt.vertexUv3s=m.has(3),m.clear(),Yt}function g(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const k in b.defines)T.push(k),T.push(b.defines[k]);return b.isRawShaderMaterial===!1&&(D(T,b),P(T,b),T.push(o.outputColorSpace)),T.push(b.customProgramCacheKey),T.join()}function D(b,T){b.push(T.precision),b.push(T.outputColorSpace),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.mapUv),b.push(T.alphaMapUv),b.push(T.lightMapUv),b.push(T.aoMapUv),b.push(T.bumpMapUv),b.push(T.normalMapUv),b.push(T.displacementMapUv),b.push(T.emissiveMapUv),b.push(T.metalnessMapUv),b.push(T.roughnessMapUv),b.push(T.anisotropyMapUv),b.push(T.clearcoatMapUv),b.push(T.clearcoatNormalMapUv),b.push(T.clearcoatRoughnessMapUv),b.push(T.iridescenceMapUv),b.push(T.iridescenceThicknessMapUv),b.push(T.sheenColorMapUv),b.push(T.sheenRoughnessMapUv),b.push(T.specularMapUv),b.push(T.specularColorMapUv),b.push(T.specularIntensityMapUv),b.push(T.transmissionMapUv),b.push(T.thicknessMapUv),b.push(T.combine),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.numLightProbes),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function P(b,T){d.disableAll(),T.supportsVertexTextures&&d.enable(0),T.instancing&&d.enable(1),T.instancingColor&&d.enable(2),T.instancingMorph&&d.enable(3),T.matcap&&d.enable(4),T.envMap&&d.enable(5),T.normalMapObjectSpace&&d.enable(6),T.normalMapTangentSpace&&d.enable(7),T.clearcoat&&d.enable(8),T.iridescence&&d.enable(9),T.alphaTest&&d.enable(10),T.vertexColors&&d.enable(11),T.vertexAlphas&&d.enable(12),T.vertexUv1s&&d.enable(13),T.vertexUv2s&&d.enable(14),T.vertexUv3s&&d.enable(15),T.vertexTangents&&d.enable(16),T.anisotropy&&d.enable(17),T.alphaHash&&d.enable(18),T.batching&&d.enable(19),T.dispersion&&d.enable(20),T.batchingColor&&d.enable(21),b.push(d.mask),d.disableAll(),T.fog&&d.enable(0),T.useFog&&d.enable(1),T.flatShading&&d.enable(2),T.logarithmicDepthBuffer&&d.enable(3),T.reverseDepthBuffer&&d.enable(4),T.skinning&&d.enable(5),T.morphTargets&&d.enable(6),T.morphNormals&&d.enable(7),T.morphColors&&d.enable(8),T.premultipliedAlpha&&d.enable(9),T.shadowMapEnabled&&d.enable(10),T.doubleSided&&d.enable(11),T.flipSided&&d.enable(12),T.useDepthPacking&&d.enable(13),T.dithering&&d.enable(14),T.transmission&&d.enable(15),T.sheen&&d.enable(16),T.opaque&&d.enable(17),T.pointsUvs&&d.enable(18),T.decodeVideoTexture&&d.enable(19),T.decodeVideoTextureEmissive&&d.enable(20),T.alphaToCoverage&&d.enable(21),b.push(d.mask)}function C(b){const T=w[b.type];let k;if(T){const J=gi[T];k=p0.clone(J.uniforms)}else k=b.uniforms;return k}function V(b,T){let k;for(let J=0,Q=_.length;J<Q;J++){const ce=_[J];if(ce.cacheKey===T){k=ce,++k.usedTimes;break}}return k===void 0&&(k=new BM(o,T,b,u),_.push(k)),k}function I(b){if(--b.usedTimes===0){const T=_.indexOf(b);_[T]=_[_.length-1],_.pop(),b.destroy()}}function U(b){p.remove(b)}function z(){p.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:C,acquireProgram:V,releaseProgram:I,releaseShaderCache:U,programs:_,dispose:z}}function WM(){let o=new WeakMap;function e(f){return o.has(f)}function n(f){let d=o.get(f);return d===void 0&&(d={},o.set(f,d)),d}function r(f){o.delete(f)}function a(f,d,p){o.get(f)[d]=p}function u(){o=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function XM(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Cm(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function bm(){const o=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function f(v,x,S,w,A,y){let g=o[e];return g===void 0?(g={id:v.id,object:v,geometry:x,material:S,groupOrder:w,renderOrder:v.renderOrder,z:A,group:y},o[e]=g):(g.id=v.id,g.object=v,g.geometry=x,g.material=S,g.groupOrder=w,g.renderOrder=v.renderOrder,g.z=A,g.group=y),e++,g}function d(v,x,S,w,A,y){const g=f(v,x,S,w,A,y);S.transmission>0?r.push(g):S.transparent===!0?a.push(g):n.push(g)}function p(v,x,S,w,A,y){const g=f(v,x,S,w,A,y);S.transmission>0?r.unshift(g):S.transparent===!0?a.unshift(g):n.unshift(g)}function m(v,x){n.length>1&&n.sort(v||XM),r.length>1&&r.sort(x||Cm),a.length>1&&a.sort(x||Cm)}function _(){for(let v=e,x=o.length;v<x;v++){const S=o[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:d,unshift:p,finish:_,sort:m}}function jM(){let o=new WeakMap;function e(r,a){const u=o.get(r);let f;return u===void 0?(f=new bm,o.set(r,[f])):a>=u.length?(f=new bm,u.push(f)):f=u[a],f}function n(){o=new WeakMap}return{get:e,dispose:n}}function qM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new q,color:new xt};break;case"SpotLight":n={position:new q,direction:new q,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new q,color:new xt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new q,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":n={color:new xt,position:new q,halfWidth:new q,halfHeight:new q};break}return o[e.id]=n,n}}}function YM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let $M=0;function KM(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function ZM(o){const e=new qM,n=YM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new q);const a=new q,u=new Bt,f=new Bt;function d(m){let _=0,v=0,x=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let S=0,w=0,A=0,y=0,g=0,D=0,P=0,C=0,V=0,I=0,U=0;m.sort(KM);for(let b=0,T=m.length;b<T;b++){const k=m[b],J=k.color,Q=k.intensity,ce=k.distance,Y=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)_+=J.r*Q,v+=J.g*Q,x+=J.b*Q;else if(k.isLightProbe){for(let ne=0;ne<9;ne++)r.probe[ne].addScaledVector(k.sh.coefficients[ne],Q);U++}else if(k.isDirectionalLight){const ne=e.get(k);if(ne.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const ae=k.shadow,O=n.get(k);O.shadowIntensity=ae.intensity,O.shadowBias=ae.bias,O.shadowNormalBias=ae.normalBias,O.shadowRadius=ae.radius,O.shadowMapSize=ae.mapSize,r.directionalShadow[S]=O,r.directionalShadowMap[S]=Y,r.directionalShadowMatrix[S]=k.shadow.matrix,D++}r.directional[S]=ne,S++}else if(k.isSpotLight){const ne=e.get(k);ne.position.setFromMatrixPosition(k.matrixWorld),ne.color.copy(J).multiplyScalar(Q),ne.distance=ce,ne.coneCos=Math.cos(k.angle),ne.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ne.decay=k.decay,r.spot[A]=ne;const ae=k.shadow;if(k.map&&(r.spotLightMap[V]=k.map,V++,ae.updateMatrices(k),k.castShadow&&I++),r.spotLightMatrix[A]=ae.matrix,k.castShadow){const O=n.get(k);O.shadowIntensity=ae.intensity,O.shadowBias=ae.bias,O.shadowNormalBias=ae.normalBias,O.shadowRadius=ae.radius,O.shadowMapSize=ae.mapSize,r.spotShadow[A]=O,r.spotShadowMap[A]=Y,C++}A++}else if(k.isRectAreaLight){const ne=e.get(k);ne.color.copy(J).multiplyScalar(Q),ne.halfWidth.set(k.width*.5,0,0),ne.halfHeight.set(0,k.height*.5,0),r.rectArea[y]=ne,y++}else if(k.isPointLight){const ne=e.get(k);if(ne.color.copy(k.color).multiplyScalar(k.intensity),ne.distance=k.distance,ne.decay=k.decay,k.castShadow){const ae=k.shadow,O=n.get(k);O.shadowIntensity=ae.intensity,O.shadowBias=ae.bias,O.shadowNormalBias=ae.normalBias,O.shadowRadius=ae.radius,O.shadowMapSize=ae.mapSize,O.shadowCameraNear=ae.camera.near,O.shadowCameraFar=ae.camera.far,r.pointShadow[w]=O,r.pointShadowMap[w]=Y,r.pointShadowMatrix[w]=k.shadow.matrix,P++}r.point[w]=ne,w++}else if(k.isHemisphereLight){const ne=e.get(k);ne.skyColor.copy(k.color).multiplyScalar(Q),ne.groundColor.copy(k.groundColor).multiplyScalar(Q),r.hemi[g]=ne,g++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=be.LTC_FLOAT_1,r.rectAreaLTC2=be.LTC_FLOAT_2):(r.rectAreaLTC1=be.LTC_HALF_1,r.rectAreaLTC2=be.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=x;const z=r.hash;(z.directionalLength!==S||z.pointLength!==w||z.spotLength!==A||z.rectAreaLength!==y||z.hemiLength!==g||z.numDirectionalShadows!==D||z.numPointShadows!==P||z.numSpotShadows!==C||z.numSpotMaps!==V||z.numLightProbes!==U)&&(r.directional.length=S,r.spot.length=A,r.rectArea.length=y,r.point.length=w,r.hemi.length=g,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=C+V-I,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=U,z.directionalLength=S,z.pointLength=w,z.spotLength=A,z.rectAreaLength=y,z.hemiLength=g,z.numDirectionalShadows=D,z.numPointShadows=P,z.numSpotShadows=C,z.numSpotMaps=V,z.numLightProbes=U,r.version=$M++)}function p(m,_){let v=0,x=0,S=0,w=0,A=0;const y=_.matrixWorldInverse;for(let g=0,D=m.length;g<D;g++){const P=m[g];if(P.isDirectionalLight){const C=r.directional[v];C.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),v++}else if(P.isSpotLight){const C=r.spot[S];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),S++}else if(P.isRectAreaLight){const C=r.rectArea[w];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(y),f.identity(),u.copy(P.matrixWorld),u.premultiply(y),f.extractRotation(u),C.halfWidth.set(P.width*.5,0,0),C.halfHeight.set(0,P.height*.5,0),C.halfWidth.applyMatrix4(f),C.halfHeight.applyMatrix4(f),w++}else if(P.isPointLight){const C=r.point[x];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(y),x++}else if(P.isHemisphereLight){const C=r.hemi[A];C.direction.setFromMatrixPosition(P.matrixWorld),C.direction.transformDirection(y),A++}}}return{setup:d,setupView:p,state:r}}function Pm(o){const e=new ZM(o),n=[],r=[];function a(_){m.camera=_,n.length=0,r.length=0}function u(_){n.push(_)}function f(_){r.push(_)}function d(){e.setup(n)}function p(_){e.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:f}}function QM(o){let e=new WeakMap;function n(a,u=0){const f=e.get(a);let d;return f===void 0?(d=new Pm(o),e.set(a,[d])):u>=f.length?(d=new Pm(o),f.push(d)):d=f[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const JM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eE=`uniform sampler2D shadow_pass;
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
}`;function tE(o,e,n){let r=new $f;const a=new _t,u=new _t,f=new Ct,d=new T0({depthPacking:Fv}),p=new w0,m={},_=n.maxTextureSize,v={[yr]:Nn,[Nn]:yr,[Oi]:Oi},x=new Sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:JM,fragmentShader:eE}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const w=new Zn;w.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Vn(w,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nm;let g=this.type;this.render=function(I,U,z){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;const b=o.getRenderTarget(),T=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),J=o.state;J.setBlending(vr),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const Q=g!==Fi&&this.type===Fi,ce=g===Fi&&this.type!==Fi;for(let Y=0,ne=I.length;Y<ne;Y++){const ae=I[Y],O=ae.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;a.copy(O.mapSize);const ue=O.getFrameExtents();if(a.multiply(ue),u.copy(O.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(u.x=Math.floor(_/ue.x),a.x=u.x*ue.x,O.mapSize.x=u.x),a.y>_&&(u.y=Math.floor(_/ue.y),a.y=u.y*ue.y,O.mapSize.y=u.y)),O.map===null||Q===!0||ce===!0){const F=this.type!==Fi?{minFilter:ui,magFilter:ui}:{};O.map!==null&&O.map.dispose(),O.map=new $r(a.x,a.y,F),O.map.texture.name=ae.name+".shadowMap",O.camera.updateProjectionMatrix()}o.setRenderTarget(O.map),o.clear();const oe=O.getViewportCount();for(let F=0;F<oe;F++){const se=O.getViewport(F);f.set(u.x*se.x,u.y*se.y,u.x*se.z,u.y*se.w),J.viewport(f),O.updateMatrices(ae,F),r=O.getFrustum(),C(U,z,O.camera,ae,this.type)}O.isPointLightShadow!==!0&&this.type===Fi&&D(O,z),O.needsUpdate=!1}g=this.type,y.needsUpdate=!1,o.setRenderTarget(b,T,k)};function D(I,U){const z=e.update(A);x.defines.VSM_SAMPLES!==I.blurSamples&&(x.defines.VSM_SAMPLES=I.blurSamples,S.defines.VSM_SAMPLES=I.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new $r(a.x,a.y)),x.uniforms.shadow_pass.value=I.map.texture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(U,null,z,x,A,null),S.uniforms.shadow_pass.value=I.mapPass.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(U,null,z,S,A,null)}function P(I,U,z,b){let T=null;const k=z.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(k!==void 0)T=k;else if(T=z.isPointLight===!0?p:d,o.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const J=T.uuid,Q=U.uuid;let ce=m[J];ce===void 0&&(ce={},m[J]=ce);let Y=ce[Q];Y===void 0&&(Y=T.clone(),ce[Q]=Y,U.addEventListener("dispose",V)),T=Y}if(T.visible=U.visible,T.wireframe=U.wireframe,b===Fi?T.side=U.shadowSide!==null?U.shadowSide:U.side:T.side=U.shadowSide!==null?U.shadowSide:v[U.side],T.alphaMap=U.alphaMap,T.alphaTest=U.alphaTest,T.map=U.map,T.clipShadows=U.clipShadows,T.clippingPlanes=U.clippingPlanes,T.clipIntersection=U.clipIntersection,T.displacementMap=U.displacementMap,T.displacementScale=U.displacementScale,T.displacementBias=U.displacementBias,T.wireframeLinewidth=U.wireframeLinewidth,T.linewidth=U.linewidth,z.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const J=o.properties.get(T);J.light=z}return T}function C(I,U,z,b,T){if(I.visible===!1)return;if(I.layers.test(U.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&T===Fi)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,I.matrixWorld);const Q=e.update(I),ce=I.material;if(Array.isArray(ce)){const Y=Q.groups;for(let ne=0,ae=Y.length;ne<ae;ne++){const O=Y[ne],ue=ce[O.materialIndex];if(ue&&ue.visible){const oe=P(I,ue,b,T);I.onBeforeShadow(o,I,U,z,Q,oe,O),o.renderBufferDirect(z,null,Q,oe,I,O),I.onAfterShadow(o,I,U,z,Q,oe,O)}}}else if(ce.visible){const Y=P(I,ce,b,T);I.onBeforeShadow(o,I,U,z,Q,Y,null),o.renderBufferDirect(z,null,Q,Y,I,null),I.onAfterShadow(o,I,U,z,Q,Y,null)}}const J=I.children;for(let Q=0,ce=J.length;Q<ce;Q++)C(J[Q],U,z,b,T)}function V(I){I.target.removeEventListener("dispose",V);for(const z in m){const b=m[z],T=I.target.uuid;T in b&&(b[T].dispose(),delete b[T])}}}const nE={[ef]:tf,[nf]:of,[rf]:af,[Bs]:sf,[tf]:ef,[of]:nf,[af]:rf,[sf]:Bs};function iE(o,e){function n(){let W=!1;const Re=new Ct;let le=null;const he=new Ct(0,0,0,0);return{setMask:function(Le){le!==Le&&!W&&(o.colorMask(Le,Le,Le,Le),le=Le)},setLocked:function(Le){W=Le},setClear:function(Le,Pe,rt,Nt,Yt){Yt===!0&&(Le*=Nt,Pe*=Nt,rt*=Nt),Re.set(Le,Pe,rt,Nt),he.equals(Re)===!1&&(o.clearColor(Le,Pe,rt,Nt),he.copy(Re))},reset:function(){W=!1,le=null,he.set(-1,0,0,0)}}}function r(){let W=!1,Re=!1,le=null,he=null,Le=null;return{setReversed:function(Pe){if(Re!==Pe){const rt=e.get("EXT_clip_control");Re?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT);const Nt=Le;Le=null,this.setClear(Nt)}Re=Pe},getReversed:function(){return Re},setTest:function(Pe){Pe?_e(o.DEPTH_TEST):we(o.DEPTH_TEST)},setMask:function(Pe){le!==Pe&&!W&&(o.depthMask(Pe),le=Pe)},setFunc:function(Pe){if(Re&&(Pe=nE[Pe]),he!==Pe){switch(Pe){case ef:o.depthFunc(o.NEVER);break;case tf:o.depthFunc(o.ALWAYS);break;case nf:o.depthFunc(o.LESS);break;case Bs:o.depthFunc(o.LEQUAL);break;case rf:o.depthFunc(o.EQUAL);break;case sf:o.depthFunc(o.GEQUAL);break;case of:o.depthFunc(o.GREATER);break;case af:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}he=Pe}},setLocked:function(Pe){W=Pe},setClear:function(Pe){Le!==Pe&&(Re&&(Pe=1-Pe),o.clearDepth(Pe),Le=Pe)},reset:function(){W=!1,le=null,he=null,Le=null,Re=!1}}}function a(){let W=!1,Re=null,le=null,he=null,Le=null,Pe=null,rt=null,Nt=null,Yt=null;return{setTest:function(yt){W||(yt?_e(o.STENCIL_TEST):we(o.STENCIL_TEST))},setMask:function(yt){Re!==yt&&!W&&(o.stencilMask(yt),Re=yt)},setFunc:function(yt,wn,xn){(le!==yt||he!==wn||Le!==xn)&&(o.stencilFunc(yt,wn,xn),le=yt,he=wn,Le=xn)},setOp:function(yt,wn,xn){(Pe!==yt||rt!==wn||Nt!==xn)&&(o.stencilOp(yt,wn,xn),Pe=yt,rt=wn,Nt=xn)},setLocked:function(yt){W=yt},setClear:function(yt){Yt!==yt&&(o.clearStencil(yt),Yt=yt)},reset:function(){W=!1,Re=null,le=null,he=null,Le=null,Pe=null,rt=null,Nt=null,Yt=null}}}const u=new n,f=new r,d=new a,p=new WeakMap,m=new WeakMap;let _={},v={},x=new WeakMap,S=[],w=null,A=!1,y=null,g=null,D=null,P=null,C=null,V=null,I=null,U=new xt(0,0,0),z=0,b=!1,T=null,k=null,J=null,Q=null,ce=null;const Y=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,ae=0;const O=o.getParameter(o.VERSION);O.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(O)[1]),ne=ae>=1):O.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),ne=ae>=2);let ue=null,oe={};const F=o.getParameter(o.SCISSOR_BOX),se=o.getParameter(o.VIEWPORT),De=new Ct().fromArray(F),te=new Ct().fromArray(se);function fe(W,Re,le,he){const Le=new Uint8Array(4),Pe=o.createTexture();o.bindTexture(W,Pe),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let rt=0;rt<le;rt++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Re,0,o.RGBA,1,1,he,0,o.RGBA,o.UNSIGNED_BYTE,Le):o.texImage2D(Re+rt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Le);return Pe}const Se={};Se[o.TEXTURE_2D]=fe(o.TEXTURE_2D,o.TEXTURE_2D,1),Se[o.TEXTURE_CUBE_MAP]=fe(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[o.TEXTURE_2D_ARRAY]=fe(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Se[o.TEXTURE_3D]=fe(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),_e(o.DEPTH_TEST),f.setFunc(Bs),ht(!1),ct(Lp),_e(o.CULL_FACE),H(vr);function _e(W){_[W]!==!0&&(o.enable(W),_[W]=!0)}function we(W){_[W]!==!1&&(o.disable(W),_[W]=!1)}function qe(W,Re){return v[W]!==Re?(o.bindFramebuffer(W,Re),v[W]=Re,W===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Re),W===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Re),!0):!1}function Ge(W,Re){let le=S,he=!1;if(W){le=x.get(Re),le===void 0&&(le=[],x.set(Re,le));const Le=W.textures;if(le.length!==Le.length||le[0]!==o.COLOR_ATTACHMENT0){for(let Pe=0,rt=Le.length;Pe<rt;Pe++)le[Pe]=o.COLOR_ATTACHMENT0+Pe;le.length=Le.length,he=!0}}else le[0]!==o.BACK&&(le[0]=o.BACK,he=!0);he&&o.drawBuffers(le)}function Pt(W){return w!==W?(o.useProgram(W),w=W,!0):!1}const Lt={[Wr]:o.FUNC_ADD,[lv]:o.FUNC_SUBTRACT,[uv]:o.FUNC_REVERSE_SUBTRACT};Lt[cv]=o.MIN,Lt[fv]=o.MAX;const lt={[dv]:o.ZERO,[hv]:o.ONE,[pv]:o.SRC_COLOR,[Qc]:o.SRC_ALPHA,[yv]:o.SRC_ALPHA_SATURATE,[vv]:o.DST_COLOR,[gv]:o.DST_ALPHA,[mv]:o.ONE_MINUS_SRC_COLOR,[Jc]:o.ONE_MINUS_SRC_ALPHA,[xv]:o.ONE_MINUS_DST_COLOR,[_v]:o.ONE_MINUS_DST_ALPHA,[Sv]:o.CONSTANT_COLOR,[Mv]:o.ONE_MINUS_CONSTANT_COLOR,[Ev]:o.CONSTANT_ALPHA,[Tv]:o.ONE_MINUS_CONSTANT_ALPHA};function H(W,Re,le,he,Le,Pe,rt,Nt,Yt,yt){if(W===vr){A===!0&&(we(o.BLEND),A=!1);return}if(A===!1&&(_e(o.BLEND),A=!0),W!==av){if(W!==y||yt!==b){if((g!==Wr||C!==Wr)&&(o.blendEquation(o.FUNC_ADD),g=Wr,C=Wr),yt)switch(W){case Fs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Dp:o.blendFunc(o.ONE,o.ONE);break;case Np:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Up:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Fs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Dp:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Np:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Up:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}D=null,P=null,V=null,I=null,U.set(0,0,0),z=0,y=W,b=yt}return}Le=Le||Re,Pe=Pe||le,rt=rt||he,(Re!==g||Le!==C)&&(o.blendEquationSeparate(Lt[Re],Lt[Le]),g=Re,C=Le),(le!==D||he!==P||Pe!==V||rt!==I)&&(o.blendFuncSeparate(lt[le],lt[he],lt[Pe],lt[rt]),D=le,P=he,V=Pe,I=rt),(Nt.equals(U)===!1||Yt!==z)&&(o.blendColor(Nt.r,Nt.g,Nt.b,Yt),U.copy(Nt),z=Yt),y=W,b=!1}function vn(W,Re){W.side===Oi?we(o.CULL_FACE):_e(o.CULL_FACE);let le=W.side===Nn;Re&&(le=!le),ht(le),W.blending===Fs&&W.transparent===!1?H(vr):H(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),u.setMask(W.colorWrite);const he=W.stencilWrite;d.setTest(he),he&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),At(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?_e(o.SAMPLE_ALPHA_TO_COVERAGE):we(o.SAMPLE_ALPHA_TO_COVERAGE)}function ht(W){T!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),T=W)}function ct(W){W!==rv?(_e(o.CULL_FACE),W!==k&&(W===Lp?o.cullFace(o.BACK):W===sv?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):we(o.CULL_FACE),k=W}function Ye(W){W!==J&&(ne&&o.lineWidth(W),J=W)}function At(W,Re,le){W?(_e(o.POLYGON_OFFSET_FILL),(Q!==Re||ce!==le)&&(o.polygonOffset(Re,le),Q=Re,ce=le)):we(o.POLYGON_OFFSET_FILL)}function We(W){W?_e(o.SCISSOR_TEST):we(o.SCISSOR_TEST)}function L(W){W===void 0&&(W=o.TEXTURE0+Y-1),ue!==W&&(o.activeTexture(W),ue=W)}function E(W,Re,le){le===void 0&&(ue===null?le=o.TEXTURE0+Y-1:le=ue);let he=oe[le];he===void 0&&(he={type:void 0,texture:void 0},oe[le]=he),(he.type!==W||he.texture!==Re)&&(ue!==le&&(o.activeTexture(le),ue=le),o.bindTexture(W,Re||Se[W]),he.type=W,he.texture=Re)}function ee(){const W=oe[ue];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function pe(){try{o.compressedTexImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ve(){try{o.compressedTexImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function de(){try{o.texSubImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Xe(){try{o.texSubImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ae(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ie(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ut(){try{o.texStorage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ee(){try{o.texStorage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Oe(){try{o.texImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ke(){try{o.texImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function et(W){De.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),De.copy(W))}function ke(W){te.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),te.copy(W))}function ft(W,Re){let le=m.get(Re);le===void 0&&(le=new WeakMap,m.set(Re,le));let he=le.get(W);he===void 0&&(he=o.getUniformBlockIndex(Re,W.name),le.set(W,he))}function it(W,Re){const he=m.get(Re).get(W);p.get(Re)!==he&&(o.uniformBlockBinding(Re,he,W.__bindingPointIndex),p.set(Re,he))}function wt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),f.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},ue=null,oe={},v={},x=new WeakMap,S=[],w=null,A=!1,y=null,g=null,D=null,P=null,C=null,V=null,I=null,U=new xt(0,0,0),z=0,b=!1,T=null,k=null,J=null,Q=null,ce=null,De.set(0,0,o.canvas.width,o.canvas.height),te.set(0,0,o.canvas.width,o.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:_e,disable:we,bindFramebuffer:qe,drawBuffers:Ge,useProgram:Pt,setBlending:H,setMaterial:vn,setFlipSided:ht,setCullFace:ct,setLineWidth:Ye,setPolygonOffset:At,setScissorTest:We,activeTexture:L,bindTexture:E,unbindTexture:ee,compressedTexImage2D:pe,compressedTexImage3D:ve,texImage2D:Oe,texImage3D:Ke,updateUBOMapping:ft,uniformBlockBinding:it,texStorage2D:ut,texStorage3D:Ee,texSubImage2D:de,texSubImage3D:Xe,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Ie,scissor:et,viewport:ke,reset:wt}}function rE(o,e,n,r,a,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new _t,_=new WeakMap;let v;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(L,E){return S?new OffscreenCanvas(L,E):Pl("canvas")}function A(L,E,ee){let pe=1;const ve=We(L);if((ve.width>ee||ve.height>ee)&&(pe=ee/Math.max(ve.width,ve.height)),pe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const de=Math.floor(pe*ve.width),Xe=Math.floor(pe*ve.height);v===void 0&&(v=w(de,Xe));const Ae=E?w(de,Xe):v;return Ae.width=de,Ae.height=Xe,Ae.getContext("2d").drawImage(L,0,0,de,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+de+"x"+Xe+")."),Ae}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),L;return L}function y(L){return L.generateMipmaps}function g(L){o.generateMipmap(L)}function D(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(L,E,ee,pe,ve=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let de=E;if(E===o.RED&&(ee===o.FLOAT&&(de=o.R32F),ee===o.HALF_FLOAT&&(de=o.R16F),ee===o.UNSIGNED_BYTE&&(de=o.R8)),E===o.RED_INTEGER&&(ee===o.UNSIGNED_BYTE&&(de=o.R8UI),ee===o.UNSIGNED_SHORT&&(de=o.R16UI),ee===o.UNSIGNED_INT&&(de=o.R32UI),ee===o.BYTE&&(de=o.R8I),ee===o.SHORT&&(de=o.R16I),ee===o.INT&&(de=o.R32I)),E===o.RG&&(ee===o.FLOAT&&(de=o.RG32F),ee===o.HALF_FLOAT&&(de=o.RG16F),ee===o.UNSIGNED_BYTE&&(de=o.RG8)),E===o.RG_INTEGER&&(ee===o.UNSIGNED_BYTE&&(de=o.RG8UI),ee===o.UNSIGNED_SHORT&&(de=o.RG16UI),ee===o.UNSIGNED_INT&&(de=o.RG32UI),ee===o.BYTE&&(de=o.RG8I),ee===o.SHORT&&(de=o.RG16I),ee===o.INT&&(de=o.RG32I)),E===o.RGB_INTEGER&&(ee===o.UNSIGNED_BYTE&&(de=o.RGB8UI),ee===o.UNSIGNED_SHORT&&(de=o.RGB16UI),ee===o.UNSIGNED_INT&&(de=o.RGB32UI),ee===o.BYTE&&(de=o.RGB8I),ee===o.SHORT&&(de=o.RGB16I),ee===o.INT&&(de=o.RGB32I)),E===o.RGBA_INTEGER&&(ee===o.UNSIGNED_BYTE&&(de=o.RGBA8UI),ee===o.UNSIGNED_SHORT&&(de=o.RGBA16UI),ee===o.UNSIGNED_INT&&(de=o.RGBA32UI),ee===o.BYTE&&(de=o.RGBA8I),ee===o.SHORT&&(de=o.RGBA16I),ee===o.INT&&(de=o.RGBA32I)),E===o.RGB&&ee===o.UNSIGNED_INT_5_9_9_9_REV&&(de=o.RGB9_E5),E===o.RGBA){const Xe=ve?Cl:Tt.getTransfer(pe);ee===o.FLOAT&&(de=o.RGBA32F),ee===o.HALF_FLOAT&&(de=o.RGBA16F),ee===o.UNSIGNED_BYTE&&(de=Xe===Rt?o.SRGB8_ALPHA8:o.RGBA8),ee===o.UNSIGNED_SHORT_4_4_4_4&&(de=o.RGBA4),ee===o.UNSIGNED_SHORT_5_5_5_1&&(de=o.RGB5_A1)}return(de===o.R16F||de===o.R32F||de===o.RG16F||de===o.RG32F||de===o.RGBA16F||de===o.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function C(L,E){let ee;return L?E===null||E===Yr||E===Vs?ee=o.DEPTH24_STENCIL8:E===ki?ee=o.DEPTH32F_STENCIL8:E===ko&&(ee=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Yr||E===Vs?ee=o.DEPTH_COMPONENT24:E===ki?ee=o.DEPTH_COMPONENT32F:E===ko&&(ee=o.DEPTH_COMPONENT16),ee}function V(L,E){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==ui&&L.minFilter!==_i?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function I(L){const E=L.target;E.removeEventListener("dispose",I),z(E),E.isVideoTexture&&_.delete(E)}function U(L){const E=L.target;E.removeEventListener("dispose",U),T(E)}function z(L){const E=r.get(L);if(E.__webglInit===void 0)return;const ee=L.source,pe=x.get(ee);if(pe){const ve=pe[E.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&b(L),Object.keys(pe).length===0&&x.delete(ee)}r.remove(L)}function b(L){const E=r.get(L);o.deleteTexture(E.__webglTexture);const ee=L.source,pe=x.get(ee);delete pe[E.__cacheKey],f.memory.textures--}function T(L){const E=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(E.__webglFramebuffer[pe]))for(let ve=0;ve<E.__webglFramebuffer[pe].length;ve++)o.deleteFramebuffer(E.__webglFramebuffer[pe][ve]);else o.deleteFramebuffer(E.__webglFramebuffer[pe]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[pe])}else{if(Array.isArray(E.__webglFramebuffer))for(let pe=0;pe<E.__webglFramebuffer.length;pe++)o.deleteFramebuffer(E.__webglFramebuffer[pe]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let pe=0;pe<E.__webglColorRenderbuffer.length;pe++)E.__webglColorRenderbuffer[pe]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[pe]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const ee=L.textures;for(let pe=0,ve=ee.length;pe<ve;pe++){const de=r.get(ee[pe]);de.__webglTexture&&(o.deleteTexture(de.__webglTexture),f.memory.textures--),r.remove(ee[pe])}r.remove(L)}let k=0;function J(){k=0}function Q(){const L=k;return L>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+a.maxTextures),k+=1,L}function ce(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function Y(L,E){const ee=r.get(L);if(L.isVideoTexture&&Ye(L),L.isRenderTargetTexture===!1&&L.version>0&&ee.__version!==L.version){const pe=L.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(ee,L,E);return}}n.bindTexture(o.TEXTURE_2D,ee.__webglTexture,o.TEXTURE0+E)}function ne(L,E){const ee=r.get(L);if(L.version>0&&ee.__version!==L.version){te(ee,L,E);return}n.bindTexture(o.TEXTURE_2D_ARRAY,ee.__webglTexture,o.TEXTURE0+E)}function ae(L,E){const ee=r.get(L);if(L.version>0&&ee.__version!==L.version){te(ee,L,E);return}n.bindTexture(o.TEXTURE_3D,ee.__webglTexture,o.TEXTURE0+E)}function O(L,E){const ee=r.get(L);if(L.version>0&&ee.__version!==L.version){fe(ee,L,E);return}n.bindTexture(o.TEXTURE_CUBE_MAP,ee.__webglTexture,o.TEXTURE0+E)}const ue={[cf]:o.REPEAT,[jr]:o.CLAMP_TO_EDGE,[ff]:o.MIRRORED_REPEAT},oe={[ui]:o.NEAREST,[Uv]:o.NEAREST_MIPMAP_NEAREST,[Za]:o.NEAREST_MIPMAP_LINEAR,[_i]:o.LINEAR,[xc]:o.LINEAR_MIPMAP_NEAREST,[qr]:o.LINEAR_MIPMAP_LINEAR},F={[kv]:o.NEVER,[Wv]:o.ALWAYS,[Bv]:o.LESS,[qm]:o.LEQUAL,[zv]:o.EQUAL,[Gv]:o.GEQUAL,[Hv]:o.GREATER,[Vv]:o.NOTEQUAL};function se(L,E){if(E.type===ki&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===_i||E.magFilter===xc||E.magFilter===Za||E.magFilter===qr||E.minFilter===_i||E.minFilter===xc||E.minFilter===Za||E.minFilter===qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,ue[E.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,ue[E.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,ue[E.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,oe[E.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,oe[E.minFilter]),E.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,F[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ui||E.minFilter!==Za&&E.minFilter!==qr||E.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");o.texParameterf(L,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function De(L,E){let ee=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",I));const pe=E.source;let ve=x.get(pe);ve===void 0&&(ve={},x.set(pe,ve));const de=ce(E);if(de!==L.__cacheKey){ve[de]===void 0&&(ve[de]={texture:o.createTexture(),usedTimes:0},f.memory.textures++,ee=!0),ve[de].usedTimes++;const Xe=ve[L.__cacheKey];Xe!==void 0&&(ve[L.__cacheKey].usedTimes--,Xe.usedTimes===0&&b(E)),L.__cacheKey=de,L.__webglTexture=ve[de].texture}return ee}function te(L,E,ee){let pe=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pe=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pe=o.TEXTURE_3D);const ve=De(L,E),de=E.source;n.bindTexture(pe,L.__webglTexture,o.TEXTURE0+ee);const Xe=r.get(de);if(de.version!==Xe.__version||ve===!0){n.activeTexture(o.TEXTURE0+ee);const Ae=Tt.getPrimaries(Tt.workingColorSpace),Ie=E.colorSpace===_r?null:Tt.getPrimaries(E.colorSpace),ut=E.colorSpace===_r||Ae===Ie?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Ee=A(E.image,!1,a.maxTextureSize);Ee=At(E,Ee);const Oe=u.convert(E.format,E.colorSpace),Ke=u.convert(E.type);let et=P(E.internalFormat,Oe,Ke,E.colorSpace,E.isVideoTexture);se(pe,E);let ke;const ft=E.mipmaps,it=E.isVideoTexture!==!0,wt=Xe.__version===void 0||ve===!0,W=de.dataReady,Re=V(E,Ee);if(E.isDepthTexture)et=C(E.format===Gs,E.type),wt&&(it?n.texStorage2D(o.TEXTURE_2D,1,et,Ee.width,Ee.height):n.texImage2D(o.TEXTURE_2D,0,et,Ee.width,Ee.height,0,Oe,Ke,null));else if(E.isDataTexture)if(ft.length>0){it&&wt&&n.texStorage2D(o.TEXTURE_2D,Re,et,ft[0].width,ft[0].height);for(let le=0,he=ft.length;le<he;le++)ke=ft[le],it?W&&n.texSubImage2D(o.TEXTURE_2D,le,0,0,ke.width,ke.height,Oe,Ke,ke.data):n.texImage2D(o.TEXTURE_2D,le,et,ke.width,ke.height,0,Oe,Ke,ke.data);E.generateMipmaps=!1}else it?(wt&&n.texStorage2D(o.TEXTURE_2D,Re,et,Ee.width,Ee.height),W&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Oe,Ke,Ee.data)):n.texImage2D(o.TEXTURE_2D,0,et,Ee.width,Ee.height,0,Oe,Ke,Ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){it&&wt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Re,et,ft[0].width,ft[0].height,Ee.depth);for(let le=0,he=ft.length;le<he;le++)if(ke=ft[le],E.format!==li)if(Oe!==null)if(it){if(W)if(E.layerUpdates.size>0){const Le=om(ke.width,ke.height,E.format,E.type);for(const Pe of E.layerUpdates){const rt=ke.data.subarray(Pe*Le/ke.data.BYTES_PER_ELEMENT,(Pe+1)*Le/ke.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,le,0,0,Pe,ke.width,ke.height,1,Oe,rt)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,le,0,0,0,ke.width,ke.height,Ee.depth,Oe,ke.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,le,et,ke.width,ke.height,Ee.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?W&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,le,0,0,0,ke.width,ke.height,Ee.depth,Oe,Ke,ke.data):n.texImage3D(o.TEXTURE_2D_ARRAY,le,et,ke.width,ke.height,Ee.depth,0,Oe,Ke,ke.data)}else{it&&wt&&n.texStorage2D(o.TEXTURE_2D,Re,et,ft[0].width,ft[0].height);for(let le=0,he=ft.length;le<he;le++)ke=ft[le],E.format!==li?Oe!==null?it?W&&n.compressedTexSubImage2D(o.TEXTURE_2D,le,0,0,ke.width,ke.height,Oe,ke.data):n.compressedTexImage2D(o.TEXTURE_2D,le,et,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?W&&n.texSubImage2D(o.TEXTURE_2D,le,0,0,ke.width,ke.height,Oe,Ke,ke.data):n.texImage2D(o.TEXTURE_2D,le,et,ke.width,ke.height,0,Oe,Ke,ke.data)}else if(E.isDataArrayTexture)if(it){if(wt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Re,et,Ee.width,Ee.height,Ee.depth),W)if(E.layerUpdates.size>0){const le=om(Ee.width,Ee.height,E.format,E.type);for(const he of E.layerUpdates){const Le=Ee.data.subarray(he*le/Ee.data.BYTES_PER_ELEMENT,(he+1)*le/Ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,he,Ee.width,Ee.height,1,Oe,Ke,Le)}E.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Oe,Ke,Ee.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,et,Ee.width,Ee.height,Ee.depth,0,Oe,Ke,Ee.data);else if(E.isData3DTexture)it?(wt&&n.texStorage3D(o.TEXTURE_3D,Re,et,Ee.width,Ee.height,Ee.depth),W&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Oe,Ke,Ee.data)):n.texImage3D(o.TEXTURE_3D,0,et,Ee.width,Ee.height,Ee.depth,0,Oe,Ke,Ee.data);else if(E.isFramebufferTexture){if(wt)if(it)n.texStorage2D(o.TEXTURE_2D,Re,et,Ee.width,Ee.height);else{let le=Ee.width,he=Ee.height;for(let Le=0;Le<Re;Le++)n.texImage2D(o.TEXTURE_2D,Le,et,le,he,0,Oe,Ke,null),le>>=1,he>>=1}}else if(ft.length>0){if(it&&wt){const le=We(ft[0]);n.texStorage2D(o.TEXTURE_2D,Re,et,le.width,le.height)}for(let le=0,he=ft.length;le<he;le++)ke=ft[le],it?W&&n.texSubImage2D(o.TEXTURE_2D,le,0,0,Oe,Ke,ke):n.texImage2D(o.TEXTURE_2D,le,et,Oe,Ke,ke);E.generateMipmaps=!1}else if(it){if(wt){const le=We(Ee);n.texStorage2D(o.TEXTURE_2D,Re,et,le.width,le.height)}W&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Oe,Ke,Ee)}else n.texImage2D(o.TEXTURE_2D,0,et,Oe,Ke,Ee);y(E)&&g(pe),Xe.__version=de.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function fe(L,E,ee){if(E.image.length!==6)return;const pe=De(L,E),ve=E.source;n.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+ee);const de=r.get(ve);if(ve.version!==de.__version||pe===!0){n.activeTexture(o.TEXTURE0+ee);const Xe=Tt.getPrimaries(Tt.workingColorSpace),Ae=E.colorSpace===_r?null:Tt.getPrimaries(E.colorSpace),Ie=E.colorSpace===_r||Xe===Ae?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const ut=E.isCompressedTexture||E.image[0].isCompressedTexture,Ee=E.image[0]&&E.image[0].isDataTexture,Oe=[];for(let he=0;he<6;he++)!ut&&!Ee?Oe[he]=A(E.image[he],!0,a.maxCubemapSize):Oe[he]=Ee?E.image[he].image:E.image[he],Oe[he]=At(E,Oe[he]);const Ke=Oe[0],et=u.convert(E.format,E.colorSpace),ke=u.convert(E.type),ft=P(E.internalFormat,et,ke,E.colorSpace),it=E.isVideoTexture!==!0,wt=de.__version===void 0||pe===!0,W=ve.dataReady;let Re=V(E,Ke);se(o.TEXTURE_CUBE_MAP,E);let le;if(ut){it&&wt&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Re,ft,Ke.width,Ke.height);for(let he=0;he<6;he++){le=Oe[he].mipmaps;for(let Le=0;Le<le.length;Le++){const Pe=le[Le];E.format!==li?et!==null?it?W&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,0,0,Pe.width,Pe.height,et,Pe.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,ft,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?W&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,0,0,Pe.width,Pe.height,et,ke,Pe.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,ft,Pe.width,Pe.height,0,et,ke,Pe.data)}}}else{if(le=E.mipmaps,it&&wt){le.length>0&&Re++;const he=We(Oe[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,Re,ft,he.width,he.height)}for(let he=0;he<6;he++)if(Ee){it?W&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Oe[he].width,Oe[he].height,et,ke,Oe[he].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ft,Oe[he].width,Oe[he].height,0,et,ke,Oe[he].data);for(let Le=0;Le<le.length;Le++){const rt=le[Le].image[he].image;it?W&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,0,0,rt.width,rt.height,et,ke,rt.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,ft,rt.width,rt.height,0,et,ke,rt.data)}}else{it?W&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,et,ke,Oe[he]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ft,et,ke,Oe[he]);for(let Le=0;Le<le.length;Le++){const Pe=le[Le];it?W&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,0,0,et,ke,Pe.image[he]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,ft,et,ke,Pe.image[he])}}}y(E)&&g(o.TEXTURE_CUBE_MAP),de.__version=ve.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Se(L,E,ee,pe,ve,de){const Xe=u.convert(ee.format,ee.colorSpace),Ae=u.convert(ee.type),Ie=P(ee.internalFormat,Xe,Ae,ee.colorSpace),ut=r.get(E),Ee=r.get(ee);if(Ee.__renderTarget=E,!ut.__hasExternalTextures){const Oe=Math.max(1,E.width>>de),Ke=Math.max(1,E.height>>de);ve===o.TEXTURE_3D||ve===o.TEXTURE_2D_ARRAY?n.texImage3D(ve,de,Ie,Oe,Ke,E.depth,0,Xe,Ae,null):n.texImage2D(ve,de,Ie,Oe,Ke,0,Xe,Ae,null)}n.bindFramebuffer(o.FRAMEBUFFER,L),ct(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pe,ve,Ee.__webglTexture,0,ht(E)):(ve===o.TEXTURE_2D||ve>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pe,ve,Ee.__webglTexture,de),n.bindFramebuffer(o.FRAMEBUFFER,null)}function _e(L,E,ee){if(o.bindRenderbuffer(o.RENDERBUFFER,L),E.depthBuffer){const pe=E.depthTexture,ve=pe&&pe.isDepthTexture?pe.type:null,de=C(E.stencilBuffer,ve),Xe=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ae=ht(E);ct(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ae,de,E.width,E.height):ee?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ae,de,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,de,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Xe,o.RENDERBUFFER,L)}else{const pe=E.textures;for(let ve=0;ve<pe.length;ve++){const de=pe[ve],Xe=u.convert(de.format,de.colorSpace),Ae=u.convert(de.type),Ie=P(de.internalFormat,Xe,Ae,de.colorSpace),ut=ht(E);ee&&ct(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ut,Ie,E.width,E.height):ct(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ut,Ie,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Ie,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function we(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(E.depthTexture);pe.__renderTarget=E,(!pe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y(E.depthTexture,0);const ve=pe.__webglTexture,de=ht(E);if(E.depthTexture.format===Os)ct(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ve,0,de):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ve,0);else if(E.depthTexture.format===Gs)ct(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ve,0,de):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function qe(L){const E=r.get(L),ee=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const pe=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pe){const ve=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pe.removeEventListener("dispose",ve)};pe.addEventListener("dispose",ve),E.__depthDisposeCallback=ve}E.__boundDepthTexture=pe}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");we(E.__webglFramebuffer,L)}else if(ee){E.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(n.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[pe]),E.__webglDepthbuffer[pe]===void 0)E.__webglDepthbuffer[pe]=o.createRenderbuffer(),_e(E.__webglDepthbuffer[pe],L,!1);else{const ve=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,de=E.__webglDepthbuffer[pe];o.bindRenderbuffer(o.RENDERBUFFER,de),o.framebufferRenderbuffer(o.FRAMEBUFFER,ve,o.RENDERBUFFER,de)}}else if(n.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),_e(E.__webglDepthbuffer,L,!1);else{const pe=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ve=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ve),o.framebufferRenderbuffer(o.FRAMEBUFFER,pe,o.RENDERBUFFER,ve)}n.bindFramebuffer(o.FRAMEBUFFER,null)}function Ge(L,E,ee){const pe=r.get(L);E!==void 0&&Se(pe.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ee!==void 0&&qe(L)}function Pt(L){const E=L.texture,ee=r.get(L),pe=r.get(E);L.addEventListener("dispose",U);const ve=L.textures,de=L.isWebGLCubeRenderTarget===!0,Xe=ve.length>1;if(Xe||(pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture()),pe.__version=E.version,f.memory.textures++),de){ee.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(E.mipmaps&&E.mipmaps.length>0){ee.__webglFramebuffer[Ae]=[];for(let Ie=0;Ie<E.mipmaps.length;Ie++)ee.__webglFramebuffer[Ae][Ie]=o.createFramebuffer()}else ee.__webglFramebuffer[Ae]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Ae=0;Ae<E.mipmaps.length;Ae++)ee.__webglFramebuffer[Ae]=o.createFramebuffer()}else ee.__webglFramebuffer=o.createFramebuffer();if(Xe)for(let Ae=0,Ie=ve.length;Ae<Ie;Ae++){const ut=r.get(ve[Ae]);ut.__webglTexture===void 0&&(ut.__webglTexture=o.createTexture(),f.memory.textures++)}if(L.samples>0&&ct(L)===!1){ee.__webglMultisampledFramebuffer=o.createFramebuffer(),ee.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ve.length;Ae++){const Ie=ve[Ae];ee.__webglColorRenderbuffer[Ae]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ee.__webglColorRenderbuffer[Ae]);const ut=u.convert(Ie.format,Ie.colorSpace),Ee=u.convert(Ie.type),Oe=P(Ie.internalFormat,ut,Ee,Ie.colorSpace,L.isXRRenderTarget===!0),Ke=ht(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ke,Oe,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ae,o.RENDERBUFFER,ee.__webglColorRenderbuffer[Ae])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(ee.__webglDepthRenderbuffer=o.createRenderbuffer(),_e(ee.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(de){n.bindTexture(o.TEXTURE_CUBE_MAP,pe.__webglTexture),se(o.TEXTURE_CUBE_MAP,E);for(let Ae=0;Ae<6;Ae++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ie=0;Ie<E.mipmaps.length;Ie++)Se(ee.__webglFramebuffer[Ae][Ie],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ie);else Se(ee.__webglFramebuffer[Ae],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);y(E)&&g(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Xe){for(let Ae=0,Ie=ve.length;Ae<Ie;Ae++){const ut=ve[Ae],Ee=r.get(ut);n.bindTexture(o.TEXTURE_2D,Ee.__webglTexture),se(o.TEXTURE_2D,ut),Se(ee.__webglFramebuffer,L,ut,o.COLOR_ATTACHMENT0+Ae,o.TEXTURE_2D,0),y(ut)&&g(o.TEXTURE_2D)}n.unbindTexture()}else{let Ae=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ae=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Ae,pe.__webglTexture),se(Ae,E),E.mipmaps&&E.mipmaps.length>0)for(let Ie=0;Ie<E.mipmaps.length;Ie++)Se(ee.__webglFramebuffer[Ie],L,E,o.COLOR_ATTACHMENT0,Ae,Ie);else Se(ee.__webglFramebuffer,L,E,o.COLOR_ATTACHMENT0,Ae,0);y(E)&&g(Ae),n.unbindTexture()}L.depthBuffer&&qe(L)}function Lt(L){const E=L.textures;for(let ee=0,pe=E.length;ee<pe;ee++){const ve=E[ee];if(y(ve)){const de=D(L),Xe=r.get(ve).__webglTexture;n.bindTexture(de,Xe),g(de),n.unbindTexture()}}}const lt=[],H=[];function vn(L){if(L.samples>0){if(ct(L)===!1){const E=L.textures,ee=L.width,pe=L.height;let ve=o.COLOR_BUFFER_BIT;const de=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Xe=r.get(L),Ae=E.length>1;if(Ae)for(let Ie=0;Ie<E.length;Ie++)n.bindFramebuffer(o.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ie,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,Xe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ie,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Ie=0;Ie<E.length;Ie++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ve|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ve|=o.STENCIL_BUFFER_BIT)),Ae){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ie]);const ut=r.get(E[Ie]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ut,0)}o.blitFramebuffer(0,0,ee,pe,0,0,ee,pe,ve,o.NEAREST),p===!0&&(lt.length=0,H.length=0,lt.push(o.COLOR_ATTACHMENT0+Ie),L.depthBuffer&&L.resolveDepthBuffer===!1&&(lt.push(de),H.push(de),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,H)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,lt))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ae)for(let Ie=0;Ie<E.length;Ie++){n.bindFramebuffer(o.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ie,o.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ie]);const ut=r.get(E[Ie]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,Xe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ie,o.TEXTURE_2D,ut,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const E=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function ht(L){return Math.min(a.maxSamples,L.samples)}function ct(L){const E=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ye(L){const E=f.render.frame;_.get(L)!==E&&(_.set(L,E),L.update())}function At(L,E){const ee=L.colorSpace,pe=L.format,ve=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||ee!==Ws&&ee!==_r&&(Tt.getTransfer(ee)===Rt?(pe!==li||ve!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),E}function We(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=Q,this.resetTextureUnits=J,this.setTexture2D=Y,this.setTexture2DArray=ne,this.setTexture3D=ae,this.setTextureCube=O,this.rebindTextures=Ge,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=vn,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ct}function sE(o,e){function n(r,a=_r){let u;const f=Tt.getTransfer(a);if(r===Hi)return o.UNSIGNED_BYTE;if(r===Gf)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Wf)return o.UNSIGNED_SHORT_5_5_5_1;if(r===km)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Fm)return o.BYTE;if(r===Om)return o.SHORT;if(r===ko)return o.UNSIGNED_SHORT;if(r===Vf)return o.INT;if(r===Yr)return o.UNSIGNED_INT;if(r===ki)return o.FLOAT;if(r===Bo)return o.HALF_FLOAT;if(r===Bm)return o.ALPHA;if(r===zm)return o.RGB;if(r===li)return o.RGBA;if(r===Hm)return o.LUMINANCE;if(r===Vm)return o.LUMINANCE_ALPHA;if(r===Os)return o.DEPTH_COMPONENT;if(r===Gs)return o.DEPTH_STENCIL;if(r===Gm)return o.RED;if(r===Xf)return o.RED_INTEGER;if(r===Wm)return o.RG;if(r===jf)return o.RG_INTEGER;if(r===qf)return o.RGBA_INTEGER;if(r===Ml||r===El||r===Tl||r===wl)if(f===Rt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Ml)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===El)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Tl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===wl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Ml)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===El)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Tl)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===wl)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===df||r===hf||r===pf||r===mf)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===df)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===hf)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===pf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===mf)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===gf||r===_f||r===vf)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===gf||r===_f)return f===Rt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===vf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===xf||r===yf||r===Sf||r===Mf||r===Ef||r===Tf||r===wf||r===Af||r===Rf||r===Cf||r===bf||r===Pf||r===Lf||r===Df)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===xf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===yf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Sf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Mf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ef)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Tf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===wf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Af)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Rf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Cf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===bf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Pf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Lf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Df)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Al||r===Nf||r===Uf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Al)return f===Rt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Nf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Uf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Xm||r===If||r===Ff||r===Of)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Al)return u.COMPRESSED_RED_RGTC1_EXT;if(r===If)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ff)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Of)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Vs?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:n}}const oE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aE=`
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

}`;class lE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Un,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Sr({vertexShader:oE,fragmentShader:aE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Vn(new Il(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uE extends js{constructor(e,n){super();const r=this;let a=null,u=1,f=null,d="local-floor",p=1,m=null,_=null,v=null,x=null,S=null,w=null;const A=new lE,y=n.getContextAttributes();let g=null,D=null;const P=[],C=[],V=new _t;let I=null;const U=new Hn;U.viewport=new Ct;const z=new Hn;z.viewport=new Ct;const b=[U,z],T=new L0;let k=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let fe=P[te];return fe===void 0&&(fe=new Hc,P[te]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(te){let fe=P[te];return fe===void 0&&(fe=new Hc,P[te]=fe),fe.getGripSpace()},this.getHand=function(te){let fe=P[te];return fe===void 0&&(fe=new Hc,P[te]=fe),fe.getHandSpace()};function Q(te){const fe=C.indexOf(te.inputSource);if(fe===-1)return;const Se=P[fe];Se!==void 0&&(Se.update(te.inputSource,te.frame,m||f),Se.dispatchEvent({type:te.type,data:te.inputSource}))}function ce(){a.removeEventListener("select",Q),a.removeEventListener("selectstart",Q),a.removeEventListener("selectend",Q),a.removeEventListener("squeeze",Q),a.removeEventListener("squeezestart",Q),a.removeEventListener("squeezeend",Q),a.removeEventListener("end",ce),a.removeEventListener("inputsourceschange",Y);for(let te=0;te<P.length;te++){const fe=C[te];fe!==null&&(C[te]=null,P[te].disconnect(fe))}k=null,J=null,A.reset(),e.setRenderTarget(g),S=null,x=null,v=null,a=null,D=null,De.stop(),r.isPresenting=!1,e.setPixelRatio(I),e.setSize(V.width,V.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){u=te,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){d=te,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(te){m=te},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return v},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(te){if(a=te,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",Q),a.addEventListener("selectstart",Q),a.addEventListener("selectend",Q),a.addEventListener("squeeze",Q),a.addEventListener("squeezestart",Q),a.addEventListener("squeezeend",Q),a.addEventListener("end",ce),a.addEventListener("inputsourceschange",Y),y.xrCompatible!==!0&&await n.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(V),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,_e=null,we=null;y.depth&&(we=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Se=y.stencil?Gs:Os,_e=y.stencil?Vs:Yr);const qe={colorFormat:n.RGBA8,depthFormat:we,scaleFactor:u};v=new XRWebGLBinding(a,n),x=v.createProjectionLayer(qe),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),D=new $r(x.textureWidth,x.textureHeight,{format:li,type:Hi,depthTexture:new ag(x.textureWidth,x.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}else{const Se={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(a,n,Se),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new $r(S.framebufferWidth,S.framebufferHeight,{format:li,type:Hi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}D.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await a.requestReferenceSpace(d),De.setContext(a),De.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function Y(te){for(let fe=0;fe<te.removed.length;fe++){const Se=te.removed[fe],_e=C.indexOf(Se);_e>=0&&(C[_e]=null,P[_e].disconnect(Se))}for(let fe=0;fe<te.added.length;fe++){const Se=te.added[fe];let _e=C.indexOf(Se);if(_e===-1){for(let qe=0;qe<P.length;qe++)if(qe>=C.length){C.push(Se),_e=qe;break}else if(C[qe]===null){C[qe]=Se,_e=qe;break}if(_e===-1)break}const we=P[_e];we&&we.connect(Se)}}const ne=new q,ae=new q;function O(te,fe,Se){ne.setFromMatrixPosition(fe.matrixWorld),ae.setFromMatrixPosition(Se.matrixWorld);const _e=ne.distanceTo(ae),we=fe.projectionMatrix.elements,qe=Se.projectionMatrix.elements,Ge=we[14]/(we[10]-1),Pt=we[14]/(we[10]+1),Lt=(we[9]+1)/we[5],lt=(we[9]-1)/we[5],H=(we[8]-1)/we[0],vn=(qe[8]+1)/qe[0],ht=Ge*H,ct=Ge*vn,Ye=_e/(-H+vn),At=Ye*-H;if(fe.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(At),te.translateZ(Ye),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),we[10]===-1)te.projectionMatrix.copy(fe.projectionMatrix),te.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const We=Ge+Ye,L=Pt+Ye,E=ht-At,ee=ct+(_e-At),pe=Lt*Pt/L*We,ve=lt*Pt/L*We;te.projectionMatrix.makePerspective(E,ee,pe,ve,We,L),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function ue(te,fe){fe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(fe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(a===null)return;let fe=te.near,Se=te.far;A.texture!==null&&(A.depthNear>0&&(fe=A.depthNear),A.depthFar>0&&(Se=A.depthFar)),T.near=z.near=U.near=fe,T.far=z.far=U.far=Se,(k!==T.near||J!==T.far)&&(a.updateRenderState({depthNear:T.near,depthFar:T.far}),k=T.near,J=T.far),U.layers.mask=te.layers.mask|2,z.layers.mask=te.layers.mask|4,T.layers.mask=U.layers.mask|z.layers.mask;const _e=te.parent,we=T.cameras;ue(T,_e);for(let qe=0;qe<we.length;qe++)ue(we[qe],_e);we.length===2?O(T,U,z):T.projectionMatrix.copy(U.projectionMatrix),oe(te,T,_e)};function oe(te,fe,Se){Se===null?te.matrix.copy(fe.matrixWorld):(te.matrix.copy(Se.matrixWorld),te.matrix.invert(),te.matrix.multiply(fe.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(fe.projectionMatrix),te.projectionMatrixInverse.copy(fe.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=kf*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(x===null&&S===null))return p},this.setFoveation=function(te){p=te,x!==null&&(x.fixedFoveation=te),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=te)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(T)};let F=null;function se(te,fe){if(_=fe.getViewerPose(m||f),w=fe,_!==null){const Se=_.views;S!==null&&(e.setRenderTargetFramebuffer(D,S.framebuffer),e.setRenderTarget(D));let _e=!1;Se.length!==T.cameras.length&&(T.cameras.length=0,_e=!0);for(let Ge=0;Ge<Se.length;Ge++){const Pt=Se[Ge];let Lt=null;if(S!==null)Lt=S.getViewport(Pt);else{const H=v.getViewSubImage(x,Pt);Lt=H.viewport,Ge===0&&(e.setRenderTargetTextures(D,H.colorTexture,x.ignoreDepthValues?void 0:H.depthStencilTexture),e.setRenderTarget(D))}let lt=b[Ge];lt===void 0&&(lt=new Hn,lt.layers.enable(Ge),lt.viewport=new Ct,b[Ge]=lt),lt.matrix.fromArray(Pt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(Pt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),Ge===0&&(T.matrix.copy(lt.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),_e===!0&&T.cameras.push(lt)}const we=a.enabledFeatures;if(we&&we.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&v){const Ge=v.getDepthInformation(Se[0]);Ge&&Ge.isValid&&Ge.texture&&A.init(e,Ge,a.renderState)}}for(let Se=0;Se<P.length;Se++){const _e=C[Se],we=P[Se];_e!==null&&we!==void 0&&we.update(_e,fe,m||f)}F&&F(te,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),w=null}const De=new ug;De.setAnimationLoop(se),this.setAnimationLoop=function(te){F=te},this.dispose=function(){}}}const Hr=new xi,cE=new Bt;function fE(o,e){function n(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function r(y,g){g.color.getRGB(y.fogColor.value,ig(o)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function a(y,g,D,P,C){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(y,g):g.isMeshToonMaterial?(u(y,g),v(y,g)):g.isMeshPhongMaterial?(u(y,g),_(y,g)):g.isMeshStandardMaterial?(u(y,g),x(y,g),g.isMeshPhysicalMaterial&&S(y,g,C)):g.isMeshMatcapMaterial?(u(y,g),w(y,g)):g.isMeshDepthMaterial?u(y,g):g.isMeshDistanceMaterial?(u(y,g),A(y,g)):g.isMeshNormalMaterial?u(y,g):g.isLineBasicMaterial?(f(y,g),g.isLineDashedMaterial&&d(y,g)):g.isPointsMaterial?p(y,g,D,P):g.isSpriteMaterial?m(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,n(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===Nn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,n(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===Nn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,n(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,n(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const D=e.get(g),P=D.envMap,C=D.envMapRotation;P&&(y.envMap.value=P,Hr.copy(C),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),y.envMapRotation.value.setFromMatrix4(cE.makeRotationFromEuler(Hr)),y.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,y.aoMapTransform))}function f(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform))}function d(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function p(y,g,D,P){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*D,y.scale.value=P*.5,g.map&&(y.map.value=g.map,n(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function m(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function _(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function v(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function x(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function S(y,g,D){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Nn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,y.specularIntensityMapTransform))}function w(y,g){g.matcap&&(y.matcap.value=g.matcap)}function A(y,g){const D=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function dE(o,e,n,r){let a={},u={},f=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(D,P){const C=P.program;r.uniformBlockBinding(D,C)}function m(D,P){let C=a[D.id];C===void 0&&(w(D),C=_(D),a[D.id]=C,D.addEventListener("dispose",y));const V=P.program;r.updateUBOMapping(D,V);const I=e.render.frame;u[D.id]!==I&&(x(D),u[D.id]=I)}function _(D){const P=v();D.__bindingPointIndex=P;const C=o.createBuffer(),V=D.__size,I=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,V,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,C),C}function v(){for(let D=0;D<d;D++)if(f.indexOf(D)===-1)return f.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(D){const P=a[D.id],C=D.uniforms,V=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let I=0,U=C.length;I<U;I++){const z=Array.isArray(C[I])?C[I]:[C[I]];for(let b=0,T=z.length;b<T;b++){const k=z[b];if(S(k,I,b,V)===!0){const J=k.__offset,Q=Array.isArray(k.value)?k.value:[k.value];let ce=0;for(let Y=0;Y<Q.length;Y++){const ne=Q[Y],ae=A(ne);typeof ne=="number"||typeof ne=="boolean"?(k.__data[0]=ne,o.bufferSubData(o.UNIFORM_BUFFER,J+ce,k.__data)):ne.isMatrix3?(k.__data[0]=ne.elements[0],k.__data[1]=ne.elements[1],k.__data[2]=ne.elements[2],k.__data[3]=0,k.__data[4]=ne.elements[3],k.__data[5]=ne.elements[4],k.__data[6]=ne.elements[5],k.__data[7]=0,k.__data[8]=ne.elements[6],k.__data[9]=ne.elements[7],k.__data[10]=ne.elements[8],k.__data[11]=0):(ne.toArray(k.__data,ce),ce+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,J,k.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(D,P,C,V){const I=D.value,U=P+"_"+C;if(V[U]===void 0)return typeof I=="number"||typeof I=="boolean"?V[U]=I:V[U]=I.clone(),!0;{const z=V[U];if(typeof I=="number"||typeof I=="boolean"){if(z!==I)return V[U]=I,!0}else if(z.equals(I)===!1)return z.copy(I),!0}return!1}function w(D){const P=D.uniforms;let C=0;const V=16;for(let U=0,z=P.length;U<z;U++){const b=Array.isArray(P[U])?P[U]:[P[U]];for(let T=0,k=b.length;T<k;T++){const J=b[T],Q=Array.isArray(J.value)?J.value:[J.value];for(let ce=0,Y=Q.length;ce<Y;ce++){const ne=Q[ce],ae=A(ne),O=C%V,ue=O%ae.boundary,oe=O+ue;C+=ue,oe!==0&&V-oe<ae.storage&&(C+=V-oe),J.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=C,C+=ae.storage}}}const I=C%V;return I>0&&(C+=V-I),D.__size=C,D.__cache={},this}function A(D){const P={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(P.boundary=4,P.storage=4):D.isVector2?(P.boundary=8,P.storage=8):D.isVector3||D.isColor?(P.boundary=16,P.storage=12):D.isVector4?(P.boundary=16,P.storage=16):D.isMatrix3?(P.boundary=48,P.storage=48):D.isMatrix4?(P.boundary=64,P.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),P}function y(D){const P=D.target;P.removeEventListener("dispose",y);const C=f.indexOf(P.__bindingPointIndex);f.splice(C,1),o.deleteBuffer(a[P.id]),delete a[P.id],delete u[P.id]}function g(){for(const D in a)o.deleteBuffer(a[D]);f=[],a={},u={}}return{bind:p,update:m,dispose:g}}class hE{constructor(e={}){const{canvas:n=jv(),context:r=null,depth:a=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=f;const w=new Uint32Array(4),A=new Int32Array(4);let y=null,g=null;const D=[],P=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this.toneMapping=xr,this.toneMappingExposure=1;const C=this;let V=!1,I=0,U=0,z=null,b=-1,T=null;const k=new Ct,J=new Ct;let Q=null;const ce=new xt(0);let Y=0,ne=n.width,ae=n.height,O=1,ue=null,oe=null;const F=new Ct(0,0,ne,ae),se=new Ct(0,0,ne,ae);let De=!1;const te=new $f;let fe=!1,Se=!1;this.transmissionResolutionScale=1;const _e=new Bt,we=new Bt,qe=new q,Ge=new Ct,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Lt=!1;function lt(){return z===null?O:1}let H=r;function vn(R,X){return n.getContext(R,X)}try{const R={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Hf}`),n.addEventListener("webglcontextlost",he,!1),n.addEventListener("webglcontextrestored",Le,!1),n.addEventListener("webglcontextcreationerror",Pe,!1),H===null){const X="webgl2";if(H=vn(X,R),H===null)throw vn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ht,ct,Ye,At,We,L,E,ee,pe,ve,de,Xe,Ae,Ie,ut,Ee,Oe,Ke,et,ke,ft,it,wt,W;function Re(){ht=new ES(H),ht.init(),it=new sE(H,ht),ct=new _S(H,ht,e,it),Ye=new iE(H,ht),ct.reverseDepthBuffer&&x&&Ye.buffers.depth.setReversed(!0),At=new AS(H),We=new WM,L=new rE(H,ht,Ye,We,ct,it,At),E=new xS(C),ee=new MS(C),pe=new N0(H),wt=new mS(H,pe),ve=new TS(H,pe,At,wt),de=new CS(H,ve,pe,At),et=new RS(H,ct,L),Ee=new vS(We),Xe=new GM(C,E,ee,ht,ct,wt,Ee),Ae=new fE(C,We),Ie=new jM,ut=new QM(ht),Ke=new pS(C,E,ee,Ye,de,S,p),Oe=new tE(C,de,ct),W=new dE(H,At,ct,Ye),ke=new gS(H,ht,At),ft=new wS(H,ht,At),At.programs=Xe.programs,C.capabilities=ct,C.extensions=ht,C.properties=We,C.renderLists=Ie,C.shadowMap=Oe,C.state=Ye,C.info=At}Re();const le=new uE(C,H);this.xr=le,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=ht.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ht.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(R){R!==void 0&&(O=R,this.setSize(ne,ae,!1))},this.getSize=function(R){return R.set(ne,ae)},this.setSize=function(R,X,ie=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=R,ae=X,n.width=Math.floor(R*O),n.height=Math.floor(X*O),ie===!0&&(n.style.width=R+"px",n.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(ne*O,ae*O).floor()},this.setDrawingBufferSize=function(R,X,ie){ne=R,ae=X,O=ie,n.width=Math.floor(R*ie),n.height=Math.floor(X*ie),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(k)},this.getViewport=function(R){return R.copy(F)},this.setViewport=function(R,X,ie,K){R.isVector4?F.set(R.x,R.y,R.z,R.w):F.set(R,X,ie,K),Ye.viewport(k.copy(F).multiplyScalar(O).round())},this.getScissor=function(R){return R.copy(se)},this.setScissor=function(R,X,ie,K){R.isVector4?se.set(R.x,R.y,R.z,R.w):se.set(R,X,ie,K),Ye.scissor(J.copy(se).multiplyScalar(O).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(R){Ye.setScissorTest(De=R)},this.setOpaqueSort=function(R){ue=R},this.setTransparentSort=function(R){oe=R},this.getClearColor=function(R){return R.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(R=!0,X=!0,ie=!0){let K=0;if(R){let j=!1;if(z!==null){const Me=z.texture.format;j=Me===qf||Me===jf||Me===Xf}if(j){const Me=z.texture.type,Ce=Me===Hi||Me===Yr||Me===ko||Me===Vs||Me===Gf||Me===Wf,Ne=Ke.getClearColor(),Be=Ke.getClearAlpha(),tt=Ne.r,Je=Ne.g,He=Ne.b;Ce?(w[0]=tt,w[1]=Je,w[2]=He,w[3]=Be,H.clearBufferuiv(H.COLOR,0,w)):(A[0]=tt,A[1]=Je,A[2]=He,A[3]=Be,H.clearBufferiv(H.COLOR,0,A))}else K|=H.COLOR_BUFFER_BIT}X&&(K|=H.DEPTH_BUFFER_BIT),ie&&(K|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",he,!1),n.removeEventListener("webglcontextrestored",Le,!1),n.removeEventListener("webglcontextcreationerror",Pe,!1),Ke.dispose(),Ie.dispose(),ut.dispose(),We.dispose(),E.dispose(),ee.dispose(),de.dispose(),wt.dispose(),W.dispose(),Xe.dispose(),le.dispose(),le.removeEventListener("sessionstart",Kr),le.removeEventListener("sessionend",Gi),yi.stop()};function he(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const R=At.autoReset,X=Oe.enabled,ie=Oe.autoUpdate,K=Oe.needsUpdate,j=Oe.type;Re(),At.autoReset=R,Oe.enabled=X,Oe.autoUpdate=ie,Oe.needsUpdate=K,Oe.type=j}function Pe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function rt(R){const X=R.target;X.removeEventListener("dispose",rt),Nt(X)}function Nt(R){Yt(R),We.remove(R)}function Yt(R){const X=We.get(R).programs;X!==void 0&&(X.forEach(function(ie){Xe.releaseProgram(ie)}),R.isShaderMaterial&&Xe.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,ie,K,j,Me){X===null&&(X=Pt);const Ce=j.isMesh&&j.matrixWorld.determinant()<0,Ne=Xo(R,X,ie,K,j);Ye.setMaterial(K,Ce);let Be=ie.index,tt=1;if(K.wireframe===!0){if(Be=ve.getWireframeAttribute(ie),Be===void 0)return;tt=2}const Je=ie.drawRange,He=ie.attributes.position;let mt=Je.start*tt,st=(Je.start+Je.count)*tt;Me!==null&&(mt=Math.max(mt,Me.start*tt),st=Math.min(st,(Me.start+Me.count)*tt)),Be!==null?(mt=Math.max(mt,0),st=Math.min(st,Be.count)):He!=null&&(mt=Math.max(mt,0),st=Math.min(st,He.count));const Vt=st-mt;if(Vt<0||Vt===1/0)return;wt.setup(j,K,Ne,ie,Be);let Ft,vt=ke;if(Be!==null&&(Ft=pe.get(Be),vt=ft,vt.setIndex(Ft)),j.isMesh)K.wireframe===!0?(Ye.setLineWidth(K.wireframeLinewidth*lt()),vt.setMode(H.LINES)):vt.setMode(H.TRIANGLES);else if(j.isLine){let $e=K.linewidth;$e===void 0&&($e=1),Ye.setLineWidth($e*lt()),j.isLineSegments?vt.setMode(H.LINES):j.isLineLoop?vt.setMode(H.LINE_LOOP):vt.setMode(H.LINE_STRIP)}else j.isPoints?vt.setMode(H.POINTS):j.isSprite&&vt.setMode(H.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)vt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))vt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const $e=j._multiDrawStarts,Gt=j._multiDrawCounts,pt=j._multiDrawCount,cn=Be?pe.get(Be).bytesPerElement:1,Xi=We.get(K).currentProgram.getUniforms();for(let yn=0;yn<pt;yn++)Xi.setValue(H,"_gl_DrawID",yn),vt.render($e[yn]/cn,Gt[yn])}else if(j.isInstancedMesh)vt.renderInstances(mt,Vt,j.count);else if(ie.isInstancedBufferGeometry){const $e=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Gt=Math.min(ie.instanceCount,$e);vt.renderInstances(mt,Vt,Gt)}else vt.render(mt,Vt)};function yt(R,X,ie){R.transparent===!0&&R.side===Oi&&R.forceSinglePass===!1?(R.side=Nn,R.needsUpdate=!0,Zr(R,X,ie),R.side=yr,R.needsUpdate=!0,Zr(R,X,ie),R.side=Oi):Zr(R,X,ie)}this.compile=function(R,X,ie=null){ie===null&&(ie=R),g=ut.get(ie),g.init(X),P.push(g),ie.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),R!==ie&&R.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),g.setupLights();const K=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Me=j.material;if(Me)if(Array.isArray(Me))for(let Ce=0;Ce<Me.length;Ce++){const Ne=Me[Ce];yt(Ne,ie,j),K.add(Ne)}else yt(Me,ie,j),K.add(Me)}),P.pop(),g=null,K},this.compileAsync=function(R,X,ie=null){const K=this.compile(R,X,ie);return new Promise(j=>{function Me(){if(K.forEach(function(Ce){We.get(Ce).currentProgram.isReady()&&K.delete(Ce)}),K.size===0){j(R);return}setTimeout(Me,10)}ht.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let wn=null;function xn(R){wn&&wn(R)}function Kr(){yi.stop()}function Gi(){yi.start()}const yi=new ug;yi.setAnimationLoop(xn),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(R){wn=R,le.setAnimationLoop(R),R===null?yi.stop():yi.start()},le.addEventListener("sessionstart",Kr),le.addEventListener("sessionend",Gi),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(X),X=le.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,X,z),g=ut.get(R,P.length),g.init(X),P.push(g),we.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),te.setFromProjectionMatrix(we),Se=this.localClippingEnabled,fe=Ee.init(this.clippingPlanes,Se),y=Ie.get(R,D.length),y.init(),D.push(y),le.enabled===!0&&le.isPresenting===!0){const Me=C.xr.getDepthSensingMesh();Me!==null&&Si(Me,X,-1/0,C.sortObjects)}Si(R,X,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(ue,oe),Lt=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Lt&&Ke.addToRenderList(y,R),this.info.render.frame++,fe===!0&&Ee.beginShadows();const ie=g.state.shadowsArray;Oe.render(ie,R,X),fe===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=y.opaque,j=y.transmissive;if(g.setupLights(),X.isArrayCamera){const Me=X.cameras;if(j.length>0)for(let Ce=0,Ne=Me.length;Ce<Ne;Ce++){const Be=Me[Ce];Er(K,j,R,Be)}Lt&&Ke.render(R);for(let Ce=0,Ne=Me.length;Ce<Ne;Ce++){const Be=Me[Ce];Mr(y,R,Be,Be.viewport)}}else j.length>0&&Er(K,j,R,X),Lt&&Ke.render(R),Mr(y,R,X);z!==null&&U===0&&(L.updateMultisampleRenderTarget(z),L.updateRenderTargetMipmap(z)),R.isScene===!0&&R.onAfterRender(C,R,X),wt.resetDefaultState(),b=-1,T=null,P.pop(),P.length>0?(g=P[P.length-1],fe===!0&&Ee.setGlobalState(C.clippingPlanes,g.state.camera)):g=null,D.pop(),D.length>0?y=D[D.length-1]:y=null};function Si(R,X,ie,K){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)ie=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||te.intersectsSprite(R)){K&&Ge.setFromMatrixPosition(R.matrixWorld).applyMatrix4(we);const Ce=de.update(R),Ne=R.material;Ne.visible&&y.push(R,Ce,Ne,ie,Ge.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||te.intersectsObject(R))){const Ce=de.update(R),Ne=R.material;if(K&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ge.copy(R.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Ge.copy(Ce.boundingSphere.center)),Ge.applyMatrix4(R.matrixWorld).applyMatrix4(we)),Array.isArray(Ne)){const Be=Ce.groups;for(let tt=0,Je=Be.length;tt<Je;tt++){const He=Be[tt],mt=Ne[He.materialIndex];mt&&mt.visible&&y.push(R,Ce,mt,ie,Ge.z,He)}}else Ne.visible&&y.push(R,Ce,Ne,ie,Ge.z,null)}}const Me=R.children;for(let Ce=0,Ne=Me.length;Ce<Ne;Ce++)Si(Me[Ce],X,ie,K)}function Mr(R,X,ie,K){const j=R.opaque,Me=R.transmissive,Ce=R.transparent;g.setupLightsView(ie),fe===!0&&Ee.setGlobalState(C.clippingPlanes,ie),K&&Ye.viewport(k.copy(K)),j.length>0&&Wi(j,X,ie),Me.length>0&&Wi(Me,X,ie),Ce.length>0&&Wi(Ce,X,ie),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Er(R,X,ie,K){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[K.id]===void 0&&(g.state.transmissionRenderTarget[K.id]=new $r(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Bo:Hi,minFilter:qr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const Me=g.state.transmissionRenderTarget[K.id],Ce=K.viewport||k;Me.setSize(Ce.z*C.transmissionResolutionScale,Ce.w*C.transmissionResolutionScale);const Ne=C.getRenderTarget();C.setRenderTarget(Me),C.getClearColor(ce),Y=C.getClearAlpha(),Y<1&&C.setClearColor(16777215,.5),C.clear(),Lt&&Ke.render(ie);const Be=C.toneMapping;C.toneMapping=xr;const tt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),g.setupLightsView(K),fe===!0&&Ee.setGlobalState(C.clippingPlanes,K),Wi(R,ie,K),L.updateMultisampleRenderTarget(Me),L.updateRenderTargetMipmap(Me),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let He=0,mt=X.length;He<mt;He++){const st=X[He],Vt=st.object,Ft=st.geometry,vt=st.material,$e=st.group;if(vt.side===Oi&&Vt.layers.test(K.layers)){const Gt=vt.side;vt.side=Nn,vt.needsUpdate=!0,Go(Vt,ie,K,Ft,vt,$e),vt.side=Gt,vt.needsUpdate=!0,Je=!0}}Je===!0&&(L.updateMultisampleRenderTarget(Me),L.updateRenderTargetMipmap(Me))}C.setRenderTarget(Ne),C.setClearColor(ce,Y),tt!==void 0&&(K.viewport=tt),C.toneMapping=Be}function Wi(R,X,ie){const K=X.isScene===!0?X.overrideMaterial:null;for(let j=0,Me=R.length;j<Me;j++){const Ce=R[j],Ne=Ce.object,Be=Ce.geometry,tt=K===null?Ce.material:K,Je=Ce.group;Ne.layers.test(ie.layers)&&Go(Ne,X,ie,Be,tt,Je)}}function Go(R,X,ie,K,j,Me){R.onBeforeRender(C,X,ie,K,j,Me),R.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(C,X,ie,K,R,Me),j.transparent===!0&&j.side===Oi&&j.forceSinglePass===!1?(j.side=Nn,j.needsUpdate=!0,C.renderBufferDirect(ie,X,K,j,R,Me),j.side=yr,j.needsUpdate=!0,C.renderBufferDirect(ie,X,K,j,R,Me),j.side=Oi):C.renderBufferDirect(ie,X,K,j,R,Me),R.onAfterRender(C,X,ie,K,j,Me)}function Zr(R,X,ie){X.isScene!==!0&&(X=Pt);const K=We.get(R),j=g.state.lights,Me=g.state.shadowsArray,Ce=j.state.version,Ne=Xe.getParameters(R,j.state,Me,X,ie),Be=Xe.getProgramCacheKey(Ne);let tt=K.programs;K.environment=R.isMeshStandardMaterial?X.environment:null,K.fog=X.fog,K.envMap=(R.isMeshStandardMaterial?ee:E).get(R.envMap||K.environment),K.envMapRotation=K.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,tt===void 0&&(R.addEventListener("dispose",rt),tt=new Map,K.programs=tt);let Je=tt.get(Be);if(Je!==void 0){if(K.currentProgram===Je&&K.lightsStateVersion===Ce)return ci(R,Ne),Je}else Ne.uniforms=Xe.getUniforms(R),R.onBeforeCompile(Ne,C),Je=Xe.acquireProgram(Ne,Be),tt.set(Be,Je),K.uniforms=Ne.uniforms;const He=K.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(He.clippingPlanes=Ee.uniform),ci(R,Ne),K.needsLights=Ol(R),K.lightsStateVersion=Ce,K.needsLights&&(He.ambientLightColor.value=j.state.ambient,He.lightProbe.value=j.state.probe,He.directionalLights.value=j.state.directional,He.directionalLightShadows.value=j.state.directionalShadow,He.spotLights.value=j.state.spot,He.spotLightShadows.value=j.state.spotShadow,He.rectAreaLights.value=j.state.rectArea,He.ltc_1.value=j.state.rectAreaLTC1,He.ltc_2.value=j.state.rectAreaLTC2,He.pointLights.value=j.state.point,He.pointLightShadows.value=j.state.pointShadow,He.hemisphereLights.value=j.state.hemi,He.directionalShadowMap.value=j.state.directionalShadowMap,He.directionalShadowMatrix.value=j.state.directionalShadowMatrix,He.spotShadowMap.value=j.state.spotShadowMap,He.spotLightMatrix.value=j.state.spotLightMatrix,He.spotLightMap.value=j.state.spotLightMap,He.pointShadowMap.value=j.state.pointShadowMap,He.pointShadowMatrix.value=j.state.pointShadowMatrix),K.currentProgram=Je,K.uniformsList=null,Je}function Wo(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=Rl.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function ci(R,X){const ie=We.get(R);ie.outputColorSpace=X.outputColorSpace,ie.batching=X.batching,ie.batchingColor=X.batchingColor,ie.instancing=X.instancing,ie.instancingColor=X.instancingColor,ie.instancingMorph=X.instancingMorph,ie.skinning=X.skinning,ie.morphTargets=X.morphTargets,ie.morphNormals=X.morphNormals,ie.morphColors=X.morphColors,ie.morphTargetsCount=X.morphTargetsCount,ie.numClippingPlanes=X.numClippingPlanes,ie.numIntersection=X.numClipIntersection,ie.vertexAlphas=X.vertexAlphas,ie.vertexTangents=X.vertexTangents,ie.toneMapping=X.toneMapping}function Xo(R,X,ie,K,j){X.isScene!==!0&&(X=Pt),L.resetTextureUnits();const Me=X.fog,Ce=K.isMeshStandardMaterial?X.environment:null,Ne=z===null?C.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Ws,Be=(K.isMeshStandardMaterial?ee:E).get(K.envMap||Ce),tt=K.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,Je=!!ie.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),He=!!ie.morphAttributes.position,mt=!!ie.morphAttributes.normal,st=!!ie.morphAttributes.color;let Vt=xr;K.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Vt=C.toneMapping);const Ft=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,vt=Ft!==void 0?Ft.length:0,$e=We.get(K),Gt=g.state.lights;if(fe===!0&&(Se===!0||R!==T)){const on=R===T&&K.id===b;Ee.setState(K,R,on)}let pt=!1;K.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Gt.state.version||$e.outputColorSpace!==Ne||j.isBatchedMesh&&$e.batching===!1||!j.isBatchedMesh&&$e.batching===!0||j.isBatchedMesh&&$e.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&$e.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&$e.instancing===!1||!j.isInstancedMesh&&$e.instancing===!0||j.isSkinnedMesh&&$e.skinning===!1||!j.isSkinnedMesh&&$e.skinning===!0||j.isInstancedMesh&&$e.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&$e.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&$e.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&$e.instancingMorph===!1&&j.morphTexture!==null||$e.envMap!==Be||K.fog===!0&&$e.fog!==Me||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Ee.numPlanes||$e.numIntersection!==Ee.numIntersection)||$e.vertexAlphas!==tt||$e.vertexTangents!==Je||$e.morphTargets!==He||$e.morphNormals!==mt||$e.morphColors!==st||$e.toneMapping!==Vt||$e.morphTargetsCount!==vt)&&(pt=!0):(pt=!0,$e.__version=K.version);let cn=$e.currentProgram;pt===!0&&(cn=Zr(K,X,j));let Xi=!1,yn=!1,Mi=!1;const bt=cn.getUniforms(),fn=$e.uniforms;if(Ye.useProgram(cn.program)&&(Xi=!0,yn=!0,Mi=!0),K.id!==b&&(b=K.id,yn=!0),Xi||T!==R){Ye.buffers.depth.getReversed()?(_e.copy(R.projectionMatrix),Yv(_e),$v(_e),bt.setValue(H,"projectionMatrix",_e)):bt.setValue(H,"projectionMatrix",R.projectionMatrix),bt.setValue(H,"viewMatrix",R.matrixWorldInverse);const en=bt.map.cameraPosition;en!==void 0&&en.setValue(H,qe.setFromMatrixPosition(R.matrixWorld)),ct.logarithmicDepthBuffer&&bt.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&bt.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),T!==R&&(T=R,yn=!0,Mi=!0)}if(j.isSkinnedMesh){bt.setOptional(H,j,"bindMatrix"),bt.setOptional(H,j,"bindMatrixInverse");const on=j.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),bt.setValue(H,"boneTexture",on.boneTexture,L))}j.isBatchedMesh&&(bt.setOptional(H,j,"batchingTexture"),bt.setValue(H,"batchingTexture",j._matricesTexture,L),bt.setOptional(H,j,"batchingIdTexture"),bt.setValue(H,"batchingIdTexture",j._indirectTexture,L),bt.setOptional(H,j,"batchingColorTexture"),j._colorsTexture!==null&&bt.setValue(H,"batchingColorTexture",j._colorsTexture,L));const Jt=ie.morphAttributes;if((Jt.position!==void 0||Jt.normal!==void 0||Jt.color!==void 0)&&et.update(j,ie,cn),(yn||$e.receiveShadow!==j.receiveShadow)&&($e.receiveShadow=j.receiveShadow,bt.setValue(H,"receiveShadow",j.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(fn.envMap.value=Be,fn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&X.environment!==null&&(fn.envMapIntensity.value=X.environmentIntensity),yn&&(bt.setValue(H,"toneMappingExposure",C.toneMappingExposure),$e.needsLights&&jo(fn,Mi),Me&&K.fog===!0&&Ae.refreshFogUniforms(fn,Me),Ae.refreshMaterialUniforms(fn,K,O,ae,g.state.transmissionRenderTarget[R.id]),Rl.upload(H,Wo($e),fn,L)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Rl.upload(H,Wo($e),fn,L),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&bt.setValue(H,"center",j.center),bt.setValue(H,"modelViewMatrix",j.modelViewMatrix),bt.setValue(H,"normalMatrix",j.normalMatrix),bt.setValue(H,"modelMatrix",j.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const on=K.uniformsGroups;for(let en=0,St=on.length;en<St;en++){const fi=on[en];W.update(fi,cn),W.bind(fi,cn)}}return cn}function jo(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function Ol(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(R,X,ie){We.get(R.texture).__webglTexture=X,We.get(R.depthTexture).__webglTexture=ie;const K=We.get(R);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=ie===void 0,K.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,X){const ie=We.get(R);ie.__webglFramebuffer=X,ie.__useDefaultFramebuffer=X===void 0};const qo=H.createFramebuffer();this.setRenderTarget=function(R,X=0,ie=0){z=R,I=X,U=ie;let K=!0,j=null,Me=!1,Ce=!1;if(R){const Be=We.get(R);if(Be.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(H.FRAMEBUFFER,null),K=!1;else if(Be.__webglFramebuffer===void 0)L.setupRenderTarget(R);else if(Be.__hasExternalTextures)L.rebindTextures(R,We.get(R.texture).__webglTexture,We.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const He=R.depthTexture;if(Be.__boundDepthTexture!==He){if(He!==null&&We.has(He)&&(R.width!==He.image.width||R.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(R)}}const tt=R.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Ce=!0);const Je=We.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Je[X])?j=Je[X][ie]:j=Je[X],Me=!0):R.samples>0&&L.useMultisampledRTT(R)===!1?j=We.get(R).__webglMultisampledFramebuffer:Array.isArray(Je)?j=Je[ie]:j=Je,k.copy(R.viewport),J.copy(R.scissor),Q=R.scissorTest}else k.copy(F).multiplyScalar(O).floor(),J.copy(se).multiplyScalar(O).floor(),Q=De;if(ie!==0&&(j=qo),Ye.bindFramebuffer(H.FRAMEBUFFER,j)&&K&&Ye.drawBuffers(R,j),Ye.viewport(k),Ye.scissor(J),Ye.setScissorTest(Q),Me){const Be=We.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+X,Be.__webglTexture,ie)}else if(Ce){const Be=We.get(R.texture),tt=X;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Be.__webglTexture,ie,tt)}else if(R!==null&&ie!==0){const Be=We.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Be.__webglTexture,ie)}b=-1},this.readRenderTargetPixels=function(R,X,ie,K,j,Me,Ce){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=We.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ne=Ne[Ce]),Ne){Ye.bindFramebuffer(H.FRAMEBUFFER,Ne);try{const Be=R.texture,tt=Be.format,Je=Be.type;if(!ct.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-K&&ie>=0&&ie<=R.height-j&&H.readPixels(X,ie,K,j,it.convert(tt),it.convert(Je),Me)}finally{const Be=z!==null?We.get(z).__webglFramebuffer:null;Ye.bindFramebuffer(H.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(R,X,ie,K,j,Me,Ce){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=We.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ne=Ne[Ce]),Ne){const Be=R.texture,tt=Be.format,Je=Be.type;if(!ct.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=R.width-K&&ie>=0&&ie<=R.height-j){Ye.bindFramebuffer(H.FRAMEBUFFER,Ne);const He=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,He),H.bufferData(H.PIXEL_PACK_BUFFER,Me.byteLength,H.STREAM_READ),H.readPixels(X,ie,K,j,it.convert(tt),it.convert(Je),0);const mt=z!==null?We.get(z).__webglFramebuffer:null;Ye.bindFramebuffer(H.FRAMEBUFFER,mt);const st=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await qv(H,st,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,He),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Me),H.deleteBuffer(He),H.deleteSync(st),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,X=null,ie=0){R.isTexture!==!0&&(Us("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,R=arguments[1]);const K=Math.pow(2,-ie),j=Math.floor(R.image.width*K),Me=Math.floor(R.image.height*K),Ce=X!==null?X.x:0,Ne=X!==null?X.y:0;L.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,ie,0,0,Ce,Ne,j,Me),Ye.unbindTexture()};const Yo=H.createFramebuffer(),$o=H.createFramebuffer();this.copyTextureToTexture=function(R,X,ie=null,K=null,j=0,Me=null){R.isTexture!==!0&&(Us("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,R=arguments[1],X=arguments[2],Me=arguments[3]||0,ie=null),Me===null&&(j!==0?(Us("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=j,j=0):Me=0);let Ce,Ne,Be,tt,Je,He,mt,st,Vt;const Ft=R.isCompressedTexture?R.mipmaps[Me]:R.image;if(ie!==null)Ce=ie.max.x-ie.min.x,Ne=ie.max.y-ie.min.y,Be=ie.isBox3?ie.max.z-ie.min.z:1,tt=ie.min.x,Je=ie.min.y,He=ie.isBox3?ie.min.z:0;else{const Jt=Math.pow(2,-j);Ce=Math.floor(Ft.width*Jt),Ne=Math.floor(Ft.height*Jt),R.isDataArrayTexture?Be=Ft.depth:R.isData3DTexture?Be=Math.floor(Ft.depth*Jt):Be=1,tt=0,Je=0,He=0}K!==null?(mt=K.x,st=K.y,Vt=K.z):(mt=0,st=0,Vt=0);const vt=it.convert(X.format),$e=it.convert(X.type);let Gt;X.isData3DTexture?(L.setTexture3D(X,0),Gt=H.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(L.setTexture2DArray(X,0),Gt=H.TEXTURE_2D_ARRAY):(L.setTexture2D(X,0),Gt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment);const pt=H.getParameter(H.UNPACK_ROW_LENGTH),cn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Xi=H.getParameter(H.UNPACK_SKIP_PIXELS),yn=H.getParameter(H.UNPACK_SKIP_ROWS),Mi=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ft.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ft.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,tt),H.pixelStorei(H.UNPACK_SKIP_ROWS,Je),H.pixelStorei(H.UNPACK_SKIP_IMAGES,He);const bt=R.isDataArrayTexture||R.isData3DTexture,fn=X.isDataArrayTexture||X.isData3DTexture;if(R.isDepthTexture){const Jt=We.get(R),on=We.get(X),en=We.get(Jt.__renderTarget),St=We.get(on.__renderTarget);Ye.bindFramebuffer(H.READ_FRAMEBUFFER,en.__webglFramebuffer),Ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let fi=0;fi<Be;fi++)bt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,We.get(R).__webglTexture,j,He+fi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,We.get(X).__webglTexture,Me,Vt+fi)),H.blitFramebuffer(tt,Je,Ce,Ne,mt,st,Ce,Ne,H.DEPTH_BUFFER_BIT,H.NEAREST);Ye.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||We.has(R)){const Jt=We.get(R),on=We.get(X);Ye.bindFramebuffer(H.READ_FRAMEBUFFER,Yo),Ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,$o);for(let en=0;en<Be;en++)bt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Jt.__webglTexture,j,He+en):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Jt.__webglTexture,j),fn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,on.__webglTexture,Me,Vt+en):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,on.__webglTexture,Me),j!==0?H.blitFramebuffer(tt,Je,Ce,Ne,mt,st,Ce,Ne,H.COLOR_BUFFER_BIT,H.NEAREST):fn?H.copyTexSubImage3D(Gt,Me,mt,st,Vt+en,tt,Je,Ce,Ne):H.copyTexSubImage2D(Gt,Me,mt,st,tt,Je,Ce,Ne);Ye.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else fn?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(Gt,Me,mt,st,Vt,Ce,Ne,Be,vt,$e,Ft.data):X.isCompressedArrayTexture?H.compressedTexSubImage3D(Gt,Me,mt,st,Vt,Ce,Ne,Be,vt,Ft.data):H.texSubImage3D(Gt,Me,mt,st,Vt,Ce,Ne,Be,vt,$e,Ft):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Me,mt,st,Ce,Ne,vt,$e,Ft.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Me,mt,st,Ft.width,Ft.height,vt,Ft.data):H.texSubImage2D(H.TEXTURE_2D,Me,mt,st,Ce,Ne,vt,$e,Ft);H.pixelStorei(H.UNPACK_ROW_LENGTH,pt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,cn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Xi),H.pixelStorei(H.UNPACK_SKIP_ROWS,yn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Mi),Me===0&&X.generateMipmaps&&H.generateMipmap(Gt),Ye.unbindTexture()},this.copyTextureToTexture3D=function(R,X,ie=null,K=null,j=0){return R.isTexture!==!0&&(Us("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ie=arguments[0]||null,K=arguments[1]||null,R=arguments[2],X=arguments[3],j=arguments[4]||0),Us('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,X,ie,K,j)},this.initRenderTarget=function(R){We.get(R).__webglFramebuffer===void 0&&L.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),Ye.unbindTexture()},this.resetState=function(){I=0,U=0,z=null,Ye.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Tt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Tt._getUnpackColorSpace()}}/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pE=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),pg=(...o)=>o.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var mE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gE=kt.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:a="",children:u,iconNode:f,...d},p)=>kt.createElement("svg",{ref:p,...mE,width:e,height:e,stroke:o,strokeWidth:r?Number(n)*24/Number(e):n,className:pg("lucide",a),...d},[...f.map(([m,_])=>kt.createElement(m,_)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=(o,e)=>{const n=kt.forwardRef(({className:r,...a},u)=>kt.createElement(gE,{ref:u,iconNode:e,className:pg(`lucide-${pE(o)}`,r),...a}));return n.displayName=`${o}`,n};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _E=Vi("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vE=Vi("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=Vi("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yE=Vi("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SE=Vi("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ME=Vi("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=Vi("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EE=Vi("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TE=Vi("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),Sl="http://127.0.0.1:8000",wE=[{id:1,stack_name:"prod",urn:"urn:pulumi:prod::homelab::proxmoxve:index/vmLegacy:VmLegacy::server-prod-101",resource_type:"proxmoxve:index/vmLegacy:VmLegacy",vm_id:7e3,memory_mb:6144,cores:4,reboot_after_update:1,ignore_disk_speed:1,secret_provider:"infisical-sdk",state_json:'{"node":"prx-1","template":"packer-ubuntu-2404-lts","vlan":20,"bridge":"vmbr1","storage":"ceph-pool","protect":true}',created_at:"2026-11-10T14:22:00Z"}];function AE(){const o=kt.useRef(null),[e,n]=kt.useState(!1),[r,a]=kt.useState(!0),[u,f]=kt.useState(null),[d,p]=kt.useState("topology"),[m,_]=kt.useState(()=>{const Y=localStorage.getItem("pulumi_homelab_snapshots");return Y?JSON.parse(Y):wE}),[v,x]=kt.useState("dev"),[S,w]=kt.useState(7001),[A,y]=kt.useState(8192),[g,D]=kt.useState(4),[P,C]=kt.useState(!0),[V,I]=kt.useState(!0),[U,z]=kt.useState(""),[b,T]=kt.useState(null),k=window.location.protocol==="https:",J=kt.useCallback(async()=>{a(!0);const Y=new AbortController,ne=setTimeout(()=>Y.abort(),1500);try{const ae=await fetch(`${Sl}/api/health`,{signal:Y.signal,headers:{Accept:"application/json"}});if(clearTimeout(ne),ae.ok){const O=await ae.json();n(!0),f(O);const ue=await fetch(`${Sl}/api/snapshots?limit=25`);if(ue.ok){const oe=await ue.json();_(oe)}}else n(!1),f(null)}catch{clearTimeout(ne),n(!1),f(null)}finally{a(!1)}},[]);kt.useEffect(()=>{J()},[J]),kt.useEffect(()=>{e||localStorage.setItem("pulumi_homelab_snapshots",JSON.stringify(m))},[m,e]);const Q=async Y=>{Y.preventDefault();const ne=`urn:pulumi:${v}::homelab::proxmoxve:index/vmLegacy:VmLegacy::server-${v}-${S}`,ae={vm_id:Number(S),memory_mb:Number(A),cores:Number(g),reboot_after_update:P,ignore_changes:V?["disks[0].speed"]:[]};if(e)try{if((await fetch(`${Sl}/api/snapshots`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stack_name:v,vm_id:Number(S),memory_mb:Number(A),cores:Number(g),reboot_after_update:P,ignore_disk_speed:V,notes:`Simulated ${v} stack update via interactive explainer`})})).ok){J();return}}catch{}const O={id:Date.now(),stack_name:v,urn:ne,resource_type:"proxmoxve:index/vmLegacy:VmLegacy",vm_id:Number(S),memory_mb:Number(A),cores:Number(g),reboot_after_update:P?1:0,ignore_disk_speed:V?1:0,secret_provider:"infisical-sdk",state_json:JSON.stringify(ae),created_at:new Date().toISOString()};_(ue=>[O,...ue])},ce=async Y=>{if(Y.preventDefault(),!U.trim())return;if(e)try{const O=await fetch(`${Sl}/api/search?q=${encodeURIComponent(U.trim())}`);if(O.ok){const ue=await O.json();T(ue);return}}catch{}const ne=U.toLowerCase(),ae=m.filter(O=>O.urn.toLowerCase().includes(ne)||O.state_json.toLowerCase().includes(ne)||O.stack_name.toLowerCase().includes(ne));T({query:U,mode:"local-client-filter",vector_matches:ae.map(O=>({snapshot_id:O.id,distance:.12,stack_name:O.stack_name,urn:O.urn,vm_id:O.vm_id,memory_mb:O.memory_mb})),lexical_fts5_matches:ae})};return kt.useEffect(()=>{const Y=o.current;if(!Y)return;const ne=new y0;ne.background=new xt(132631),ne.fog=new Yf(132631,.028);const ae=new Hn(55,Y.clientWidth/Y.clientHeight,.1,1e3);ae.position.set(0,5.5,13.5),ae.lookAt(0,0,0);const O=new hE({antialias:!0});O.setSize(Y.clientWidth,Y.clientHeight),O.setPixelRatio(Math.min(window.devicePixelRatio,2)),Y.appendChild(O.domElement),ne.add(new P0(16777215,.75));const ue=new C0(3718648,2.4,60);ue.position.set(6,10,8),ne.add(ue);const oe=new Fo,F=new Vn(new Ys(2.8,2,2.2),new _l({color:959977,roughness:.25,metalness:.75}));F.position.set(-4.8,0,0),oe.add(F);const se=new Vn(new Kf(1.3,1.3,2.2,32),new _l({color:e?1096065:16096779,roughness:.2,metalness:.6}));se.position.set(0,0,0),oe.add(se);const De=new Vn(new Qf(1.5,0),new _l({color:16007006,roughness:.3,metalness:.65}));De.position.set(4.8,0,0),oe.add(De);const te=new Zn().setFromPoints([new q(-4.8,0,0),new q(0,0,0),new q(4.8,0,0)]);oe.add(new E0(te,new og({color:3718648})));const fe=new Vn(new Jf(.22,16,16),new _l({color:3718648,emissive:165063}));oe.add(fe),ne.add(oe);let Se,_e=0;const we=()=>{Se=requestAnimationFrame(we),_e+=.015,oe.rotation.y=Math.sin(_e*.35)*.45,De.rotation.y+=.012,fe.position.x=Math.sin(_e*1.4)*4.8,O.render(ne,ae)};we();const qe=()=>{Y&&(ae.aspect=Y.clientWidth/Y.clientHeight,ae.updateProjectionMatrix(),O.setSize(Y.clientWidth,Y.clientHeight))};return window.addEventListener("resize",qe),()=>{window.removeEventListener("resize",qe),cancelAnimationFrame(Se),Y&&(Y.innerHTML="")}},[e]),me.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 flex flex-col",children:[me.jsx("header",{className:"sticky top-0 z-50 border-b border-slate-800 bg-slate-900/85 px-6 py-4 backdrop-blur",children:me.jsxs("div",{className:"mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4",children:[me.jsxs("div",{className:"flex items-center gap-3",children:[me.jsx(Lm,{className:"h-6 w-6 text-sky-400"}),me.jsxs("div",{children:[me.jsx("h1",{className:"text-lg font-bold tracking-tight",children:"Pulumi Homelab & Proxmox Architecture Explainer"}),me.jsx("p",{className:"text-xs text-slate-400",children:"Christian Lempa Audit (WFyJ-xyJ58M) • Dual-Plane Docker SQLite-Vec"})]})]}),me.jsxs("div",{className:"flex items-center gap-3",children:[me.jsxs("div",{className:`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium ${e?"border-emerald-700 bg-emerald-950/70 text-emerald-300":"border-amber-700 bg-amber-950/70 text-amber-300"}`,children:[me.jsx("span",{className:`h-2 w-2 rounded-full ${e?"animate-pulse bg-emerald-400":"bg-amber-400"}`}),me.jsx("span",{children:r?"Probing backend...":e?"Docker Backend Detected (SQLite-Vec)":"Static GitHub Pages Mode (LocalStorage)"})]}),me.jsxs("button",{type:"button",onClick:J,className:"flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:bg-slate-700",children:[me.jsx(SE,{className:`h-3.5 w-3.5 ${r?"animate-spin":""}`}),"Re-probe"]})]})]})}),k&&!e&&me.jsxs("div",{className:"bg-amber-900/40 border-b border-amber-700/50 px-6 py-2.5 text-xs text-amber-200 text-center flex items-center justify-center gap-2",children:[me.jsx(TE,{className:"h-4 w-4 text-amber-400 shrink-0"}),me.jsxs("span",{children:["Notice: HTTPS GitHub Pages active. Browser blocks HTTP probes. LocalStorage offline persistence active. Run ",me.jsx("code",{className:"bg-slate-900 px-1 rounded",children:"npm run dev"})," locally for Docker integration."]})]}),me.jsxs("main",{className:"mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 gap-6 p-6 lg:grid-cols-12",children:[me.jsxs("div",{className:"space-y-6 lg:col-span-8",children:[me.jsx("div",{className:"flex gap-2 border-b border-slate-800 pb-2",children:[{id:"topology",label:"3D Topology & Simulator",icon:vE},{id:"search",label:"SQLite-Vec Hybrid Search",icon:ME},{id:"audit",label:"PhD Forensic Audit",icon:EE}].map(Y=>{const ne=Y.icon;return me.jsxs("button",{type:"button",onClick:()=>p(Y.id),className:`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${d===Y.id?"border-sky-500/40 bg-sky-500/20 text-sky-300":"border-slate-800 bg-slate-900 text-slate-400 hover:text-slate-200"}`,children:[me.jsx(ne,{className:"h-4 w-4"}),Y.label]},Y.id)})}),d==="topology"&&me.jsxs(me.Fragment,{children:[me.jsxs("div",{className:"rounded-xl border border-slate-800 bg-slate-900 p-4 shadow-xl",children:[me.jsxs("div",{className:"mb-2 flex items-center justify-between px-1",children:[me.jsx("span",{className:"text-xs font-semibold uppercase tracking-wider text-slate-400",children:"Proxmox VE (KVM) • SQLite WAL + sqlite-vec • Pulumi Python SDK"}),me.jsx("span",{className:"text-xs text-slate-500",children:"WebGL 2.0"})]}),me.jsx("div",{ref:o,className:"h-[340px] w-full overflow-hidden rounded-lg border border-slate-800 bg-slate-950"})]}),me.jsxs("form",{onSubmit:Q,className:"space-y-4 rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-xl",children:[me.jsxs("h2",{className:"text-base font-semibold text-slate-100 flex items-center gap-2",children:[me.jsx(yE,{className:"h-5 w-5 text-sky-400"}),me.jsx("span",{children:"Pulumi State & Proxmox VM Reconciler"})]}),me.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[me.jsxs("div",{className:"bg-slate-950 p-3 rounded-lg border border-slate-800",children:[me.jsx("label",{className:"block text-xs text-slate-400 uppercase font-semibold mb-1",children:"Stack Name"}),me.jsxs("select",{value:v,onChange:Y=>x(Y.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1.5 text-sm text-slate-100",children:[me.jsx("option",{value:"dev",children:"dev"}),me.jsx("option",{value:"staging",children:"staging"}),me.jsx("option",{value:"prod",children:"prod"})]})]}),me.jsxs("div",{className:"bg-slate-950 p-3 rounded-lg border border-slate-800",children:[me.jsx("label",{className:"block text-xs text-slate-400 uppercase font-semibold mb-1",children:"VM ID"}),me.jsx("input",{type:"number",value:S,onChange:Y=>w(Y.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1.5 text-sm text-slate-100"})]}),me.jsxs("div",{className:"bg-slate-950 p-3 rounded-lg border border-slate-800",children:[me.jsxs("label",{className:"block text-xs text-slate-400 uppercase font-semibold mb-1",children:["RAM: ",A," MB"]}),me.jsx("input",{type:"range",min:"2048",max:"32768",step:"1024",value:A,onChange:Y=>y(Number(Y.target.value)),className:"w-full accent-sky-500 mt-1"})]})]}),me.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pt-2",children:[me.jsxs("div",{className:"flex gap-4 text-xs text-slate-300",children:[me.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[me.jsx("input",{type:"checkbox",checked:P,onChange:Y=>C(Y.target.checked),className:"rounded bg-slate-900 border-slate-700 text-sky-500"}),me.jsx("span",{children:"reboot_after_update=True"})]}),me.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[me.jsx("input",{type:"checkbox",checked:V,onChange:Y=>I(Y.target.checked),className:"rounded bg-slate-900 border-slate-700 text-sky-500"}),me.jsx("span",{children:'ignore_changes=["disks[0].speed"]'})]})]}),me.jsx("button",{type:"submit",className:"px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-xs font-semibold transition",children:"Commit Snapshot"})]})]})]}),d==="search"&&me.jsxs("div",{className:"space-y-4 rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-xl",children:[me.jsxs("h2",{className:"text-base font-semibold text-slate-100 flex items-center gap-2",children:[me.jsx(xE,{className:"h-5 w-5 text-emerald-400"}),me.jsx("span",{children:"Hybrid Vector (sqlite-vec) + Lexical (FTS5) Search"})]}),me.jsxs("form",{onSubmit:ce,className:"flex gap-2",children:[me.jsx("input",{type:"text",value:U,onChange:Y=>z(Y.target.value),placeholder:"Search URN, memory, storage pool, notes...",className:"flex-1 bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100"}),me.jsx("button",{type:"submit",className:"px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold",children:"Search"})]}),b&&me.jsxs("div",{className:"space-y-3 pt-2",children:[me.jsxs("div",{className:"text-xs text-slate-400",children:["Vector KNN Matches (",b.vector_matches?.length||0,") • FTS5 Matches (",b.lexical_fts5_matches?.length||0,")"]}),me.jsx("pre",{className:"bg-slate-950 p-4 rounded-lg border border-slate-800 text-xs font-mono text-emerald-300 overflow-x-auto",children:JSON.stringify(b,null,2)})]})]}),d==="audit"&&me.jsxs("div",{className:"space-y-4 rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-xl text-sm leading-relaxed text-slate-300",children:[me.jsx("h2",{className:"text-base font-bold text-slate-100",children:"PhD-Level Forensic Audit of Christian Lempa's Pulumi Homelab"}),me.jsxs("div",{className:"border-l-2 border-rose-500 pl-4 space-y-1",children:[me.jsx("h3",{className:"font-semibold text-rose-300",children:"1. Local File State Concurrency Hazard"}),me.jsx("p",{className:"text-xs text-slate-400",children:"Local checkpoints lack atomic distributed locking. SQLite WAL mode with sqlite-vec vector indexing provides serializable ACID state tracking."})]}),me.jsxs("div",{className:"border-l-2 border-amber-500 pl-4 space-y-1",children:[me.jsx("h3",{className:"font-semibold text-amber-300",children:"2. Secret Monad Tainting & Infisical SDK"}),me.jsx("p",{className:"text-xs text-slate-400",children:"Passing secrets through untrusted string interpolations risks leaking plaintext into state JSON. Explicit resource provider bindings ensure secure token resolution."})]}),me.jsxs("div",{className:"border-l-2 border-sky-500 pl-4 space-y-1",children:[me.jsx("h3",{className:"font-semibold text-sky-300",children:"3. Proxmox Bridge Phantom Diffs"}),me.jsx("p",{className:"text-xs text-slate-400",children:"Terraform-to-Pulumi provider bridges exhibit disk throttle drift requiring explicit ignore_changes rules and reboot flags."})]})]})]}),me.jsxs("aside",{className:"space-y-6 lg:col-span-4",children:[me.jsxs("div",{className:"rounded-xl border border-slate-800 bg-slate-900 p-5 shadow-xl space-y-3",children:[me.jsxs("h3",{className:"text-sm font-semibold text-slate-100 flex items-center gap-2",children:[me.jsx(Lm,{className:"h-4 w-4 text-sky-400"}),me.jsxs("span",{children:["State Checkpoints (",m.length,")"]})]}),me.jsx("div",{className:"space-y-2.5 max-h-[380px] overflow-y-auto pr-1",children:m.map(Y=>me.jsxs("div",{className:"bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs font-mono space-y-1",children:[me.jsxs("div",{className:"flex justify-between text-sky-400",children:[me.jsxs("span",{children:["stack: ",Y.stack_name]}),me.jsxs("span",{children:["VM ",Y.vm_id]})]}),me.jsx("div",{className:"text-slate-300 break-all text-[11px]",children:Y.urn}),me.jsxs("div",{className:"text-slate-500 text-[11px]",children:["RAM: ",Y.memory_mb,"MB • Cores: ",Y.cores]})]},Y.id))})]}),me.jsxs("div",{className:"rounded-xl border border-slate-800 bg-slate-900 p-5 shadow-xl space-y-3",children:[me.jsxs("h3",{className:"text-sm font-semibold text-slate-100 flex items-center gap-2",children:[me.jsx(_E,{className:"h-4 w-4 text-amber-400"}),me.jsx("span",{children:"Verified References"})]}),me.jsxs("ul",{className:"space-y-2 text-xs text-slate-400",children:[me.jsx("li",{children:me.jsx("a",{href:"https://www.pulumi.com/docs/concepts/state/",target:"_blank",rel:"noreferrer",className:"text-sky-400 hover:underline",children:"[1] Pulumi State Docs"})}),me.jsx("li",{children:me.jsx("a",{href:"https://registry.terraform.io/providers/bpg/proxmox/latest/docs",target:"_blank",rel:"noreferrer",className:"text-sky-400 hover:underline",children:"[2] Proxmox Provider Schema"})}),me.jsx("li",{children:me.jsx("a",{href:"https://github.com/asg017/sqlite-vec",target:"_blank",rel:"noreferrer",className:"text-sky-400 hover:underline",children:"[3] sqlite-vec Extension"})}),me.jsxs("li",{className:"text-slate-400",children:["[4] Kleppmann, M. (2017). ",me.jsx("em",{children:"Designing Data-Intensive Applications"}),". ISBN 978-1449373320."]})]})]})]})]})]})}iv.createRoot(document.getElementById("root")).render(me.jsx(K_.StrictMode,{children:me.jsx(AE,{})}));
