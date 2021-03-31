```js
const s = "Hello, world"; // empezamos con un texto
// Obteniendo posiciones
s.substring(1, 3); // => ell: 2º y 3º y 4º caraceter
s.slice(1, 4); // => ell: lo mismo
s.slice(-3); // => rld: ultimos 3 caracteres
s.split(", "); // => ["Hello", "world"]: parte por string delimitador
// Buscando un string
s.indexOf("l"); // => 2: posicion de la primera letra "l"
s.indexOf("l", 3); // => 3: posicion de la primera "l" en o despues de 3 posiciones
s.indexOf("zz"); // => -1: no existe el substring
s.lastIndexOf("l"); // => 10: posicion de la ultima "l"
// Busqueda booleana
s.startsWith("Hell"); // => true: el string empieza asi
s.endsWith("!"); // => false: el string no finaliza asi
s.includes("or"); // => true: el string incluye el substring "or"
// Creando o modificando versiones de un string
s.replace("llo", "ya"); // => Heya, world
s.toLowerCase(); // => "hello, world"
s.toUpperCase(); // => "HELLO, WORLD"
// Inspeccionando strings
s.charAt(0); // => H: el primer caracter
s.charAt(s.length - 1); // => d: el ultimo caracter
// Padding
"x".padStart(3); // => "  x": añade espacios a la izquierda hasta una longitud de 3
"x".padEnd(3); // => "x  ": añade espacios a la izquierda hasta una longitud de 3
"x".padStart(3, "*"); // => "**x": añade * a la izquierda hasta una longitud de 3
"x".padEnd(3, "-"); // => "x--": añade - a la izquierda hasta una longitud de 3
// Triming
" test ".trim(); // => "test": elimina los espacions en blanco
" test ".trimStart(); // => "test ": elimina los espacions en blanco al inicio
" test ".trimEnd(); // => " test": elimina los espacions en blanco al final
// Otros
s.concat("!"); // => "Hello, world!"
"*".repeat(5); // => "*****": repite n copias
```