const input = document.querySelector("#myText");
const button = document.querySelector("#button");
const list = document.querySelector("#list");
const texts = [];
const del = (asd) => {
  console.log(asd);
};
function addToList() {
  const text = input.value;

  if (text === "") {
    return alert("El input está vacío");
  }
  const li = texts.push({ value: text });
  list.innerHTML = texts
    .map(
      (obj) =>
        `<li><p>${obj.value}</p><button onclick="del('${obj.value}')">borrar</button></li>`
    )
    .join("");
}

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addToList();
  }
});

button.addEventListener("click", addToList);
