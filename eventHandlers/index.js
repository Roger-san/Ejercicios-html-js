const button = document.querySelector("#button")
const inputText = document.querySelector("#text")
const ul = document.querySelector("#ul")
let text = []

const consoleLog = () => console.log("patatas")
const saveText = () => {
  text.push(inputText.value)
  inputText.value = ""
  const lis = text.map((tex) => `<li>${tex}</li>`)
  ul.innerHTML = lis.join("")
  console.log(text)
  console.log(lis)
}

button.addEventListener("click", saveText)
// window.addEventListener("keydown", (e) => {
//   console.log(e)
// })
