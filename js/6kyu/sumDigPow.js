// The number
// 89
// 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number:
// 89
// =
// 8
// 1
// +
// 9
// 2
// 89=8
// 1
//  +9
// 2

// The next number in having this property is
// 135
// 135:

// See this property again:
// 135
// =
// 1
// 1
// +
// 3
// 2
// +
// 5
// 3
// 135=1
// 1
//  +3
// 2
//  +5
// 3

// Task
// We need a function to collect these numbers, that may receive two integers
// a
// a,
// b
// b that defines the range
// [
// a
// ,
// b
// ]
// [a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

// Examples
// Let's see some cases (input -> output):

// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// If there are no numbers of this kind in the range
// [
// a
// ,
// b
// ]
// [a,b] the function should output an empty list.

// 90, 100 --> []
// Enjoy it!!

function sumDigPow(a, b) {
  // Your code here
  const result = [];
  for (let i = a; i <= b; i++) {
    const value = String(i).split("");

    const mappedValue = value
      .map((item, i) => Math.pow(item, i + 1))
      .reduce((acc, cur) => acc + cur, 0);

    if (mappedValue === i) {
      result.push(i);
    }
  }

  return result;
}

// Testing;
console.log(sumDigPow(90, 100));
console.log(sumDigPow(10, 100));
console.log(sumDigPow(10, 150));
console.log(sumDigPow(1, 10));
