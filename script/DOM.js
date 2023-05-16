const doM = (()=>{
    function renderBoard(boardElement, holder) {
        boardElement.innerHTML = '';
        for (let i = 0; i < 100; i++) {
            const cell = document.createElement('div');
            cell.dataset.index = i;
            if(holder == "player"){
                cell.classList.add('cell');
                cell.classList.add(`h${i}`);
            }
            else if(holder == "computer"){
                cell.classList.add('enemycell');
                cell.classList.add(`e${i}`);
            }
            cell.innerText = `${i}`;
            boardElement.appendChild(cell);
        }
    };

    return {
        renderBoard
    }
})();


export default doM