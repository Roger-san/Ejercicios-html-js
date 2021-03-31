const box = document.querySelector("#box");

const random = () => Math.floor(Math.random() * 255);

const randomColor = () =>
  (box.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`);

document.querySelector("#button").addEventListener("click", randomColor);
