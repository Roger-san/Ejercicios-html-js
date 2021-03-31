const perro = "perro";
const come = " come a perro";
console.log(perro + come);

const nombre = "Roger ";
const apellido = "Sanchez";
console.log((nombre += apellido));

const firstQuote = " Mi nombre es";
const lastQuote = " ¿como estas?";
console.log(`${firstQuote} ${nombre} ${lastQuote}`);

const myStr = `Soy un string "con dobles comillas", dentro de "dobles comillas"`;
console.log(myStr);

const myString =
  "Soy un string 'con dobles comillas', dentro de 'dobles comillas'";
console.log(myString);

const backslash = "Se usa \\ para escapar codigo";
console.log(backslash);

const retorno = "Esto es un retorno de \ncarro";

const tab = "Esto es una\ttabulacion";

let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;

let firstLetterOfLastName = 0;
const fullName = "Ada Lovelace";
const name = fullName.split(" ")[0];
const _apellido = fullName.split(" ")[1];

const noun = "perro";
const adjetive = "grande";
const verbo = "corre";
const adverb = "rapido";
let blanks = `el ${noun} ${adjetive} ${verbo} mas ${adverb}`;

function isString(param) {
  for (let x = 0; x < param.length; x++) {
    if (typeof param[x] === "string") {
    } else {
      return false;
    }
  }
  return true;
}
console.log(isString("Foo"));
console.log(isString(["Foo", "Bar"]));

function isBlank(param) {
  param === "";
}
console.log(isBlank("Foo"));
console.log(isBlank(" "));
console.log(isBlank(""));

function toWords(quote) {
  return quote.split(" ");
}
console.log(toWords("El conejo blanco entró en la madriguera"));

function truncate(str, number) {
  return str.slice(0, number);
}
console.log(truncate("Código limpio", 4));
console.log(truncate("Código sucio", 1));
console.log(truncate("Somos programadores ", 0));
console.log(truncate(" Somos programadores", 6));

function abbrevName(name) {
  let nombre = name.trimStart().split(" ")[0];
  let apellido = name.split(" ")[1][0] + ".";
  return `${nombre} ${apellido}`;
}
console.log(abbrevName("Iván Zamarro")); // -> Ivan Z.
console.log(abbrevName("Juan Sánchez ")); // -> Juan S.
console.log(abbrevName(" Pedro Morillo ")); // -> Pedro M.

function protectEmailStr(email) {
  let separation = email.split("@");
  let emilio = separation[0].slice(0, 4);
  return `${emilio}...@${separation[1]}`;
}
console.log(protectEmailStr("ivanzamarro@gmail.com")); // ivan...@gmail.com
console.log(protectEmailStr("p.mar_69@gmail.com"));

function parameterize(str, param) {

  return str.trim().replace(//);
}
console.log(parameterize("Iván Zamarro de España", "-")); // iván-zamarro-de-españa
console.log(parameterize(" Juan Carlos de Bobón ", "*")); // juan*carlos*de*bobón


// function capitalizeFirst(str) {
//   return false;
// }
// console.log(capitalizeFirst("iván zamarro")); // Iván Zamarro



// function capitalizeWords(str) {
//   return str.replace(null, (word) => {
//     return "";
//   });
// }
// console.log(capitalizeFirst("iván zamarro")); // Iván Zamarro



// function injectstr(str, strToInject, position) {
//   return false;
// }
// console.log(injectstr("JavaScript", "mola ", 0)); // mola JavaScript
// console.log(injectstr("We are doing some exercises", "JavaScript", 18)); // We are doing some JavaScript exercises.



// function removeFirst(str, strToRemove) {
//   return false;
// }
// console.log(removeFirst("JavaScript mola, pero es dificil", " mola, pero")); // JavaScript es dificil

