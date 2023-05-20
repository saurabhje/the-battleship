(()=>{"use strict";const t=function(t,e){t.innerHTML="";for(let n=0;n<100;n++){const l=document.createElement("div");l.dataset.index=n,"player"==e?(l.classList.add("cell"),l.classList.add(`h${n}`)):"computer"==e&&(l.classList.add("enemycell"),l.classList.add(`e${n}`)),t.appendChild(l)}},e=function(){let t=Array(100).fill(null),e=[],n=[];return{getShips:function(){return e.length},getBoard:function(){return t},placeShip:function(n,l){let r=n.length,o=[];for(let t=0;t<r;t++)o.push(l+t);o.forEach((e=>{t[e]=n})),e.push(n)},receiveAttack:function(e){return null===t[e]?(n.push(e),!1):(t[e].hit(),!0)},allShipsSunk:function(){return e.every((t=>t.isSunk()))},missedAttacks:n}},n=function(t){let e=0;return{length:t,hit:()=>(e++,e),isSunk:()=>e===t,get hits(){return e}}};function l(t,e){if("player"===t){const t=[5,4,3,2];let l=t.length;const o=document.querySelectorAll(".cell");let u=!0,c=0;const i=document.getElementById("turn");return u&&o.forEach((o=>{o.addEventListener("click",(o=>{const a=o.target,s=parseInt(a.dataset.index),d=function(t,e,n){const l=t.getBoard();for(let t=0;t<n;t++)if(null!==l[e+t])return!1;return!0}(e,s,t[c]),f=r(s,t[c]);if(i.innerText=0==c?"Place your Submarine":1==c?"Place your Attackerr":2==c?"Place your Ship":"Play",d&&f){const r=n(t[c]);e.placeShip(r,s);for(let e=0;e<t[c];e++)document.querySelector(`.h${s+e}`).style.backgroundColor="#292828";c++,c===l&&(u=!1)}}))})),!0}if("computer"===t){const t=[5,4,3,2];let l=t.length,o=0;for(;o<l;){let l=n(t[o]),u=Math.floor(100*Math.random());r(u,t[o])&&(e.placeShip(l,u),o++)}}}function r(t,e){let n=t+e-1,l=Math.floor(t/10);return!(Math.floor(n/10)>l)}!function(n,r){let o,u;u=e(),o=e();const c=[],i=document.getElementById("playerboard"),a=document.getElementById("compboard");t(i,"player"),t(a,"computer"),l("computer",o);let s=u.getShips();console.log(o.getShips());let d=new Set,f=n,h=!1,p=null,m=null;console.log(s);let g,y=!1;function S(t){if(h)return;const e=t.target.dataset.index,n=o.receiveAttack(e);t.target.style.backgroundColor=!0===n?"#f70202":"#02d91b"}function k(){null!==p||null!==m?null!==p?(g=p,p-=1):null!==m&&(g=m,m+=1):g=v(),function(t){if(h)return;const e=u.receiveAttack(t),n=i.querySelector(`[data-index='${t}']`);!0===e?(n.style.backgroundColor="#f70202",null===p&&(p=t-1),d.has(p)&&(p=null),null===m&&(m=t+1),d.has(m)&&(m=null)):(n.style.backgroundColor="#02d91b",null!==p?p=null:m=null),d.add(t),b(),f=E()}(g)}function v(){let t=Math.floor(100*Math.random());for(;d.has(t);)t=Math.floor(100*Math.random());return d.has(t)&&v(),t}function E(){return f=f===n?r:n}function b(){return u.allShipsSunk()?(h=!0,document.getElementById("winner").innerText="Computer Win!",void a.removeEventListener("click",S)):o.allShipsSunk()?(h=!0,void(document.getElementById("winner").innerText="You Win!")):void 0}y=l("player",u),a.addEventListener("click",(t=>{if(y){const e=function(t){const e=t.target.dataset.index;return!c.includes(e)&&(c.push(e),!0)}(t);if(e){if(f!==n||h)return;S(t),b(),f=E(),setTimeout(k,100)}}}))}({name:"Player"},{name:"Computer"})})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxTQUFTb0MsZUFBZSxVQUFVVSxVQUFZLGtCQUZoRCxDQUtGLENBckhBMEIsRUFBZTVDLEVBQVcsU0FBVUMsR0FDcENnQyxFQUFheEIsaUJBQWlCLFNBQVVnRCxJQUNwQyxHQUFHYixFQUFXLENBQ1osTUFBTWMsRUFlWixTQUFxQkQsR0FDbkIsTUFBTVgsRUFBWVcsRUFBRTlDLE9BQU9yQyxRQUFRQyxNQUNuQyxPQUFJd0QsRUFBYTRCLFNBQVNiLEtBRzFCZixFQUFheEMsS0FBS3VELElBQ1gsRUFDVCxDQXRCMkJjLENBQVlILEdBQ2pDLEdBQUlDLEVBQWMsQ0FDaEIsR0FBSW5CLElBQWtCWCxHQUFXWSxFQUMvQixPQUVGSyxFQUFZWSxHQUNaTCxJQUNBYixFQUFnQmMsSUFDaEJRLFdBQVdiLEVBQWMsSUFDM0IsQ0FDRixJQXlHTixDQzFJQSxDQUFTLENBQUNjLEtBQU0sVUFBVyxDQUFDQSxLQUFNLFkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGUtYmF0dGxlc2hpcC8uL3NjcmlwdC9ET00uanMiLCJ3ZWJwYWNrOi8vdGhlLWJhdHRsZXNoaXAvLi9zY3JpcHQvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL3RoZS1iYXR0bGVzaGlwLy4vc2NyaXB0L3NoaXAuanMiLCJ3ZWJwYWNrOi8vdGhlLWJhdHRsZXNoaXAvLi9zY3JpcHQvcGxhY2VzaGlwcy5qcyIsIndlYnBhY2s6Ly90aGUtYmF0dGxlc2hpcC8uL3NjcmlwdC9nYW1lbG9vcC5qcyIsIndlYnBhY2s6Ly90aGUtYmF0dGxlc2hpcC8uL3NjcmlwdC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkb00gPSAoKCk9PntcclxuICAgIGZ1bmN0aW9uIHJlbmRlckJvYXJkKGJvYXJkRWxlbWVudCwgaG9sZGVyKSB7XHJcbiAgICAgICAgYm9hcmRFbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjZWxsLmRhdGFzZXQuaW5kZXggPSBpO1xyXG4gICAgICAgICAgICBpZihob2xkZXIgPT0gXCJwbGF5ZXJcIil7XHJcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcclxuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChgaCR7aX1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGhvbGRlciA9PSBcImNvbXB1dGVyXCIpe1xyXG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdlbmVteWNlbGwnKTtcclxuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChgZSR7aX1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBib2FyZEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2VsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlbmRlckJvYXJkXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZG9NIiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xyXG5mdW5jdGlvbiBHYW1lYm9hcmQoKSB7XHJcbiAgbGV0IGJvYXJkID0gQXJyYXkoMTAwKS5maWxsKG51bGwpO1xyXG4gIGxldCBzaGlwcyA9IFtdO1xyXG4gIGxldCBtaXNzZWRBdHRhY2tzID0gW107XHJcblxyXG5cclxuICBmdW5jdGlvbiBwbGFjZVNoaXAoc2hpcCxpbmRleCkge1xyXG4gICAgbGV0IHNoaXBsZW5ndGggPSBzaGlwLmxlbmd0aDtcclxuICAgIGxldCBjb29yZGluYXRlcyA9IFtdO1xyXG4gICAgZm9yKGxldCBpPTA7aTxzaGlwbGVuZ3RoO2krKyl7XHJcbiAgICAgIGNvb3JkaW5hdGVzLnB1c2goaW5kZXgraSk7XHJcbiAgICB9XHJcbiAgICBjb29yZGluYXRlcy5mb3JFYWNoKGNvb3JkID0+IHtcclxuICAgICAgYm9hcmRbY29vcmRdID0gc2hpcDtcclxuICAgIH0pO1xyXG4gICAgc2hpcHMucHVzaChzaGlwKTtcclxuXHJcbiAgfVxyXG4gIFxyXG4gIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpIHtcclxuICAgIGlmIChib2FyZFtjb29yZGluYXRlc10gPT09IG51bGwpIHtcclxuICAgICAgbWlzc2VkQXR0YWNrcy5wdXNoKGNvb3JkaW5hdGVzKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaGl0U2hpcCA9IGJvYXJkW2Nvb3JkaW5hdGVzXTtcclxuICAgIGhpdFNoaXAuaGl0KCk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFsbFNoaXBzU3VuaygpIHtcclxuICAgIHJldHVybiBzaGlwcy5ldmVyeShzaGlwID0+IHNoaXAuaXNTdW5rKCkpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBnZXRCb2FyZCgpe1xyXG4gICAgcmV0dXJuIGJvYXJkO1xyXG4gIH1cclxuICBmdW5jdGlvbiBnZXRTaGlwcygpe1xyXG4gICAgcmV0dXJuIHNoaXBzLmxlbmd0aDtcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIGdldFNoaXBzLFxyXG4gICAgZ2V0Qm9hcmQsXHJcbiAgICBwbGFjZVNoaXAsXHJcbiAgICByZWNlaXZlQXR0YWNrLFxyXG4gICAgYWxsU2hpcHNTdW5rLFxyXG4gICAgbWlzc2VkQXR0YWNrcyxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7IiwiZnVuY3Rpb24gU2hpcChsZW5ndGgpIHtcclxuICBsZXQgaGl0cyA9IDA7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBsZW5ndGg6IGxlbmd0aCxcclxuICAgIGhpdCgpIHtcclxuICAgICAgaGl0cysrXHJcbiAgICAgIHJldHVybiBoaXRzO1xyXG4gICAgfSxcclxuICAgIGlzU3VuaygpIHtcclxuICAgICAgcmV0dXJuIGhpdHMgPT09IGxlbmd0aDtcclxuICAgIH0sXHJcbiAgICBnZXQgaGl0cygpe1xyXG4gICAgICByZXR1cm4gaGl0cztcclxuICAgIH1cclxuICB9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNoaXA7IiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xyXG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xyXG5cclxuZnVuY3Rpb24gcGxhY2VzaGlwcyhob2xkZXIsIHBsYXllcmJvYXJkKSB7XHJcbiAgaWYgKGhvbGRlciA9PT0gXCJwbGF5ZXJcIikge1xyXG4gICAgY29uc3Qgc2hpcHNMZW5ndGggPSBbNSwgNCwgMywgMl07XHJcbiAgICBsZXQgc2hpcHNsZW4gPSBzaGlwc0xlbmd0aC5sZW5ndGg7XHJcbiAgICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyk7XHJcbiAgICBsZXQgZ2FtZSA9IHRydWU7XHJcbiAgICBsZXQgaSA9IDA7XHJcbiAgICBjb25zdCB0dXJuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R1cm4nKTtcclxuICAgIGlmIChnYW1lKSB7XHJcbiAgICAgIGNlbGxzLmZvckVhY2goY2VsbCA9PiB7XHJcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgY2VsbCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoY2VsbC5kYXRhc2V0LmluZGV4KTtcclxuICAgICAgICAgIGNvbnN0IGNhblBsYWNlU2hpcCA9IGNoZWNrU2hpcFBsYWNlbWVudChwbGF5ZXJib2FyZCwgaW5kZXgsIHNoaXBzTGVuZ3RoW2ldKTtcclxuICAgICAgICAgIGNvbnN0IG5vT3ZlcmxhcCA9IGNoZWNrT3ZlcmxhcChpbmRleCwgc2hpcHNMZW5ndGhbaV0pO1xyXG4gICAgICAgICAgaWYoaSA9PTApe1xyXG4gICAgICAgICAgICB0dXJuLmlubmVyVGV4dCA9IFwiUGxhY2UgeW91ciBTdWJtYXJpbmVcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgaWYoaT09MSl7XHJcbiAgICAgICAgICAgIHR1cm4uaW5uZXJUZXh0ID0gXCJQbGFjZSB5b3VyIEF0dGFja2VyclwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSBpZihpPT0yKXtcclxuICAgICAgICAgICAgdHVybi5pbm5lclRleHQgPSBcIlBsYWNlIHlvdXIgU2hpcFwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdHVybi5pbm5lclRleHQgPSBcIlBsYXlcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChjYW5QbGFjZVNoaXAgJiYgbm9PdmVybGFwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBTaGlwKHNoaXBzTGVuZ3RoW2ldKTtcclxuICAgICAgICAgICAgcGxheWVyYm9hcmQucGxhY2VTaGlwKHNoaXAsIGluZGV4KTsgIFxyXG4gICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHNoaXBzTGVuZ3RoW2ldOyBrKyspIHtcclxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuaCR7aW5kZXggKyBrfWApLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzI5MjgyOFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgaWYgKGkgPT09IHNoaXBzbGVuKSB7XHJcbiAgICAgICAgICAgICAgZ2FtZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBlbHNlIGlmIChob2xkZXIgPT09IFwiY29tcHV0ZXJcIikge1xyXG4gICAgY29uc3Qgc2hpcHNMZW5ndGggPSBbNSwgNCwgMywgMl07XHJcbiAgICBsZXQgc2hpcHNsZW4gPSBzaGlwc0xlbmd0aC5sZW5ndGg7XHJcbiAgICBsZXQgaSA9IDA7XHJcbiAgICBcclxuICAgIHdoaWxlIChpIDwgc2hpcHNsZW4pIHtcclxuICAgICAgbGV0IHNoaXAgPSBTaGlwKHNoaXBzTGVuZ3RoW2ldKTtcclxuICAgICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcclxuICAgICAgY29uc3Qgbm9PdmVybGFwID0gY2hlY2tPdmVybGFwKGluZGV4LCBzaGlwc0xlbmd0aFtpXSk7XHJcblxyXG4gICAgICBpZiAoIW5vT3ZlcmxhcCkgeyAvLyBDaGVjayBpZiB0aGUgc2hpcCBpcyBvdmVybGFwcGluZ1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9IFxyXG4gICAgICBwbGF5ZXJib2FyZC5wbGFjZVNoaXAoc2hpcCwgaW5kZXgpO1xyXG4gICAgICBpKys7IFxyXG4gICAgfSAgICAgXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja092ZXJsYXAoc3RhcnRJbmRleCwgbGVuZ3RoKSB7XHJcbiAgbGV0IGxhc3RDZWxsSW5kZXggPSBzdGFydEluZGV4ICsgbGVuZ3RoIC0gMTtcclxuICBsZXQgaW5kZXhyb3cgPSBNYXRoLmZsb29yKHN0YXJ0SW5kZXggLyAxMCk7XHJcbiAgbGV0IGxhc3Ryb3cgPSBNYXRoLmZsb29yKGxhc3RDZWxsSW5kZXggLyAxMCk7XHJcbiAgXHJcbiAgaWYgKGxhc3Ryb3cgPiBpbmRleHJvdykge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBcclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tTaGlwUGxhY2VtZW50KHBsYXllcmJvYXJkLCBzdGFydEluZGV4LCBsZW5ndGgpIHtcclxuICBjb25zdCBib2FyZCA9IHBsYXllcmJvYXJkLmdldEJvYXJkKCk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgaW5kaWNlcyA9IHN0YXJ0SW5kZXggKyBpO1xyXG5cclxuICAgIGlmIChib2FyZFtpbmRpY2VzXSAhPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgeyBwbGFjZXNoaXBzIH07XHJcbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XHJcbmltcG9ydCBkb00gZnJvbSBcIi4vRE9NXCI7XHJcbmltcG9ydCB7IHBsYWNlc2hpcHMgfSBmcm9tIFwiLi9wbGFjZXNoaXBzXCI7XHJcblxyXG5mdW5jdGlvbiBnYW1lTG9vcChwbGF5ZXIxLCBwbGF5ZXIyKSB7XHJcbiAgbGV0IGNvbXBib2FyZCwgcGxheWVyYm9hcmQ7XHJcbiAgcGxheWVyYm9hcmQgPSBHYW1lYm9hcmQoKTtcclxuICBjb21wYm9hcmQgPSBHYW1lYm9hcmQoKTtcclxuICBjb25zdCBjbGlja2VkQ2VsbHMgPSBbXTtcclxuICBjb25zdCBwbGF5ZXIxYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllcmJvYXJkXCIpO1xyXG4gIGNvbnN0IHBsYXllcjJib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcGJvYXJkXCIpO1xyXG4gIGRvTS5yZW5kZXJCb2FyZChwbGF5ZXIxYm9hcmQsIFwicGxheWVyXCIpO1xyXG4gIGRvTS5yZW5kZXJCb2FyZChwbGF5ZXIyYm9hcmQsIFwiY29tcHV0ZXJcIik7XHJcblxyXG5cclxuICBwbGFjZXNoaXBzKFwiY29tcHV0ZXJcIiwgY29tcGJvYXJkKTtcclxuXHJcbiAgbGV0IHBsYXllclNoaXBzID0gcGxheWVyYm9hcmQuZ2V0U2hpcHMoKTtcclxuICBjb25zb2xlLmxvZyhjb21wYm9hcmQuZ2V0U2hpcHMoKSk7XHJcbiAgbGV0IHByZXZpb3VzQXR0YWNrID0gbmV3IFNldCgpOyAvL3RvIHByZXZlbnQgdGhlIGNvbXAgZnJvbSBhdHRhY2tpbmcgdGhlIHNhbWUgaW5kZXggdHdpY2VcclxuICBsZXQgY3VycmVudFBsYXllciA9IHBsYXllcjE7XHJcbiAgbGV0IGdhbWVPdmVyID0gZmFsc2U7XHJcbiAgbGV0IGxlZnQgPSBudWxsO1xyXG4gIGxldCByaWdodCA9IG51bGw7XHJcblxyXG4gIGNvbnNvbGUubG9nKHBsYXllclNoaXBzKTtcclxuICBsZXQgc2hpcFBsYWNlZCA9IGZhbHNlO1xyXG4gIHNoaXBQbGFjZWQgPSAgIHBsYWNlc2hpcHMoXCJwbGF5ZXJcIiwgcGxheWVyYm9hcmQpO1xyXG4gIHBsYXllcjJib2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgaWYoc2hpcFBsYWNlZCl7XHJcbiAgICAgICAgY29uc3QgaXN2YWxpZGNsaWNrID0gY2hlY2tEb3VibGUoZSk7XHJcbiAgICAgICAgaWYgKGlzdmFsaWRjbGljaykge1xyXG4gICAgICAgICAgaWYgKGN1cnJlbnRQbGF5ZXIgIT09IHBsYXllcjEgfHwgZ2FtZU92ZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaGFuZGxlQ2xpY2soZSk7XHJcbiAgICAgICAgICBjaGVja2dhbWVPdmVyKCk7XHJcbiAgICAgICAgICBjdXJyZW50UGxheWVyID0gc3dpdGNoUGxheWVyKCk7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KGNvbXB1dGVyVHVybiwgMTAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gIGZ1bmN0aW9uIGNoZWNrRG91YmxlKGUpIHtcclxuICAgIGNvbnN0IGNlbGxpbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQuaW5kZXg7XHJcbiAgICBpZiAoY2xpY2tlZENlbGxzLmluY2x1ZGVzKGNlbGxpbmRleCkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY2xpY2tlZENlbGxzLnB1c2goY2VsbGluZGV4KTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZlbnQpIHtcclxuICAgIGlmIChnYW1lT3Zlcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBjZWxsaW5kZXggPSBldmVudC50YXJnZXQuZGF0YXNldC5pbmRleDtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGNvbXBib2FyZC5yZWNlaXZlQXR0YWNrKGNlbGxpbmRleCk7XHJcbiAgICBpZiAocmVzdWx0ID09PSB0cnVlKSB7XHJcbiAgICAgIGV2ZW50LnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmNzAyMDJcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGV2ZW50LnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMwMmQ5MWJcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxldCBhdHRhY2tJbmRleDtcclxuXHJcbiAgZnVuY3Rpb24gY29tcHV0ZXJUdXJuKCkge1xyXG4gICAgaWYgKGxlZnQgIT09IG51bGwgfHwgcmlnaHQgIT09IG51bGwpIHtcclxuICAgICAgaWYgKGxlZnQgIT09IG51bGwpIHtcclxuICAgICAgICBhdHRhY2tJbmRleCA9IGxlZnQ7XHJcbiAgICAgICAgbGVmdCA9IGxlZnQgLSAxO1xyXG4gICAgICB9IGVsc2UgaWYgKHJpZ2h0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgYXR0YWNrSW5kZXggPSByaWdodDtcclxuICAgICAgICByaWdodCA9IHJpZ2h0ICsgMTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXR0YWNrSW5kZXggPSByYW5kb21BdHRhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wdXRlckFJKGF0dGFja0luZGV4KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJhbmRvbUF0dGFjaygpIHtcclxuICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcclxuICAgIHdoaWxlIChwcmV2aW91c0F0dGFjay5oYXMoeCkpIHtcclxuICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XHJcbiAgICB9XHJcbiAgICBpZiAocHJldmlvdXNBdHRhY2suaGFzKHgpKSB7XHJcbiAgICAgIHJhbmRvbUF0dGFjaygpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHg7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjb21wdXRlckFJKGkpIHtcclxuICAgIGlmIChnYW1lT3Zlcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBjb21waGl0ID0gcGxheWVyYm9hcmQucmVjZWl2ZUF0dGFjayhpKTtcclxuICAgIGNvbnN0IGNlbGwgPSBwbGF5ZXIxYm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEtaW5kZXg9JyR7aX0nXWApO1xyXG4gICAgaWYgKGNvbXBoaXQgPT09IHRydWUpIHtcclxuICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmNzAyMDJcIjtcclxuICAgICAgaWYgKGxlZnQgPT09IG51bGwpIHtcclxuICAgICAgICBsZWZ0ID0gaSAtIDE7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHByZXZpb3VzQXR0YWNrLmhhcyhsZWZ0KSkge1xyXG4gICAgICAgIGxlZnQgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChyaWdodCA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJpZ2h0ID0gaSArIDE7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHByZXZpb3VzQXR0YWNrLmhhcyhyaWdodCkpIHtcclxuICAgICAgICByaWdodCA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMDJkOTFiXCI7XHJcbiAgICAgIGlmIChsZWZ0ICE9PSBudWxsKVxyXG4gICAgICAgIGxlZnQgPSBudWxsO1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgcmlnaHQgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgcHJldmlvdXNBdHRhY2suYWRkKGkpO1xyXG4gICAgY2hlY2tnYW1lT3ZlcigpO1xyXG4gICAgY3VycmVudFBsYXllciA9IHN3aXRjaFBsYXllcigpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3dpdGNoUGxheWVyKCkge1xyXG4gICAgcmV0dXJuIChjdXJyZW50UGxheWVyID0gY3VycmVudFBsYXllciA9PT0gcGxheWVyMSA/IHBsYXllcjIgOiBwbGF5ZXIxKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoZWNrZ2FtZU92ZXIoKSB7XHJcbiAgICBpZiAocGxheWVyYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcclxuICAgICAgZ2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2lubmVyJykuaW5uZXJUZXh0ID0gXCJDb21wdXRlciBXaW4hXCI7XHJcbiAgICAgIHBsYXllcjJib2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2spO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoY29tcGJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XHJcbiAgICAgIGdhbWVPdmVyID0gdHJ1ZTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbm5lcicpLmlubmVyVGV4dCA9IFwiWW91IFdpbiFcIjtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2FtZUxvb3A7XHJcbiIsImltcG9ydCBkb00gZnJvbSBcIi4vRE9NXCI7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XHJcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XHJcbmltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcclxuaW1wb3J0IGdhbWVMb29wIGZyb20gXCIuL2dhbWVsb29wXCI7XHJcblxyXG5cclxuZ2FtZUxvb3Aoe25hbWU6IFwiUGxheWVyXCJ9LCB7bmFtZTogXCJDb21wdXRlclwifSk7XHJcbiJdLCJuYW1lcyI6WyJib2FyZEVsZW1lbnQiLCJob2xkZXIiLCJpbm5lckhUTUwiLCJpIiwiY2VsbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImRhdGFzZXQiLCJpbmRleCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwiYm9hcmQiLCJBcnJheSIsImZpbGwiLCJzaGlwcyIsIm1pc3NlZEF0dGFja3MiLCJnZXRTaGlwcyIsImxlbmd0aCIsImdldEJvYXJkIiwicGxhY2VTaGlwIiwic2hpcCIsInNoaXBsZW5ndGgiLCJjb29yZGluYXRlcyIsInB1c2giLCJmb3JFYWNoIiwiY29vcmQiLCJyZWNlaXZlQXR0YWNrIiwiaGl0IiwiYWxsU2hpcHNTdW5rIiwiZXZlcnkiLCJpc1N1bmsiLCJoaXRzIiwicGxhY2VzaGlwcyIsInBsYXllcmJvYXJkIiwic2hpcHNMZW5ndGgiLCJzaGlwc2xlbiIsImNlbGxzIiwicXVlcnlTZWxlY3RvckFsbCIsImdhbWUiLCJ0dXJuIiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJwYXJzZUludCIsImNhblBsYWNlU2hpcCIsInN0YXJ0SW5kZXgiLCJjaGVja1NoaXBQbGFjZW1lbnQiLCJub092ZXJsYXAiLCJjaGVja092ZXJsYXAiLCJpbm5lclRleHQiLCJrIiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGFzdENlbGxJbmRleCIsImluZGV4cm93IiwicGxheWVyMSIsInBsYXllcjIiLCJjb21wYm9hcmQiLCJjbGlja2VkQ2VsbHMiLCJwbGF5ZXIxYm9hcmQiLCJwbGF5ZXIyYm9hcmQiLCJwbGF5ZXJTaGlwcyIsImNvbnNvbGUiLCJsb2ciLCJwcmV2aW91c0F0dGFjayIsIlNldCIsImN1cnJlbnRQbGF5ZXIiLCJnYW1lT3ZlciIsImxlZnQiLCJyaWdodCIsImF0dGFja0luZGV4Iiwic2hpcFBsYWNlZCIsImhhbmRsZUNsaWNrIiwiY2VsbGluZGV4IiwicmVzdWx0IiwiY29tcHV0ZXJUdXJuIiwicmFuZG9tQXR0YWNrIiwiY29tcGhpdCIsImhhcyIsImNoZWNrZ2FtZU92ZXIiLCJzd2l0Y2hQbGF5ZXIiLCJjb21wdXRlckFJIiwieCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlIiwiaXN2YWxpZGNsaWNrIiwiaW5jbHVkZXMiLCJjaGVja0RvdWJsZSIsInNldFRpbWVvdXQiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==