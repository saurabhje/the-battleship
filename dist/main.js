(()=>{"use strict";const e=function(e,t){e.innerHTML="";for(let n=0;n<100;n++){const r=document.createElement("div");r.dataset.index=n,"player"==t?(r.classList.add("cell"),r.classList.add(`h${n}`)):"computer"==t&&(r.classList.add("enemycell"),r.classList.add(`e${n}`)),e.appendChild(r)}},t=function(){let e=Array(100).fill(null),t=[],n=[];return{board:e,getBoard:function(){return e},placeShip:function(n,r){let o=n.length,l=[];for(let e=0;e<o;e++)l.push(r+e);l.forEach((t=>{e[t]=n})),t.push(n)},receiveAttack:function(t){return null===e[t]?(n.push(t),!1):(e[t].hit(),!0)},allShipsSunk:function(){return t.every((e=>e.isSunk()))},missedAttacks:n}},n=function(e){let t=0;return{length:e,hit:()=>(t++,t),isSunk:()=>t===e,get hits(){return t}}};function r(e,t){if("player"===e){const e=[5,4,3,2];let r=e.length;const l=document.querySelectorAll(".cell");let c=!0,a=0;const u=document.getElementById("turn");console.log(a),c&&l.forEach((l=>{l.addEventListener("click",(l=>{const i=l.target,d=parseInt(i.dataset.index),s=function(e,t,n){const r=e.getBoard();for(let e=0;e<n;e++)if(null!==r[t+e])return!1;return!0}(t,d,e[a]),f=o(d,e[a]);if(u.innerText=0==a?"Place your Submarine":1==a?"Place your Attackerr":2==a?"Place your Ship":"Play",s&&f){console.log(t.board);const o=n(e[a]);t.placeShip(o,d);for(let t=0;t<e[a];t++)document.querySelector(`.h${d+t}`).style.backgroundColor="blue";a++,a===r&&(c=!1)}}))}))}else if("computer"===e){const e=[5,4,3,2];let r=e.length,l=0;for(;l<r;){let r=n(e[l]),c=Math.floor(100*Math.random());o(c,e[l])&&(t.placeShip(r,c),l++)}}}function o(e,t){let n=e+t-1,r=Math.floor(e/10);return!(Math.floor(n/10)>r)}!function(n,o){let l,c;c=t(),l=t();const a=[],u=document.getElementById("playerboard"),i=document.getElementById("compboard");e(u,"player"),e(i,"computer"),r("player",c),r("computer",l);let d=new Set,s=n,f=!1;function h(e){if(f)return;const t=e.target.dataset.index,n=l.receiveAttack(t);e.target.style.backgroundColor=!0===n?"#f70202":"#4a4848"}function m(){if(f)return;let e=Math.floor(100*Math.random());for(;d.has(e);)e=Math.floor(100*Math.random());const t=c.receiveAttack(e);u.querySelector(`[data-index='${e}']`).style.backgroundColor=!0===t?"#f70202":"#4a4848",d.add(e),y(),s=p()}function p(){return s=s===n?o:n}function y(){return c.allShipsSunk()?(f=!0,document.getElementById("winner").innerText="You Win!",void i.removeEventListener("click",h)):l.allShipsSunk()?(f=!0,void(document.getElementById("winner").innerText="Computer Win!")):void 0}document.querySelectorAll(".cell"),i.addEventListener("click",(e=>{const t=function(e){const t=e.target.dataset.index;return!a.includes(t)&&(a.push(t),!0)}(e);if(t){if(s!==n||f)return;h(e),y(),s=p(),setTimeout(m,500)}}))}({name:"Player"},{name:"Computer"})})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBS0MsTUFBc0IsSUFBaEJELEtBQUtFLFVBQ3hCLEtBQU1TLEVBQWVTLElBQUlELElBQ3ZCQSxFQUFJbkIsS0FBS0MsTUFBc0IsSUFBaEJELEtBQUtFLFVBRXRCLE1BQU1tQixFQUFVN0MsRUFBWVAsY0FBY2tELEdBQzdCVixFQUFhWixjQUFjLGdCQUFnQnNCLE9BRWpEckIsTUFBTUMsaUJBREcsSUFBWnNCLEVBQzJCLFVBRUEsVUFFL0JWLEVBQWUxRCxJQUFJa0UsR0FDbkJHLElBQ0FULEVBQWdCVSxHQUNsQixDQUVBLFNBQVNBLElBQ1AsT0FBUVYsRUFBZ0JBLElBQWtCUixFQUFVQyxFQUFVRCxDQUNoRSxDQUVBLFNBQVNpQixJQUNQLE9BQUk5QyxFQUFZTCxnQkFDZDJDLEdBQVcsRUFDWGxFLFNBQVNtQyxlQUFlLFVBQVVZLFVBQVksZ0JBQzlDZSxFQUFhYyxvQkFBb0IsUUFBU1QsSUFHeENSLEVBQVVwQyxnQkFDWjJDLEdBQVcsT0FDWGxFLFNBQVNtQyxlQUFlLFVBQVVZLFVBQVksdUJBRmhELENBS0YsQ0E1RWMvQyxTQUFTZ0MsaUJBQWlCLFNBRXhDOEIsRUFBYXhCLGlCQUFpQixTQUFVdUMsSUFDdEMsTUFBTUMsRUFlUixTQUFxQkQsR0FDbkIsTUFBTVQsRUFBWVMsRUFBRXJDLE9BQU90QyxRQUFRQyxNQUNuQyxPQUFHeUQsRUFBYW1CLFNBQVNYLEtBR3pCUixFQUFhMUMsS0FBS2tELElBQ1gsRUFDVCxDQXRCdUJZLENBQVlILEdBQ2pDLEdBQUdDLEVBQWEsQ0FDZCxHQUFJYixJQUFrQlIsR0FBV1MsRUFDL0IsT0FFRkMsRUFBWVUsR0FDWkgsSUFDQVQsRUFBZ0JVLElBQ2hCTSxXQUFXWCxFQUFjLElBQzNCLElBaUVKLENDL0ZBLENBQVMsQ0FBQ1ksS0FBTSxVQUFXLENBQUNBLEtBQU0sWSIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZS1iYXR0bGVzaGlwLy4vc2NyaXB0L0RPTS5qcyIsIndlYnBhY2s6Ly90aGUtYmF0dGxlc2hpcC8uL3NjcmlwdC9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGhlLWJhdHRsZXNoaXAvLi9zY3JpcHQvc2hpcC5qcyIsIndlYnBhY2s6Ly90aGUtYmF0dGxlc2hpcC8uL3NjcmlwdC9wbGFjZXNoaXBzLmpzIiwid2VicGFjazovL3RoZS1iYXR0bGVzaGlwLy4vc2NyaXB0L2dhbWVsb29wLmpzIiwid2VicGFjazovL3RoZS1iYXR0bGVzaGlwLy4vc2NyaXB0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRvTSA9ICgoKT0+e1xyXG4gICAgZnVuY3Rpb24gcmVuZGVyQm9hcmQoYm9hcmRFbGVtZW50LCBob2xkZXIpIHtcclxuICAgICAgICBib2FyZEVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNlbGwuZGF0YXNldC5pbmRleCA9IGk7XHJcbiAgICAgICAgICAgIGlmKGhvbGRlciA9PSBcInBsYXllclwiKXtcclxuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKGBoJHtpfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoaG9sZGVyID09IFwiY29tcHV0ZXJcIil7XHJcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2VuZW15Y2VsbCcpO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKGBlJHtpfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJvYXJkRWxlbWVudC5hcHBlbmRDaGlsZChjZWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVuZGVyQm9hcmRcclxuICAgIH1cclxufSkoKTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkb00iLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XHJcbmZ1bmN0aW9uIEdhbWVib2FyZCgpIHtcclxuICBsZXQgYm9hcmQgPSBBcnJheSgxMDApLmZpbGwobnVsbCk7XHJcbiAgbGV0IHNoaXBzID0gW107XHJcbiAgbGV0IG1pc3NlZEF0dGFja3MgPSBbXTtcclxuXHJcblxyXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcChzaGlwLGluZGV4KSB7XHJcbiAgICBsZXQgc2hpcGxlbmd0aCA9IHNoaXAubGVuZ3RoO1xyXG4gICAgbGV0IGNvb3JkaW5hdGVzID0gW107XHJcbiAgICBmb3IobGV0IGk9MDtpPHNoaXBsZW5ndGg7aSsrKXtcclxuICAgICAgY29vcmRpbmF0ZXMucHVzaChpbmRleCtpKTtcclxuICAgIH1cclxuICAgIGNvb3JkaW5hdGVzLmZvckVhY2goY29vcmQgPT4ge1xyXG4gICAgICBib2FyZFtjb29yZF0gPSBzaGlwO1xyXG4gICAgfSk7XHJcbiAgICBzaGlwcy5wdXNoKHNoaXApO1xyXG5cclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcykge1xyXG4gICAgaWYgKGJvYXJkW2Nvb3JkaW5hdGVzXSA9PT0gbnVsbCkge1xyXG4gICAgICBtaXNzZWRBdHRhY2tzLnB1c2goY29vcmRpbmF0ZXMpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCBoaXRTaGlwID0gYm9hcmRbY29vcmRpbmF0ZXNdO1xyXG4gICAgaGl0U2hpcC5oaXQoKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWxsU2hpcHNTdW5rKCkge1xyXG4gICAgcmV0dXJuIHNoaXBzLmV2ZXJ5KHNoaXAgPT4gc2hpcC5pc1N1bmsoKSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGdldEJvYXJkKCl7XHJcbiAgICByZXR1cm4gYm9hcmQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgYm9hcmQsXHJcbiAgICBnZXRCb2FyZCxcclxuICAgIHBsYWNlU2hpcCxcclxuICAgIHJlY2VpdmVBdHRhY2ssXHJcbiAgICBhbGxTaGlwc1N1bmssXHJcbiAgICBtaXNzZWRBdHRhY2tzLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDsiLCJmdW5jdGlvbiBTaGlwKGxlbmd0aCkge1xyXG4gIGxldCBoaXRzID0gMDtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGxlbmd0aDogbGVuZ3RoLFxyXG4gICAgaGl0KCkge1xyXG4gICAgICBoaXRzKytcclxuICAgICAgcmV0dXJuIGhpdHM7XHJcbiAgICB9LFxyXG4gICAgaXNTdW5rKCkge1xyXG4gICAgICByZXR1cm4gaGl0cyA9PT0gbGVuZ3RoO1xyXG4gICAgfSxcclxuICAgIGdldCBoaXRzKCl7XHJcbiAgICAgIHJldHVybiBoaXRzO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2hpcDsiLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XHJcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XHJcblxyXG5mdW5jdGlvbiBwbGFjZXNoaXBzKGhvbGRlciwgcGxheWVyYm9hcmQpIHtcclxuICBpZiAoaG9sZGVyID09PSBcInBsYXllclwiKSB7XHJcbiAgICBjb25zdCBzaGlwc0xlbmd0aCA9IFs1LCA0LCAzLCAyXTtcclxuICAgIGxldCBzaGlwc2xlbiA9IHNoaXBzTGVuZ3RoLmxlbmd0aDtcclxuICAgIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcclxuICAgIGxldCBnYW1lID0gdHJ1ZTtcclxuICAgIGxldCBpID0gMDtcclxuICAgIGNvbnN0IHR1cm4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHVybicpO1xyXG4gICAgY29uc29sZS5sb2coaSlcclxuICAgIGlmIChnYW1lKSB7XHJcbiAgICAgIGNlbGxzLmZvckVhY2goY2VsbCA9PiB7XHJcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgY2VsbCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoY2VsbC5kYXRhc2V0LmluZGV4KTtcclxuICAgICAgICAgIGNvbnN0IGNhblBsYWNlU2hpcCA9IGNoZWNrU2hpcFBsYWNlbWVudChwbGF5ZXJib2FyZCwgaW5kZXgsIHNoaXBzTGVuZ3RoW2ldKTtcclxuICAgICAgICAgIGNvbnN0IG5vT3ZlcmxhcCA9IGNoZWNrT3ZlcmxhcChpbmRleCwgc2hpcHNMZW5ndGhbaV0pO1xyXG4gICAgICAgICAgaWYoaSA9PTApe1xyXG4gICAgICAgICAgICB0dXJuLmlubmVyVGV4dCA9IFwiUGxhY2UgeW91ciBTdWJtYXJpbmVcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgaWYoaT09MSl7XHJcbiAgICAgICAgICAgIHR1cm4uaW5uZXJUZXh0ID0gXCJQbGFjZSB5b3VyIEF0dGFja2VyclwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSBpZihpPT0yKXtcclxuICAgICAgICAgICAgdHVybi5pbm5lclRleHQgPSBcIlBsYWNlIHlvdXIgU2hpcFwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdHVybi5pbm5lclRleHQgPSBcIlBsYXlcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChjYW5QbGFjZVNoaXAgJiYgbm9PdmVybGFwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBsYXllcmJvYXJkLmJvYXJkKTtcclxuICAgICAgICAgICAgY29uc3Qgc2hpcCA9IFNoaXAoc2hpcHNMZW5ndGhbaV0pO1xyXG4gICAgICAgICAgICBwbGF5ZXJib2FyZC5wbGFjZVNoaXAoc2hpcCwgaW5kZXgpOyAgXHJcbiAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgc2hpcHNMZW5ndGhbaV07IGsrKykge1xyXG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5oJHtpbmRleCArIGt9YCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsdWUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgaWYgKGkgPT09IHNoaXBzbGVuKSB7XHJcbiAgICAgICAgICAgICAgZ2FtZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoaG9sZGVyID09PSBcImNvbXB1dGVyXCIpIHtcclxuICAgIGNvbnN0IHNoaXBzTGVuZ3RoID0gWzUsIDQsIDMsIDJdO1xyXG4gICAgbGV0IHNoaXBzbGVuID0gc2hpcHNMZW5ndGgubGVuZ3RoO1xyXG4gICAgbGV0IGkgPSAwO1xyXG4gICAgXHJcbiAgICB3aGlsZSAoaSA8IHNoaXBzbGVuKSB7XHJcbiAgICAgIGxldCBzaGlwID0gU2hpcChzaGlwc0xlbmd0aFtpXSk7XHJcbiAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XHJcbiAgICAgIGNvbnN0IG5vT3ZlcmxhcCA9IGNoZWNrT3ZlcmxhcChpbmRleCwgc2hpcHNMZW5ndGhbaV0pO1xyXG5cclxuICAgICAgaWYgKCFub092ZXJsYXApIHsgLy8gQ2hlY2sgaWYgdGhlIHNoaXAgaXMgb3ZlcmxhcHBpbmdcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgbGV0IHRlbXAgPSBpbmRleDtcclxuICAgICAgcGxheWVyYm9hcmQucGxhY2VTaGlwKHNoaXAsIGluZGV4KTtcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBpKys7IFxyXG4gICAgfSAgICAgXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja092ZXJsYXAoc3RhcnRJbmRleCwgbGVuZ3RoKSB7XHJcbiAgbGV0IGxhc3RDZWxsSW5kZXggPSBzdGFydEluZGV4ICsgbGVuZ3RoIC0gMTtcclxuICBsZXQgaW5kZXhyb3cgPSBNYXRoLmZsb29yKHN0YXJ0SW5kZXggLyAxMCk7XHJcbiAgbGV0IGxhc3Ryb3cgPSBNYXRoLmZsb29yKGxhc3RDZWxsSW5kZXggLyAxMCk7XHJcbiAgXHJcbiAgaWYgKGxhc3Ryb3cgPiBpbmRleHJvdykge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBcclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tTaGlwUGxhY2VtZW50KHBsYXllcmJvYXJkLCBzdGFydEluZGV4LCBsZW5ndGgpIHtcclxuICBjb25zdCBib2FyZCA9IHBsYXllcmJvYXJkLmdldEJvYXJkKCk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgaW5kaWNlcyA9IHN0YXJ0SW5kZXggKyBpO1xyXG5cclxuICAgIGlmIChib2FyZFtpbmRpY2VzXSAhPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgeyBwbGFjZXNoaXBzIH07XHJcbiIsImltcG9ydCBQbGF5ZXJzIGZyb20gXCIuL3BsYXllclwiO1xyXG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xyXG5pbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XHJcbmltcG9ydCBkb00gZnJvbSBcIi4vRE9NXCI7XHJcbmltcG9ydCB7IHBsYWNlc2hpcHMgfSBmcm9tIFwiLi9wbGFjZXNoaXBzXCI7XHJcblxyXG5mdW5jdGlvbiBnYW1lTG9vcChwbGF5ZXIxLCBwbGF5ZXIyKSB7XHJcbiAgbGV0IGNvbXBib2FyZCwgcGxheWVyYm9hcmQ7XHJcbiAgcGxheWVyYm9hcmQgPSBHYW1lYm9hcmQoKTtcclxuICBjb21wYm9hcmQgPSBHYW1lYm9hcmQoKTtcclxuICBjb25zdCBjbGlja2VkQ2VsbHMgPSBbXTtcclxuICBjb25zdCBwbGF5ZXIxYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllcmJvYXJkXCIpO1xyXG4gIGNvbnN0IHBsYXllcjJib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcGJvYXJkXCIpO1xyXG4gIGRvTS5yZW5kZXJCb2FyZChwbGF5ZXIxYm9hcmQsXCJwbGF5ZXJcIik7XHJcbiAgZG9NLnJlbmRlckJvYXJkKHBsYXllcjJib2FyZCwgXCJjb21wdXRlclwiKTtcclxuXHJcblxyXG4gIHBsYWNlc2hpcHMoXCJwbGF5ZXJcIixwbGF5ZXJib2FyZCk7XHJcbiAgcGxhY2VzaGlwcyhcImNvbXB1dGVyXCIsY29tcGJvYXJkKTtcclxuXHJcbiBcclxuICBsZXQgcHJldmlvdXNBdHRhY2sgPSBuZXcgU2V0KCk7IC8vdG8gcHJldmVudCB0aGUgY29tcCBmcm9tIGF0dGFja2luZyB0aGUgc2FtZSBpbmRleCB0d2ljZVxyXG4gIGxldCBjdXJyZW50UGxheWVyID0gcGxheWVyMTtcclxuICBsZXQgZ2FtZU92ZXIgPSBmYWxzZTtcclxuXHJcbiAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpO1xyXG4gIFxyXG4gIHBsYXllcjJib2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGNvbnN0IGlzdmFsaWRjbGljayA9IGNoZWNrRG91YmxlKGUpO1xyXG4gICAgaWYoaXN2YWxpZGNsaWNrKXtcclxuICAgICAgaWYgKGN1cnJlbnRQbGF5ZXIgIT09IHBsYXllcjEgfHwgZ2FtZU92ZXIpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaGFuZGxlQ2xpY2soZSk7XHJcbiAgICAgIGNoZWNrZ2FtZU92ZXIoKTtcclxuICAgICAgY3VycmVudFBsYXllciA9IHN3aXRjaFBsYXllcigpO1xyXG4gICAgICBzZXRUaW1lb3V0KGNvbXB1dGVyVHVybiwgNTAwKTtcclxuICAgIH1cclxuICAgIFxyXG4gIH0pO1xyXG5cclxuXHJcbiAgXHJcbiAgZnVuY3Rpb24gY2hlY2tEb3VibGUoZSl7XHJcbiAgICBjb25zdCBjZWxsaW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LmluZGV4O1xyXG4gICAgaWYoY2xpY2tlZENlbGxzLmluY2x1ZGVzKGNlbGxpbmRleCkpe1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjbGlja2VkQ2VsbHMucHVzaChjZWxsaW5kZXgpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDbGljayhldmVudCkge1xyXG4gICAgaWYgKGdhbWVPdmVyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGNlbGxpbmRleCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmluZGV4O1xyXG4gICAgY29uc3QgcmVzdWx0ID0gY29tcGJvYXJkLnJlY2VpdmVBdHRhY2soY2VsbGluZGV4KTtcclxuICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcclxuICAgICAgZXZlbnQudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2Y3MDIwMlwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZXZlbnQudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzRhNDg0OFwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY29tcHV0ZXJUdXJuKCkge1xyXG4gICAgaWYgKGdhbWVPdmVyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcclxuICAgIHdoaWxlKHByZXZpb3VzQXR0YWNrLmhhcyh4KSl7XHJcbiAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY29tcGhpdCA9IHBsYXllcmJvYXJkLnJlY2VpdmVBdHRhY2soeCk7XHJcbiAgICBjb25zdCBjZWxsID0gcGxheWVyMWJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWluZGV4PScke3h9J11gKTtcclxuICAgIGlmIChjb21waGl0ID09PSB0cnVlKSB7XHJcbiAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZjcwMjAyXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzRhNDg0OFwiO1xyXG4gICAgfVxyXG4gICAgcHJldmlvdXNBdHRhY2suYWRkKHgpO1xyXG4gICAgY2hlY2tnYW1lT3ZlcigpO1xyXG4gICAgY3VycmVudFBsYXllciA9IHN3aXRjaFBsYXllcigpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3dpdGNoUGxheWVyKCkge1xyXG4gICAgcmV0dXJuIChjdXJyZW50UGxheWVyID0gY3VycmVudFBsYXllciA9PT0gcGxheWVyMSA/IHBsYXllcjIgOiBwbGF5ZXIxKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoZWNrZ2FtZU92ZXIoKSB7XHJcbiAgICBpZiAocGxheWVyYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcclxuICAgICAgZ2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2lubmVyJykuaW5uZXJUZXh0ID0gXCJZb3UgV2luIVwiO1xyXG4gICAgICBwbGF5ZXIyYm9hcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsaWNrKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbXBib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xyXG4gICAgICBnYW1lT3ZlciA9IHRydWU7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5uZXInKS5pbm5lclRleHQgPSBcIkNvbXB1dGVyIFdpbiFcIjtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2FtZUxvb3A7XHJcbiIsImltcG9ydCBkb00gZnJvbSBcIi4vRE9NXCI7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XHJcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XHJcbmltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcclxuaW1wb3J0IGdhbWVMb29wIGZyb20gXCIuL2dhbWVsb29wXCI7XHJcblxyXG5cclxuZ2FtZUxvb3Aoe25hbWU6IFwiUGxheWVyXCJ9LCB7bmFtZTogXCJDb21wdXRlclwifSk7XHJcbiJdLCJuYW1lcyI6WyJib2FyZEVsZW1lbnQiLCJob2xkZXIiLCJpbm5lckhUTUwiLCJpIiwiY2VsbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImRhdGFzZXQiLCJpbmRleCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwiYm9hcmQiLCJBcnJheSIsImZpbGwiLCJzaGlwcyIsIm1pc3NlZEF0dGFja3MiLCJnZXRCb2FyZCIsInBsYWNlU2hpcCIsInNoaXAiLCJzaGlwbGVuZ3RoIiwibGVuZ3RoIiwiY29vcmRpbmF0ZXMiLCJwdXNoIiwiZm9yRWFjaCIsImNvb3JkIiwicmVjZWl2ZUF0dGFjayIsImhpdCIsImFsbFNoaXBzU3VuayIsImV2ZXJ5IiwiaXNTdW5rIiwiaGl0cyIsInBsYWNlc2hpcHMiLCJwbGF5ZXJib2FyZCIsInNoaXBzTGVuZ3RoIiwic2hpcHNsZW4iLCJjZWxscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJnYW1lIiwidHVybiIsImdldEVsZW1lbnRCeUlkIiwiY29uc29sZSIsImxvZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsInBhcnNlSW50IiwiY2FuUGxhY2VTaGlwIiwic3RhcnRJbmRleCIsImNoZWNrU2hpcFBsYWNlbWVudCIsIm5vT3ZlcmxhcCIsImNoZWNrT3ZlcmxhcCIsImlubmVyVGV4dCIsImsiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsYXN0Q2VsbEluZGV4IiwiaW5kZXhyb3ciLCJwbGF5ZXIxIiwicGxheWVyMiIsImNvbXBib2FyZCIsImNsaWNrZWRDZWxscyIsInBsYXllcjFib2FyZCIsInBsYXllcjJib2FyZCIsInByZXZpb3VzQXR0YWNrIiwiU2V0IiwiY3VycmVudFBsYXllciIsImdhbWVPdmVyIiwiaGFuZGxlQ2xpY2siLCJjZWxsaW5kZXgiLCJyZXN1bHQiLCJjb21wdXRlclR1cm4iLCJ4IiwiaGFzIiwiY29tcGhpdCIsImNoZWNrZ2FtZU92ZXIiLCJzd2l0Y2hQbGF5ZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZSIsImlzdmFsaWRjbGljayIsImluY2x1ZGVzIiwiY2hlY2tEb3VibGUiLCJzZXRUaW1lb3V0IiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=