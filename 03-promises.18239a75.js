function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,o){n[e]=o},o.parcelRequired7c6=r);var u=r("eWCmQ");const i={formClass:document.querySelector(".form"),delayNumber:document.querySelector('[name="delay"]'),stepNumber:document.querySelector('[name="step"]'),amountNumber:document.querySelector('[name="amount"]')};function l(e,o){return new Promise(((t,n)=>{const r=Math.random()>.3;setTimeout((()=>{r&&t({position:e,delay:o}),n({position:e,delay:o})}),o)}))}i.formClass.addEventListener("submit",(function(o){o.preventDefault();const t=Number(i.delayNumber.value),n=Number(i.stepNumber.value);for(let o=0;o<i.amountNumber.value;o+=1)l(o+1,t+n*o).then((({position:o,delay:t})=>{e(u).Notify.success(`✅ Fulfilled promise ${o} in ${t}ms`)})).catch((({position:o,delay:t})=>{e(u).Notify.failure(`❌ Rejected promise ${o} in ${t}ms`)}))}));
//# sourceMappingURL=03-promises.18239a75.js.map
