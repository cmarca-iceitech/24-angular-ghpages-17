import{Wa as a,Z as o,ka as r,wa as c}from"./chunk-AV3BSREU.js";var v=(()=>{let e=class e{constructor(i){this.element=i}enterMouse(){speechSynthesis.speak(new SpeechSynthesisUtterance(this.element.nativeElement.textContent))}leaveMouse(){speechSynthesis.cancel()}};e.\u0275fac=function(n){return new(n||e)(c(r))},e.\u0275dir=o({type:e,selectors:[["","appTexttovoice",""]],hostBindings:function(n,s){n&1&&a("mouseenter",function(){return s.enterMouse()})("mouseleave",function(){return s.leaveMouse()})},standalone:!0});let t=e;return t})();export{v as TexttovoiceDirective};