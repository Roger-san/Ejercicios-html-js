const p1 = []
const p2 = []

let player = "p1"

const winCondition = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
]
const changePlayer = () => {
  if (player === "p1") player = "p2"
  else player = "p1"
}
const addCell = (number) => {
  player === "p1" ? p1.push(number) : p2.push(number)
}
const renderCells = () => {
  const container = document.getElementById("flex")
  for (let x = 1; x < 10; x++) {
    const div = document.createElement("div")
    div.id = x
    div.addEventListener("click", (event) => {
      if (!event.target.className) {
        event.target.className = player
        addCell(Number.parseInt(event.target.id))
        didWin()
        changePlayer()
      }
    })
    container.appendChild(div)
  }
}
const didWin = () => {
  winCondition.forEach((condition) =>
    condition.every((number) => p1.includes(number))
      ? alert("you win")
      : console.log("meh")
  )
}

renderCells()
