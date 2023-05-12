function Ship(name ,length) {
  let hits = 0;

  return {
    length: length,
    hit() {
      hits++;
      return hits;
    },
    isSunk() {
      return hits === length;
    },
    hits(){
      return hits;
    },
    get name(){
      return name;
    }
  };
}

export default Ship;
