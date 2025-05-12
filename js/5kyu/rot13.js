// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message) {
  let answer = "";
  const splittedMessage = message.split("");

  for (let i = 0; i < splittedMessage.length; i++) {
    let originalCharCode = message[i].charCodeAt(0);

    if (originalCharCode >= 65 && originalCharCode <= 90) {
      const convertedLetter = splittedMessage[i].toLowerCase();
      let charCode = convertedLetter.charCodeAt(0);

      if (charCode + 13 > 122) {
        charCode = String.fromCharCode(97 + (12 - (122 - charCode)));
      } else if (charCode + 13 <= 122 && charCode + 13 >= 97) {
        charCode = String.fromCharCode(charCode + 13);
      } else {
        charCode = splittedMessage[i];
      }

      answer += charCode.toUpperCase();
    } else if (originalCharCode >= 97 && originalCharCode <= 122) {
      let charCode = splittedMessage[i].charCodeAt(0);
      if (charCode + 13 > 122) {
        charCode = String.fromCharCode(97 + (12 - (122 - charCode)));
      } else if (charCode + 13 <= 122 && charCode + 13 >= 97) {
        charCode = String.fromCharCode(charCode + 13);
      }

      answer += charCode;
    } else {
      answer += splittedMessage[i];
    }
  }

  return answer;
}

// console.log(rot13("Test"));
// console.log(rot13("Ruby is cool!"));
console.log(rot13("'5p`RN#<"));
// console.log("`".charCodeAt(0));
// output should be '5c`EA#<
// console.log("g".charCodeAt(0));
// a- charCode - 97
// z- charCode - 122
// A- charCode - 65
// Z- charCode - 90

// valid - from (65 -122)
// [["test", "grfg"], ["Test", "Grfg"]]

// a b c d e f g h
// total = 8
// i =5. initialletter = a, o/p = e
// i =5. initaletter = e, op = 8-5=3     // e=5 5+5=10 > total // total - i === 3,,,

// T ===> G
// 116 + 13 ===> 103
// 122-116=6
// 97+6 = 103  ===> 97+(13-(122-116)
