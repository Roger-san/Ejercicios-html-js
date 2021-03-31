const merge = (arr1, arr2) => {
  return [...new Set([...arr1, ...arr2])];
};

//

// const remove = (str, arr) => {
//   for (let elem of arr) {
//     if (elem === str) {
//       arr[arr.indexOf(elem)] = "s";
//       console.log(arr[arr.indexOf(elem)]);
//     }
//   }
//   return arr
// };
// console.log(remove("a", arr1));
//

const found = (str, arr) => {
  return arr.includes(str);
};

//

const random = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

//

const create = (num, x) => {
  return Array.from(new Array(num), () => x);
};

//

const move = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  return arr;
};

//

const filter = (arr) => {
  return arr.filter(
    (x) => !(x === false || x == null || x === 0 || x === "blank")
  );
};

// # Métodos de array
// ## Como empezar
// Crea un archivo `.js` y guardalo en tu carpeta de ejercicios asociado a su index.html correspondiente
// ## Descripción
// Dado el siguiente array:
// ```js
const users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];
// ```
// - Mapealo a un array de strings: `firstName-lastName: role`
// - Filtra aquellos usuarios con role de `Full Stack Resident`
// - Genera una función de búsqueda de un usuario por `firstName` con find.

const map = users.map((x) => `${x.firstName}-${x.lastName}: ${x.role}`);
const filterr = users.filter((x) => x.role === "Full Stack Resident");
const find = (name) => users.find((x) => x.firstName === name);
