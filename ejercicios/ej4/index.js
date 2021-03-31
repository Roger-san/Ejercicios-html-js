let pokeList = []
class Movements {
  constructor(id, name, description) {
    this.id = id
    this.name = name
    this.description = description
  }
}

class Pokemon {
  constructor(id, name, movements) {
    this.id = id
    this.name = name
    this.movements = movements
  }
}

const movementsDescription = (data) =>
  data.flavor_text_entries.filter(
    (x) => x.language.name === "es"
  )[0].flavor_text

const fetchMoves = (data) => {
  const arr = []
  data.forEach((x) =>
    fetch(x.move.url)
      .then((x) => x.json())
      .then((x) =>
        arr.push(
          new Movements(
            x.id,
            x.name,
            movementsDescription(x)
          )
        )
      )
  )
  //   arr.sort((a, b) => a.id - b.id)
  return arr
}

const pokeFetch = async () => {
  await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=25&offset=0"
  )
    .then((prom) => prom.json())
    .then((data) => data.results)
    .then((pokes) =>
      pokes.forEach((poke) =>
        fetch(poke.url)
          .then((prom) => prom.json())
          .then((data) =>
            pokeList.push(
              new Pokemon(
                data.id,
                data.name,
                fetchMoves(data.moves)
              )
            )
          )
      )
    )
  //   pokeList.sort((a, b) => a.id - b.id)
}

pokeFetch()

const render = () => {
  pokeList.sort((a, b) => a.id - b.id)
  pokeList.forEach((x) =>
    x.movements.sort((a, b) => a.id - b.id)
  )
  const box = document.querySelector("#box")
  box.innerHTML = ``
  console.log(pokeList)
}
setTimeout(render, 3000)
