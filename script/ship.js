function Ship(name, length) {
  let hits = 0;

  return {
    length: length,
    hit() {
      hits++
      return hits;
    },
    isSunk() {
      return hits === length;
    },
    get name() {
      return name;
    },
    get hits(){
      return hits;
    }
  };
}
export default Ship;