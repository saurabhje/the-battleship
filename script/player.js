
function Players() {
    
   function attack(x,y){
    const result = this.Gameboard.recieveAttack(x,y);
    return result;
   } 

   function randomAttack(){
    let x,y
   }
    
}

module.exports = Players;