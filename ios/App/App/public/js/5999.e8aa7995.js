(self["webpackChunkionic_issues"]=self["webpackChunkionic_issues"]||[]).push([[5999],{5999:function(){var t=function(){return(t=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var s in e=arguments[r])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},e=function(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""};function r(t){return o(s(t=n(t)),t)}function n(t){return t.replace(l.comments,"").replace(l.port,"")}function s(t){var r=new e;r.start=0,r.end=t.length;for(var n=r,s=0,o=t.length;s<o;s++)if(t[s]===u){n.rules||(n.rules=[]);var i=n,a=i.rules[i.rules.length-1]||null;(n=new e).start=s+1,n.parent=i,n.previous=a,i.rules.push(n)}else t[s]===c&&(n.end=s+1,n=n.parent||r);return r}function o(t,e){var r=e.substring(t.start,t.end-1);if(t.parsedCssText=t.cssText=r.trim(),t.parent){var n=t.previous?t.previous.end:t.parent.start;r=(r=(r=i(r=e.substring(n,t.start-1))).replace(l.multipleSpaces," ")).substring(r.lastIndexOf(";")+1);var s=t.parsedSelector=t.selector=r.trim();t.atRule=0===s.indexOf(h),t.atRule?0===s.indexOf(f)?t.type=a.MEDIA_RULE:s.match(l.keyframesRule)&&(t.type=a.KEYFRAMES_RULE,t.keyframesName=t.selector.split(l.multipleSpaces).pop()):0===s.indexOf(p)?t.type=a.MIXIN_RULE:t.type=a.STYLE_RULE}var u=t.rules;if(u)for(var c=0,v=u.length,m=void 0;c<v&&(m=u[c]);c++)o(m,e);return t}function i(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){for(var t=arguments[1],e=6-t.length;e--;)t="0"+t;return"\\"+t}))}var a={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},u="{",c="}",l={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},p="--",f="@media",h="@";function v(t,e,r){t.lastIndex=0;var n=e.substring(r).match(t);if(n){var s=r+n.index;return{start:s,end:s+n[0].length}}return null}var m=/\bvar\(/,d=/\B--[\w-]+\s*:/,g=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,y=/^[\t ]+\n/gm;function S(t,e,r){return t[e]?t[e]:r?x(r,t):""}function b(t,e){for(var r=0,n=e;n<t.length;n++){var s=t[n];if("("===s)r++;else if(")"===s&&--r<=0)return n+1}return n}function E(t,e){var r=v(m,t,e);if(!r)return null;var n=b(t,r.start),s=t.substring(r.end,n-1).split(","),o=s[0],i=s.slice(1);return{start:r.start,end:n,propName:o.trim(),fallback:i.length>0?i.join(",").trim():void 0}}function M(t,e,r){var n=E(t,r);if(!n)return e.push(t.substring(r,t.length)),t.length;var s=n.propName,o=null!=n.fallback?C(n.fallback):void 0;return e.push(t.substring(r,n.start),(function(t){return S(t,s,o)})),n.end}function x(t,e){for(var r="",n=0;n<t.length;n++){var s=t[n];r+="string"==typeof s?s:s(e)}return r}function w(t,e){for(var r=!1,n=!1,s=e;s<t.length;s++){var o=t[s];if(r)n&&'"'===o&&(r=!1),n||"'"!==o||(r=!1);else if('"'===o)r=!0,n=!0;else if("'"===o)r=!0,n=!1;else{if(";"===o)return s+1;if("}"===o)return s}}return s}function k(t){for(var e="",r=0;;){var n=v(d,t,r),s=n?n.start:t.length;if(e+=t.substring(r,s),!n)break;r=w(t,s)}return e}function C(t){var e=0;t=k(t=t.replace(g,"")).replace(y,"");for(var r=[];e<t.length;)e=M(t,r,e);return r}function I(t){var e={};t.forEach((function(t){t.declarations.forEach((function(t){e[t.prop]=t.value}))}));for(var r={},n=Object.entries(e),s=function(t){var e=!1;if(n.forEach((function(t){var n=t[0],s=x(t[1],r);s!==r[n]&&(r[n]=s,e=!0)})),!e)return"break"},o=0;o<10;o++)if("break"===s())break;return r}function R(t,e){if(void 0===e&&(e=0),!t.rules)return[];var r=[];return t.rules.filter((function(t){return t.type===a.STYLE_RULE})).forEach((function(t){var n=O(t.cssText);n.length>0&&t.parsedSelector.split(",").forEach((function(t){t=t.trim(),r.push({selector:t,declarations:n,specificity:_(),nu:e})})),e++})),r}function _(t){return 1}var A="!important",L=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gm;function O(t){for(var e,r=[];e=L.exec(t.trim());){var n=T(e[2]),s=n.value,o=n.important;r.push({prop:e[1].trim(),value:C(s),important:o})}return r}function T(t){var e=(t=t.replace(/\s+/gim," ").trim()).endsWith(A);return e&&(t=t.substr(0,t.length-A.length).trim()),{value:t,important:e}}function U(t,e,r){var n=[],s=N(e,t);return r.forEach((function(t){return n.push(t)})),s.forEach((function(t){return n.push(t)})),$(P(n).filter((function(e){return G(t,e.selector)})))}function N(t,e){for(var r=[];e;){var n=t.get(e);n&&r.push(n),e=e.parentElement}return r}function P(t){var e=[];return t.forEach((function(t){e.push.apply(e,t.selectors)})),e}function $(t){return t.sort((function(t,e){return t.specificity===e.specificity?t.nu-e.nu:t.specificity-e.specificity})),t}function G(t,e){return":root"===e||"html"===e||t.matches(e)}function H(t){var e=r(t),n=C(t);return{original:t,template:n,selectors:R(e),usesCssVars:n.length>1}}function V(t,e){if(t.some((function(t){return t.styleEl===e})))return!1;var r=H(e.textContent);return r.styleEl=e,t.push(r),!0}function Y(t){var e=I(P(t));t.forEach((function(t){t.usesCssVars&&(t.styleEl.textContent=x(t.template,e))}))}function j(e,r){var n=e.template.map((function(t){return"string"==typeof t?q(t,e.scopeId,r):t})),s=e.selectors.map((function(n){return t(t({},n),{selector:q(n.selector,e.scopeId,r)})}));return t(t({},e),{template:n,selectors:s,scopeId:r})}function q(t,e,r){return F(t,"\\."+e,"."+r)}function F(t,e,r){return t.replace(new RegExp(e,"g"),r)}function B(t,e){return K(t,e),D(t,e).then((function(){Y(e)}))}function W(t,e){"undefined"!=typeof MutationObserver&&new MutationObserver((function(){K(t,e)&&Y(e)})).observe(document.head,{childList:!0})}function D(t,e){for(var r=[],n=t.querySelectorAll('link[rel="stylesheet"][href]:not([data-no-shim])'),s=0;s<n.length;s++)r.push(X(t,e,n[s]));return Promise.all(r)}function K(t,e){return Array.from(t.querySelectorAll("style:not([data-styles]):not([data-no-shim])")).map((function(t){return V(e,t)})).some(Boolean)}function X(t,e,r){var n=r.href;return fetch(n).then((function(t){return t.text()})).then((function(s){if(Z(s)&&r.parentNode){Q(s)&&(s=tt(s,n));var o=t.createElement("style");o.setAttribute("data-styles",""),o.textContent=s,V(e,o),r.parentNode.insertBefore(o,r),r.remove()}})).catch((function(t){console.error(t)}))}var z=/[\s;{]--[-a-zA-Z0-9]+\s*:/m;function Z(t){return t.indexOf("var(")>-1||z.test(t)}var J=/url[\s]*\([\s]*['"]?(?!(?:https?|data)\:|\/)([^\'\"\)]*)[\s]*['"]?\)[\s]*/gim;function Q(t){return J.lastIndex=0,J.test(t)}function tt(t,e){var r=e.replace(/[^/]*$/,"");return t.replace(J,(function(t,e){var n=r+e;return t.replace(e,n)}))}var et=function(){function t(t,e){this.win=t,this.doc=e,this.count=0,this.hostStyleMap=new WeakMap,this.hostScopeMap=new WeakMap,this.globalScopes=[],this.scopesMap=new Map,this.didInit=!1}return t.prototype.i=function(){var t=this;return this.didInit||!this.win.requestAnimationFrame?Promise.resolve():(this.didInit=!0,new Promise((function(e){t.win.requestAnimationFrame((function(){W(t.doc,t.globalScopes),B(t.doc,t.globalScopes).then((function(){return e()}))}))})))},t.prototype.addLink=function(t){var e=this;return X(this.doc,this.globalScopes,t).then((function(){e.updateGlobal()}))},t.prototype.addGlobalStyle=function(t){V(this.globalScopes,t)&&this.updateGlobal()},t.prototype.createHostStyle=function(t,e,r,n){if(this.hostScopeMap.has(t))throw new Error("host style already created");var s=this.registerHostTemplate(r,e,n),o=this.doc.createElement("style");return o.setAttribute("data-no-shim",""),s.usesCssVars?n?(o["s-sc"]=e=s.scopeId+"-"+this.count,o.textContent="/*needs update*/",this.hostStyleMap.set(t,o),this.hostScopeMap.set(t,j(s,e)),this.count++):(s.styleEl=o,s.usesCssVars||(o.textContent=x(s.template,{})),this.globalScopes.push(s),this.updateGlobal(),this.hostScopeMap.set(t,s)):o.textContent=r,o},t.prototype.removeHost=function(t){var e=this.hostStyleMap.get(t);e&&e.remove(),this.hostStyleMap.delete(t),this.hostScopeMap.delete(t)},t.prototype.updateHost=function(t){var e=this.hostScopeMap.get(t);if(e&&e.usesCssVars&&e.isScoped){var r=this.hostStyleMap.get(t);if(r){var n=I(U(t,this.hostScopeMap,this.globalScopes));r.textContent=x(e.template,n)}}},t.prototype.updateGlobal=function(){Y(this.globalScopes)},t.prototype.registerHostTemplate=function(t,e,r){var n=this.scopesMap.get(e);return n||((n=H(t)).scopeId=e,n.isScoped=r,this.scopesMap.set(e,n)),n},t}();!function(t){!t||t.__cssshim||t.CSS&&t.CSS.supports&&t.CSS.supports("color","var(--c)")||(t.__cssshim=new et(t,t.document))}("undefined"!=typeof window&&window)}}]);
//# sourceMappingURL=5999.e8aa7995.js.map