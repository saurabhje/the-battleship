function Ship(length) {
  let hits = 0;

  return {
    length: length,
    hit() {
      hits++;
    },
    isSunk() {
      return hits === length;
    },
    hits: hits,
  };
}

module.exports = Ship;
