const DOM = (()=>{


    function renderBoard(boardElement,board){
        boardElement.innerHTML = '';
        for(let i =0;i<100;i++){
            const cell = document.createElement('div');
            cell.dataset.index = i;
            cell.classList.add('cell');
            boardElement.appendChild(cell);
        }
    };
    return{

        renderBoard,
    }
})();

export default DOM