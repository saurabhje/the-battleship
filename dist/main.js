(()=>{"use strict";const e=function(){let e=Array(100).fill(null),t=[],n=[];return{placeShip:function(n,r){r.forEach((t=>{e[t]=n})),t.push(n)},receiveAttack:function(t){return null===e[t]?(n.push(t),!1):(e[t].hit(),!0)},allShipsSunk:function(){return t.every((e=>e.isSunk()))},missedAttacks:n}};e();const t=function(e,t){e.innerHTML="";for(let t=0;t<100;t++){const n=document.createElement("div");n.dataset.index=t,n.classList.add("cell"),n.innerText=`${t}`,e.appendChild(n)}},n=function(e,t){let n=0;return{length:t,hit:()=>(n++,n),isSunk:()=>n===t,get name(){return e},get hits(){return n}}};!function(r,o){let c,i;i=e(),c=e(),i.placeShip(n("destroyer",3),[1,2,3]),i.placeShip(n("cruise",3),[5,6,7]),c.placeShip(n("destroyer",3),[1,2,3]),c.placeShip(n("cruise",3),[8,9,10]);const l=document.getElementById("playerboard"),a=document.getElementById("compboard");t(l,i),t(a,c);let u=r,s=!1;function d(e){if(s)return;const t=e.target.dataset.index,n=c.receiveAttack(t);e.target.style.backgroundColor=!0===n?"#f70202":"#4a4848"}function p(){if(s)return;let e=Math.floor(100*Math.random());console.log(e);const t=i.receiveAttack(e);l.querySelector(`[data-index='${e}']`).style.backgroundColor=!0===t?"#f70202":"#4a4848",h(),u=f()}function f(){return u=u===r?o:r}function h(){return i.allShipsSunk()?(s=!0,console.log("Game over! Computer won!"),void a.removeEventListener("click",d)):c.allShipsSunk()?(s=!0,void console.log("Game over! Player won!")):void 0}a.addEventListener("click",(e=>{u!==r||s||(d(e),h(),u=f(),setTimeout(p,700))}))}({name:"player1"},{name:"player2"})})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aEJJLFdBQVdkLEVBQWMsS0FBSSxHQWtEakMsQ0N6RUEsQ0FBUyxDQUFDbkIsS0FBTSxXQUFZLENBQUNBLEtBQU0sVyIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZS1iYXR0bGVzaGlwLy4vc2NyaXB0L2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly90aGUtYmF0dGxlc2hpcC8uL3NjcmlwdC9ET00uanMiLCJ3ZWJwYWNrOi8vdGhlLWJhdHRsZXNoaXAvLi9zY3JpcHQvc2hpcC5qcyIsIndlYnBhY2s6Ly90aGUtYmF0dGxlc2hpcC8uL3NjcmlwdC9nYW1lbG9vcC5qcyIsIndlYnBhY2s6Ly90aGUtYmF0dGxlc2hpcC8uL3NjcmlwdC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XHJcbmZ1bmN0aW9uIEdhbWVib2FyZCgpIHtcclxuICBsZXQgYm9hcmQgPSBBcnJheSgxMDApLmZpbGwobnVsbCk7XHJcbiAgbGV0IHNoaXBzID0gW107XHJcbiAgbGV0IG1pc3NlZEF0dGFja3MgPSBbXTtcclxuXHJcbiAgZnVuY3Rpb24gcGxhY2VTaGlwKHNoaXAsIGNvb3JkaW5hdGVzKSB7XHJcbiAgICBjb29yZGluYXRlcy5mb3JFYWNoKGNvb3JkID0+IHtcclxuICAgICAgYm9hcmRbY29vcmRdID0gc2hpcDtcclxuICAgIH0pO1xyXG4gICAgc2hpcHMucHVzaChzaGlwKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpIHtcclxuICAgIGlmIChib2FyZFtjb29yZGluYXRlc10gPT09IG51bGwpIHtcclxuICAgICAgbWlzc2VkQXR0YWNrcy5wdXNoKGNvb3JkaW5hdGVzKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaGl0U2hpcCA9IGJvYXJkW2Nvb3JkaW5hdGVzXTtcclxuICAgIGhpdFNoaXAuaGl0KCk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFsbFNoaXBzU3VuaygpIHtcclxuICAgIHJldHVybiBzaGlwcy5ldmVyeShzaGlwID0+IHNoaXAuaXNTdW5rKCkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBsYWNlU2hpcCxcclxuICAgIHJlY2VpdmVBdHRhY2ssXHJcbiAgICBhbGxTaGlwc1N1bmssXHJcbiAgICBtaXNzZWRBdHRhY2tzLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDsiLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xyXG5sZXQgY29tcGJvYXJkID0gR2FtZWJvYXJkKCk7XHJcbmNvbnN0IGRvTSA9ICgoKT0+e1xyXG4gICAgZnVuY3Rpb24gcmVuZGVyQm9hcmQoYm9hcmRFbGVtZW50LGJvYXJkKXtcclxuICAgICAgICBib2FyZEVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgZm9yKGxldCBpID0wO2k8MTAwO2krKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY2VsbC5kYXRhc2V0LmluZGV4ID0gaTtcclxuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XHJcbiAgICAgICAgICAgIGNlbGwuaW5uZXJUZXh0ID0gYCR7aX1gO1xyXG4gICAgICAgICAgICBib2FyZEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2VsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybntcclxuICAgICAgICByZW5kZXJCb2FyZFxyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZG9NIiwiZnVuY3Rpb24gU2hpcChuYW1lLCBsZW5ndGgpIHtcclxuICBsZXQgaGl0cyA9IDA7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBsZW5ndGg6IGxlbmd0aCxcclxuICAgIGhpdCgpIHtcclxuICAgICAgaGl0cysrXHJcbiAgICAgIHJldHVybiBoaXRzO1xyXG4gICAgfSxcclxuICAgIGlzU3VuaygpIHtcclxuICAgICAgcmV0dXJuIGhpdHMgPT09IGxlbmd0aDtcclxuICAgIH0sXHJcbiAgICBnZXQgbmFtZSgpIHtcclxuICAgICAgcmV0dXJuIG5hbWU7XHJcbiAgICB9LFxyXG4gICAgZ2V0IGhpdHMoKXtcclxuICAgICAgcmV0dXJuIGhpdHM7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBTaGlwOyIsImltcG9ydCBQbGF5ZXJzIGZyb20gXCIuL3BsYXllclwiO1xyXG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xyXG5pbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XHJcbmltcG9ydCBkb00gZnJvbSBcIi4vRE9NXCI7XHJcblxyXG5mdW5jdGlvbiBnYW1lTG9vcChwbGF5ZXIxLCBwbGF5ZXIyKSB7XHJcbiAgbGV0IGNvbXBib2FyZCwgcGxheWVyYm9hcmQ7XHJcbiAgcGxheWVyYm9hcmQgPSBHYW1lYm9hcmQoKTtcclxuICBjb21wYm9hcmQgPSBHYW1lYm9hcmQoKTtcclxuXHJcbiAgcGxheWVyYm9hcmQucGxhY2VTaGlwKFNoaXAoXCJkZXN0cm95ZXJcIiwgMyksIFsxLCAyLCAzXSk7XHJcbiAgcGxheWVyYm9hcmQucGxhY2VTaGlwKFNoaXAoXCJjcnVpc2VcIiwgMyksIFs1LCA2LCA3XSk7XHJcbiAgY29tcGJvYXJkLnBsYWNlU2hpcChTaGlwKFwiZGVzdHJveWVyXCIsIDMpLCBbMSwgMiwgM10pO1xyXG4gIGNvbXBib2FyZC5wbGFjZVNoaXAoU2hpcChcImNydWlzZVwiLCAzKSwgWzgsIDksIDEwXSk7XHJcblxyXG4gIGNvbnN0IHBsYXllcjFib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyYm9hcmRcIik7XHJcbiAgY29uc3QgcGxheWVyMmJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21wYm9hcmRcIik7XHJcbiAgZG9NLnJlbmRlckJvYXJkKHBsYXllcjFib2FyZCwgcGxheWVyYm9hcmQpO1xyXG4gIGRvTS5yZW5kZXJCb2FyZChwbGF5ZXIyYm9hcmQsIGNvbXBib2FyZCk7XHJcblxyXG4gIGxldCBjdXJyZW50UGxheWVyID0gcGxheWVyMTtcclxuICBsZXQgZ2FtZU92ZXIgPSBmYWxzZTtcclxuXHJcbiAgcGxheWVyMmJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgaWYgKGN1cnJlbnRQbGF5ZXIgIT09IHBsYXllcjEgfHwgZ2FtZU92ZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlQ2xpY2soZSk7XHJcbiAgICBjaGVja2dhbWVPdmVyKCk7XHJcbiAgICBjdXJyZW50UGxheWVyID0gc3dpdGNoUGxheWVyKCk7XHJcbiAgICBzZXRUaW1lb3V0KGNvbXB1dGVyVHVybiwgNzAwKTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZlbnQpIHtcclxuICAgIGlmIChnYW1lT3Zlcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBjZWxsaW5kZXggPSBldmVudC50YXJnZXQuZGF0YXNldC5pbmRleDtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGNvbXBib2FyZC5yZWNlaXZlQXR0YWNrKGNlbGxpbmRleCk7XHJcbiAgICBpZiAocmVzdWx0ID09PSB0cnVlKSB7XHJcbiAgICAgIGV2ZW50LnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmNzAyMDJcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGV2ZW50LnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiM0YTQ4NDhcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNvbXB1dGVyVHVybigpIHtcclxuICAgIGlmIChnYW1lT3Zlcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XHJcbiAgICBjb25zb2xlLmxvZyh4KTtcclxuICAgIGNvbnN0IGNvbXBoaXQgPSBwbGF5ZXJib2FyZC5yZWNlaXZlQXR0YWNrKHgpO1xyXG4gICAgY29uc3QgY2VsbCA9IHBsYXllcjFib2FyZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pbmRleD0nJHt4fSddYCk7XHJcbiAgICBpZiAoY29tcGhpdCA9PT0gdHJ1ZSkge1xyXG4gICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2Y3MDIwMlwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiM0YTQ4NDhcIjtcclxuICAgIH1cclxuICAgIGNoZWNrZ2FtZU92ZXIoKTtcclxuICAgIGN1cnJlbnRQbGF5ZXIgPSBzd2l0Y2hQbGF5ZXIoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHN3aXRjaFBsYXllcigpIHtcclxuICAgIHJldHVybiAoY3VycmVudFBsYXllciA9IGN1cnJlbnRQbGF5ZXIgPT09IHBsYXllcjEgPyBwbGF5ZXIyIDogcGxheWVyMSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGVja2dhbWVPdmVyKCkge1xyXG4gICAgaWYgKHBsYXllcmJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XHJcbiAgICAgIGdhbWVPdmVyID0gdHJ1ZTtcclxuICAgICAgY29uc29sZS5sb2coXCJHYW1lIG92ZXIhIENvbXB1dGVyIHdvbiFcIik7XHJcbiAgICAgIHBsYXllcjJib2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2spO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoY29tcGJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XHJcbiAgICAgIGdhbWVPdmVyID0gdHJ1ZTtcclxuICAgICAgY29uc29sZS5sb2coXCJHYW1lIG92ZXIhIFBsYXllciB3b24hXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnYW1lTG9vcDtcclxuIiwiaW1wb3J0IGRvTSBmcm9tIFwiLi9ET01cIjtcclxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcclxuaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcclxuaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xyXG5pbXBvcnQgZ2FtZUxvb3AgZnJvbSBcIi4vZ2FtZWxvb3BcIjtcclxuXHJcblxyXG5nYW1lTG9vcCh7bmFtZTogXCJwbGF5ZXIxXCJ9LCB7bmFtZTogXCJwbGF5ZXIyXCJ9KTtcclxuIl0sIm5hbWVzIjpbImJvYXJkIiwiQXJyYXkiLCJmaWxsIiwic2hpcHMiLCJtaXNzZWRBdHRhY2tzIiwicGxhY2VTaGlwIiwic2hpcCIsImNvb3JkaW5hdGVzIiwiZm9yRWFjaCIsImNvb3JkIiwicHVzaCIsInJlY2VpdmVBdHRhY2siLCJoaXQiLCJhbGxTaGlwc1N1bmsiLCJldmVyeSIsImlzU3VuayIsImJvYXJkRWxlbWVudCIsImlubmVySFRNTCIsImkiLCJjZWxsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZGF0YXNldCIsImluZGV4IiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJUZXh0IiwiYXBwZW5kQ2hpbGQiLCJuYW1lIiwibGVuZ3RoIiwiaGl0cyIsInBsYXllcjEiLCJwbGF5ZXIyIiwiY29tcGJvYXJkIiwicGxheWVyYm9hcmQiLCJwbGF5ZXIxYm9hcmQiLCJnZXRFbGVtZW50QnlJZCIsInBsYXllcjJib2FyZCIsImN1cnJlbnRQbGF5ZXIiLCJnYW1lT3ZlciIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJjZWxsaW5kZXgiLCJ0YXJnZXQiLCJyZXN1bHQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNvbXB1dGVyVHVybiIsIngiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjb25zb2xlIiwibG9nIiwiY29tcGhpdCIsInF1ZXJ5U2VsZWN0b3IiLCJjaGVja2dhbWVPdmVyIiwic3dpdGNoUGxheWVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic2V0VGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=