(this["webpackJsonpguilogar.github.io"]=this["webpackJsonpguilogar.github.io"]||[]).push([[55],{136:function(t,e,n){"use strict";n.r(e),n.d(e,"startTapClick",(function(){return o}));var i=n(12),o=function(t){var e,n,o,f,v=10*-l,p=0,h=t.getBoolean("animated",!0)&&t.getBoolean("rippleEffect",!0),L=new WeakMap,m=function(t){v=Object(i.o)(t),E(t)},b=function(){clearTimeout(f),f=void 0,n&&(O(!1),n=void 0)},g=function(t){n||void 0!==e&&null!==e.parentElement||(e=void 0,w(a(t),t))},E=function(t){w(void 0,t)},w=function(t,e){if(!t||t!==n){clearTimeout(f),f=void 0;var o=Object(i.p)(e),a=o.x,c=o.y;if(n){if(L.has(n))throw new Error("internal error");n.classList.contains(s)||T(n,a,c),O(!0)}if(t){var d=L.get(t);d&&(clearTimeout(d),L.delete(t));var l=r(t)?0:u;t.classList.remove(s),f=setTimeout((function(){T(t,a,c),f=void 0}),l)}n=t}},T=function(t,e,n){p=Date.now(),t.classList.add(s);var i=h&&c(t);i&&i.addRipple&&(j(),o=i.addRipple(e,n))},j=function(){void 0!==o&&(o.then((function(t){return t()})),o=void 0)},O=function(t){j();var e=n;if(e){var i=d-Date.now()+p;if(t&&i>0&&!r(e)){var o=setTimeout((function(){e.classList.remove(s),L.delete(e)}),d);L.set(e,o)}else e.classList.remove(s)}},S=document;S.addEventListener("ionScrollStart",(function(t){e=t.target,b()})),S.addEventListener("ionScrollEnd",(function(){e=void 0})),S.addEventListener("ionGestureCaptured",b),S.addEventListener("touchstart",(function(t){v=Object(i.o)(t),g(t)}),!0),S.addEventListener("touchcancel",m,!0),S.addEventListener("touchend",m,!0),S.addEventListener("mousedown",(function(t){var e=Object(i.o)(t)-l;v<e&&g(t)}),!0),S.addEventListener("mouseup",(function(t){var e=Object(i.o)(t)-l;v<e&&E(t)}),!0)},a=function(t){if(!t.composedPath)return t.target.closest(".ion-activatable");for(var e=t.composedPath(),n=0;n<e.length-2;n++){var i=e[n];if(i.classList&&i.classList.contains("ion-activatable"))return i}},r=function(t){return t.classList.contains("ion-activatable-instant")},c=function(t){if(t.shadowRoot){var e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")},s="ion-activated",u=200,d=200,l=2500}}]);
//# sourceMappingURL=55.a511c6ff.chunk.js.map