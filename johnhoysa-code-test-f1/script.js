/*

1) Directions
 
Check to see if two provided strings contain the same characters in the same quantity.
ONLY consider characters, not spaces or punctuation.
Consider capital letters to be the same as lower case.
Please code a solution using javascript.
 
 Examples
 
JS
  stringCompare('rail safety', 'fairy tales') --> True
  stringCompare ('RAIL! SAFETY!', 'fairy tales') --> True
  stringCompare ('Hi there', 'Bye there') --> False

*/

// My Answer
const stringCompare = (stringA, stringB) => {
  const processedStringA = [...new Set(stringA.toLowerCase().split(' ').join(''))].sort().join('');
  let noPunctuationA = processedStringA.replace(/[!]/g, '');
  const processedStringB = [...new Set(stringB.toLowerCase().split(' ').join(''))].sort().join('');
  let noPunctuationB = processedStringB.replace(/[!]/g, '');
  //return stringB === processedString;
  //console.log('what is my const? ', processedString);

  console.log('what is this? ', noPunctuationB);
};

stringCompare('rail safety', 'fairy tales'); //-- > True;
stringCompare('RAIL! SAFETY!', 'fairy tales'); //-- > True;
stringCompare('Hi there', 'Bye there'); //-- > False;

/*
2) classic pyramid.
 
Directions
Write a pyramid() function that accepts a positive number N.
The function should console log a pyramid shape
with N levels using the # character.  Make sure the
pyramid has underscores on both the left *and* right hand sides
please code a solution using javascript
 
Examples
 
JS
  pyramid(1)
      '#'
  pyramid(2)
      '_#_'
      '###'
  pyramid(3)
      '__#__'
      '_###_'
      '#####'

*/

function pyramid(numberOfRows) {
  for (let i = 0; i < numberOfRows; i++) {
    let myString = '';
    for (let j = 1; j < numberOfRows - i; j++) {
      myString = '_' + myString;
    }
    for (let k = 1; k <= 2 * i + 1; k++) {
      myString = myString + '#';
    }
    console.log(myString);
  }
}
pyramid(3);
