function t(e){e.magic("useHover",(s,{interceptor:u})=>u((n,a,o,f,i)=>{let r=n;return o(!1),r.addEventListener("mouseover",()=>{o(!0)}),r.addEventListener("mouseout",()=>{o(!1)}),a()}))}function m(e){e.plugin(t)}export{m as default,t as useHover};
//# sourceMappingURL=alpine-hooks.js.map
