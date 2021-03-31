function maxNumber(num1, num2) {
  return Math.max(num1, num2);
}

function sign(num1, num2, num3) {
  const product = num1 * num2 * num3;

  return product < 0 ? "-" : "+";
}

// function orderArray(array) {
//   if (array[0] > array[1] && array[1] > array[2]) {
//     return array;
//   } else if (array[0] < array[1] && array[1] > array[2]) {
//     return [array[1]];
//   }
// }

function bigNumber(arr) {
  let max = arr[0];

  for (let x = 1; x < arr.length; x++) {
    if (arr[x] > max) {
      max = arr[x];
    }
  }

  return max;
}

// function parimpar() {
//   let arr = [];
//   for (let x = 0; x < 16; x++) {
//     if (x % 2 === 0) {
//       arr.push({ value: x, type: "even" });
//     } else {
//       arr.push({ value: x, type: "odd" });
//     }
//   }
//   console.log(arr);
//   return arr;
// }
function mediaStudent(name, note) {
  if (note < 60) {
    return "F";
  } else if (note < 70) {
    return "D";
  } else if (note < 80) {
    return "C";
  } else if (note < 90) {
    return "B";
  } else if (note < 100) {
    return "A";
  }
}

function fizzBuzz(x = 4) {
  if (x % 3 === 0 && x % 5 === 0) {
    return "FizzBuzz";
  } else if (x % 3 === 0) {
    return "Fizz";
  } else if (x % 5 === 0) {
    return "Buzz";
  }
  return x;
}

function hola(name = [1, 2, 2, 3]) {
  return `hola ${name}`;
}

console.log(hola(null));
