function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,v=function(){return c.Date.now()};function y(e,t,n){var o,r,i,a,u,f,l=0,c=!1,s=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,l=t,a=e.apply(i,n)}function S(e){return l=e,u=setTimeout(j,t),c?b(e):a}function w(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=i}function j(){var e=v();if(w(e))return h(e);u=setTimeout(j,function(e){var n=t-(e-f);return s?d(n,i-(e-l)):n}(e))}function h(e){return u=void 0,y&&o?b(e):(o=r=void 0,a)}function q(){var e=v(),n=w(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return S(f);if(s)return u=setTimeout(j,t),b(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=p(t)||0,g(n)&&(c=!!n.leading,i=(s="maxWait"in n)?m(p(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),q.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=f=r=u=void 0},q.flush=function(){return void 0===u?a:h(v())},q}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),y(e,t,{leading:o,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form");b.addEventListener("input",e(t)((function(){const e={email:b.querySelector('[name="email"]').value,message:b.querySelector('[name="message"]').value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),window.addEventListener("load",(function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(b.querySelector('[name="email"]').value=e.email||"",b.querySelector('[name="message"]').value=e.message||"")})),b.addEventListener("submit",(function(e){e.preventDefault();const t=b.querySelector('[name="email"]').value,n=b.querySelector('[name="message"]').value;console.log("Form data submitted:",{email:t,message:n}),localStorage.removeItem("feedback-form-state"),b.querySelector('[name="email"]').value="",b.querySelector('[name="message"]').value=""}));
//# sourceMappingURL=03-feedback.5863958b.js.map