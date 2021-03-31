// const test = (x) => (x <= 50 && x >= 25 ? "si" : "no");

const test = (x) => {
  if (x <= 50 && x >= 25) {
    return "si";
  }
  return "no";
};

//

const mayorIgualQue = (x) => {
  if (x >= 25) {
    return "Es 25 o mayor";
  }
  if (x >= 15) {
    return "Es 15 o mayor";
  }
  return "Es menor que 15";
};

//

const estrictamenteIgual = (x) => {
  if (x === 12) {
    return "si";
  }
  return "no";
};

//

const esDeTipoString = (x) => {
  if (typeof x === "string") {
    return "Es un tipo string";
  }
  return "No es un tipo string";
};

//

const isAnAdult = (age, min) => {
  if (age >= min) {
    return "Es un adulto";
  }
  return "Es un niño";
};

//

const hasProperty = (x, y) => {
  return x in y;
};
console.log(hasProperty(3, []));
console.log(hasProperty("x", {}));
console.log(hasProperty("y", { x: 1 }));
console.log(hasProperty("y", { x: 1, y: 2 }));

//

const isNull = (x) => {
  return x == null;
};
console.log(isNull(null));
console.log(isNull(undefined));
console.log(isNull(0));
console.log(isNull([]));

//

const tester = (x, condicion) => condicion(x) && true;

//

const tester = (x, condicion) => `${x} `;

let a = 1;
let b = 2;
let c = 3;
const sumaAsignement = () => {
  a += 11;
  b += 9;
  c += b;
};
const restaAsignement = () => {
  a -= 5;
  b -= a;
  c -= 8;
};
const multAsignement = () => {
  a *= 10;
  b *= 2;
  c *= 3;
};
const divAsignement = () => {
  a /= 1;
  b /= 2;
  c /= 3;
};

const isOdd = (x) => x % 2 !== 0;

//

const saludar = (x) => {
  let gretting = "";
  return (gretting += x);
};

//

const isEqual = (a, b) => (a === b ? "son iguales" : "no lo son");

//

const layout = (x) =>  x >= 660  ? x >= 960 ? "Es large" : "Es medium" : "Es small"

//