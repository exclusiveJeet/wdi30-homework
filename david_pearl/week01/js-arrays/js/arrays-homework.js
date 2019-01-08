console.log('Alright, alright, alright!');

/*
   _
  /_\  _ __ _ __ __ _ _   _ ___
 //_\\| '__| '__/ _` | | | / __|
/  _  \ |  | | | (_| | |_| \__ \
\_/ \_/_|  |_|  \__,_|\__, |___/
                   |___/

Array and Functions Bonus Material

Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

*/

const maxOfTwoNumbers = function(a,b){
  if (a > b) {
    return a;
  } else {
    return b;
  }
};

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function(a,b,c) {
  if (a > b && a > c){
    return a;
  } else if (b > c){
    return b;
  } else {
    return c;
  }
};

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const isVowel = function(char) {
  if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
    return true;
  } else {
    return false;
  }
};

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

const sumArray = function(array1){
  let sumTotal = 0;
  for (var i = 0; i < array1.length; i++) {
    sumTotal += array1[i];
    console.log(sumTotal);
  }
};

const productArray = function(array1){
  let productTotal = 1;
  for (var i = 0; i < array1.length; i++) {
    productTotal = productTotal * array1[i];
    console.log(productTotal);
  }
};

/*

Homework: The Word Guesser
You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
Write a function called guessLetter that will:
Take one argument, the guessed letter.
Iterate through the word letters and see if the guessed letter is in there.
If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

*/
const secretWord = ['p', 'a', 's', 's', 'w', 'o', 'r', 'd'];
const lettersGuessed = [];

const setLettersGuessed = function (){
  for (let i = 0; i < secretWord.length ; i++){
      lettersGuessed.push('_');
  }
};

setLettersGuessed();

const printCorrectLetters = function () {
  let printString = '';
  for (let j = 0; j < lettersGuessed.length ; j++){
    printString += lettersGuessed[j];
  }
  console.log(`${printString}`);
};

const guessLetter = function (letter) {
  for (let k = 0; k < secretWord.length; k++) {
    if (letter === secretWord[k]) {
      lettersGuessed[k] = letter;
    }
  }
  printCorrectLetters();
};
