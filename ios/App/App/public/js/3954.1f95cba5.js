"use strict";(self["webpackChunkionic_issues"]=self["webpackChunkionic_issues"]||[]).push([[3954],{3954:function(n,t,e){e.r(t),e.d(t,{startFocusVisible:function(){return c}});var s="ion-focused",o="ion-focusable",i=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp"],c=function(){var n=[],t=!0,e=document,c=function(t){n.forEach((function(n){return n.classList.remove(s)})),t.forEach((function(n){return n.classList.add(s)})),n=t},r=function(){t=!1,c([])};e.addEventListener("keydown",(function(n){t=i.includes(n.key),t||c([])})),e.addEventListener("focusin",(function(n){if(t&&n.composedPath){var e=n.composedPath().filter((function(n){return!!n.classList&&n.classList.contains(o)}));c(e)}})),e.addEventListener("focusout",(function(){e.activeElement===e.body&&c([])})),e.addEventListener("touchstart",r),e.addEventListener("mousedown",r)}}}]);
//# sourceMappingURL=3954.1f95cba5.js.map