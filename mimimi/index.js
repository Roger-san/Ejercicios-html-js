const textArea = document.querySelector("#text");
const convertButton = document.querySelector("#convert");
const opinion = document.querySelector("#opinion");
convertButton.onclick = () => {
  const { value: text } = textArea;
  const newText = text.replace(/[aeou]/gmi, "i");
  /*No toques la siguiente línea*/
  opinion.innerHTML = `<b>${newText}</b>`;
};
