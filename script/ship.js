function Ship(length) {
    let hit = 0;
  
    return {
      length: length,
      Hit() {
        this.hit++;
      },
      isSunk() {
        return this.hit === length;
      },
      hit: hit,
    };
  }
  
  module.exports = Ship;