!function(){var t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),body:document.querySelector("body")},e=null;function n(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}t.body.addEventListener("click",n),t.startBtn.addEventListener("click",(function(o){o.preventDefault(),o.currentTarget=n(),e=setInterval((function(){n()}),1e3),t.startBtn.disabled=!0,t.stopBtn.disabled=!1})),t.stopBtn.addEventListener("click",(function(){clearInterval(e),t.startBtn.disabled=!1,t.stopBtn.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.25d3a41b.js.map