// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]

function towerBuilder(nFloors) {
  // build here
  const tower = [];

  for (let i = 1; i <= nFloors; i++) {
    tower.push(
      " ".repeat(nFloors - i) +
        "*".repeat(i + tower.length) +
        " ".repeat(nFloors - i)
    );
  }

  return tower;
}

console.log(towerBuilder(4));
