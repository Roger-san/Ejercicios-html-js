function testSize(num) {
  return;
}
// console.assert();

//

function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}
console.assert(testSize(3) === "Tiny");

//

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}

console.assert(testElseIf(5) === "Between 5 and 10");

//

// function orderMyLogic(val) {
//   if (val < 5) {
//     return "Is less than 5";
//   } else if (val < 10) {
//     return "Is less than 10";
//   } else {
//     return "Is greater than or equal to 10";
//   }
// }

// console.assert(orderMyLogic(4) === "Is less than 5");
// console.assert(orderMyLogic(9) === "Is less than 10");
// console.assert(orderMyLogic(10) === "Is greater than or equal to 10");
// console.assert(orderMyLogic(11) === "Is greater than or equal to 10");

// //

// const confirmation = confirm("Entras en la cabaña");
// if (confirmation === false) {
//   alert("Game over");
// } else {
//   const chairSelection = prompt("Eliges la silla: grande, mediana o pequeña.");
//   if (chairSelection === "grande") {
//     alert("Intentas subirte pero es demasiado grande :(");
//   } else if (chairSelection === "pequeña") {
//     alert("Game over");
//   } else if (chairSelection === "mediana") {
//     alert("Que silla mas comoda!!");
//     alert("Te encuentras unas gachas");
//     const foodSelection = prompt(
//       "Como te apetecen? calientes, templadas, frias."
//     );
//     if (foodSelection === "calientes") {
//       alert("Te quemastes la lengua!!");
//     } else if (foodSelection === "frias") {
//       alert("Se te congelo la lengua :(");
//     } else if (foodSelection === "templadas") {
//       alert("Que ricas!");
//       alert(`Despues de ese manjar te entra sueño,
// gracias a dios hay unas camas en la habitacion de al lado`);
//       const bedSelection = prompt(
//         "Cual te apetece mas? la grande, mediana o pequeña?"
//       );
//       if (bedSelection === "grande") {
//         alert("La cama es tan grande que te acabas hundiendo dentro");
//       } else if (bedSelection === "pequeña") {
//         alert("Es tan pequeña que no puedes ni entrar");
//       } else if (bedSelection === "mediana") {
//         alert("La cama es tan comoda que te duermes en un santiamen");
//         alert(`Horas despues te despiertas y te encuentras
// rodeada por los dueños de la casa:
// !!Los osos!!`);
//       } else if (bedSelection === null) {
//         alert(":(");
//       } else {
//         alert("Para la proxima tienes que poner: grande, mediana o pequeña");
//       }
//     } else if (foodSelection === null) {
//       alert(":(");
//     } else {
//       alert("Para la proxima tienes que poner: calientes, templadas o frias");
//     }
//   } else if (chairSelection === null) {
//     alert(":(");
//   } else {
//     console.log(chairSelection);
//     alert("Para la proxima tienes que poner: grande, mediana o pequeña");
//   }
// }

//

function caseInSwitch(val) {
  let anwser = "";
  switch (val) {
    case 1:
      anwser = "alpha";
      break;
    case 2:
      anwser = "beta";
      break;
    case 3:
      anwser = "gamma";
      break;
    case 4:
      anwser = "delta";
      break;
  }
  return anwser;
}
console.assert(caseInSwitch(1) === "alpha");
console.assert(caseInSwitch(2) === "beta");
console.assert(caseInSwitch(3) === "gamma");
console.assert(caseInSwitch(4) === "delta");
console.assert(caseInSwitch(5) === "");

//

function sequentialSizes(val) {
  let anwser = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      anwser = "Low";
      break;
    case 4:
    case 5:
    case 6:
      anwser = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      anwser = "High";
      break;
  }
  return anwser;
}
console.assert(sequentialSizes(1) === "Low");
console.assert(sequentialSizes(4) === "Mid");
console.assert(sequentialSizes(7) === "High");
console.assert(sequentialSizes(10) === "");
