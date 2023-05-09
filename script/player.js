function Players(gameboard, name = "Player") {

   let previousAttacks = new Set();
   function attack(x){
    const result = Gameboard.recieveAttack(x);
    return result;
   } 

   function randomAttack(){
    let x;
    do{
        x = Math.floor(Math.random()* 100)
    }while(previousAttacks.has(x)){
        previousAttacks.add(x);
        return attack(x);
    }
   }
   return {
        name,
        attack,
        randomAttack,
   }
    
}

module.exports = Players;