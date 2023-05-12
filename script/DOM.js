import Gameboard from "./gameboard";
let compboard = Gameboard();
const doM = (()=>{
    function renderBoard(boardElement,board){
        boardElement.innerHTML = '';
        for(let i =0;i<100;i++){
            const cell = document.createElement('div');
            cell.dataset.index = i;
            cell.classList.add('cell');
            cell.innerText = `${i}`;
            boardElement.appendChild(cell);
        }
    };
    function handleInput(event) {
        const cellindex = event.target.dataset.index;
        const result = compboard.receiveAttack(cellindex);
        if (result === true) {
          event.target.style.backgroundColor = "#f70202";
        } else {
          event.target.style.backgroundColor = "#4a4848";
        }
    };
    return{
        renderBoard,
    }
})();

export default doM