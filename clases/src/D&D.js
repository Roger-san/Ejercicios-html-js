// ## Generador de personajes de D&D
// En el juego de D&D cada jugador comienza generando un personaje con el que jugar. Este personaje tiene,
//  entre otras cosas, seis habilidades; `strength`, `dexterity`, `constitution`, `intelligence`, `wisdom`, `charisma`.
//  Estas seis habilidades tienen puntuaciones que se determinan al azar. Para determinarlas, 
// tira cuatro dados de 6 caras y registra la suma de los tres dados más grandes. Haces esto seis veces, una por cada habilidad.
// // Los `hitPoints` iniciales de tu personaje son `10 + constitutionModifier`. 
// Puedes calcular `constitutionModifier` de tu personaje restando 10 de `constitution`, 
// dividiendolo entre 2 y redondeando hacia abajo.
// Escribe un generador de personajes aleatorio que siga las reglas anteriores.
// Por ejemplo, los seis lanzamientos de cuatro dados pueden parecerse a lo siguiente:
// - 5, 3, 6, 1: Descartas el 1 y sumas 5 + 3 + 6 = 14, y lo asignas a `strength`
// - 3, 2, 5, 3: Descartas el 2 y sumas 3 + 5 + 3 = 11, y lo asignas a `dexterity`
// - 1, 1, 1, 1: Descartas el 1 y sumas 1 + 1 + 1 = 3, y lo asignas a `constitution`
// - 2, 1, 6, 6: Descartas el 1 y sumas 2 + 6 + 6 = 14, y lo asignas a `intelligence`
// - 3, 5, 3, 4: Descartas el 3 y sumas 5 + 3 + 4 = 12, y lo asignas a `wisdom`
// - 6, 6, 6, 6: Descartas el 6 y sumas 6 + 6 + 6 = 18, y lo asignas a `charisma`
// Como la constitucion es 3, el `constitutionModifier` es -4 y los `hitPoints` son 6