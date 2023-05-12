import Gameboard from "./gameboard";

function Players(playerboard,opponentboard, name = "Player") {
   let previousAttacks = new Set();
   function Attack(opponentboard,x){
    const result = opponentboard.receiveAttack(x);
    return result;
   } 

   function randomAttack(){
    let x;
    do{
        x = Math.floor(Math.random()* 100)
    }while(previousAttacks.has(x));
        previousAttacks.add(x);
        return Attack(playerboard,x);
   }
   return {
        name,
        Attack,
        randomAttack,
        previousAttacks,
   }
}

export default Players;