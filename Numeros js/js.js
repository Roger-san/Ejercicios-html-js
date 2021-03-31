function randomInt(min, max) {
  return min + Math.round(Math.random()) * (max - min +1)
}

console.log(Number.isInteger(randomInt(1, 10)));

//

function toDecimals(number, decimals) {
  return number.toFixed(decimals);
}

console.log(toDecimals(3.100212, 2) === "3.10");
console.log(toDecimals(3.100212, 3) === "3.100");

//

function isNumber(arg) {
  return typeof Number.parseInt(arg, 10) === "number";
}
// !isNaN(parseFloat(n)) && isFinite(n)
console.log(isNumber(2));
console.log(isNumber(3.43));
console.log(isNumber("3.1"));

//

function pythagorean(a, b) {
  return Math.sqrt(a*a+b*b);
}

console.log(pythagorean(3, 4)); // -> 5

//

function round5(num) {
  return Math.log5(num);
}

console.log(round5(32)); // -> 35
console.log(round5(137));