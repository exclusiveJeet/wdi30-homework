/*
Part 1
Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
Bonus: Round the result so there are only two digits after the decimal.
Part 2
Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

Take half of the number and store the result.
Square the result of #1 and store that result.
Calculate the area of a circle with the result of #2 as the radius.
Calculate what percentage that area is of the squared result (#3).
*/


let squareNumber = function(x) {
  squareNumber = x * x;
  console.log(`The result of squaring the number ${ x } is ${ squareNumber }.`);
  return squareNumber;
}
const answer = squareNumber(3);
console.log(answer);

/*

let halfNumber = function(x) {
  halfNumber = x / 2;
  console.log(`Half of ${ x } is ${ halfNumber}.`);
  return halfNumber;
}
halfNumber(10);



let percentOf = function(x, y) {
  percentOf = x / y;
  console.log(percentOf);
  return `${ x } is ${ percentOf }% of ${ y }`;
}

percentOf(5, 10);





var areaOfCircle = function(radius) {
  areaOfCircle = radius * radius * 3.14;
  console.log(areaOfCircle);
  return `The area for a circle with ${ radius } is math.round(${ areaOfCircle}).`;
}
areaOfCircle(10);


var part2 = function(x) {
  var newHalfNumber = x / 2;
  var newSquareNumber = newHalfNumber * newHalfNumber;
  var newAreaOfCircle = areaOfCircle(newSquareNumber);
  var newPercentage = percentOf(newAreaOfCircle, )
}

*/
