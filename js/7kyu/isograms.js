// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str) {
  const strList = str.toLowerCase().split("");
  const unique = [];

  for (let i = 0; i < strList.length; i++) {
    if (unique.includes(strList[i])) {
      return false;
    } else {
      unique.push(strList[i]);
    }
  }

  return true;
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("isogram"));
console.log(isIsogram("moOse"));
