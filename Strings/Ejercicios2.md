# Ejercicios
Crea un archivo `.js` y guardalo en tu carpeta de ejercicios
# Descripción
- Dado el siguiente bloque, completa la función para que retorne si el parámetro es o no es un string:
  ```js
  function isString(param) {
    return false;
  }
  console.log(isString("Foo"));
  console.log(isString(["Foo", "Bar"]));
  ```
- Dado el siguiente bloque, completa la función para que retorne si el parámetro es un string vacío o no:
  ```js
  function isBlank(param) {
    return false;
  }
  console.log(isBlank("Foo"));
  console.log(isBlank(" "));
  console.log(isBlank(""));
  ```
- Dado el siguiente bloque, completa la función para que retorne un string partido en un array de palabras:
  ```js
  function toWords(quote) {
    return quote;
  }
  console.log(toWords("El conejo blanco entró en la madriguera"));
  ```
- Dado el siguiente bloque, completa la función para que retorne un número de caracteres concreto de un string:
  ```js
  function truncate(str, number) {
    return false;
  }
  console.log(truncate("Código limpio", 4));
  console.log(truncate("Código sucio", 1));
  console.log(truncate("Somos programadores ", 0));
  console.log(truncate(" Somos programadores", 6));
  ```
- Dado el siguiente bloque, completa la función para que retorne, la forma abreviada de un nombre:
  ```js
  function abbrevName(name) {
    return name;
  }
  console.log(abbrevName("Iván Zamarro")); // -> Ivan Z.
  console.log(abbrevName("Juan Sánchez ")); // -> Juan S.
  console.log(abbrevName(" Pedro Morillo ")); // -> Pedro M.
  ```
- Dado el siguiente bloque, completa la función para que retorne, el email de un usuario protegido:
  ```js
  function protectEmailStr(email) {
    return email;
  }
  console.log(protectEmailStr("ivanzamarro@gmail.com")); // ivan...@gmail.com
  console.log(protectEmailStr("p.mar_69@gmail.com"));
  console.log(protectEmailStr("fake_account@gmail.com "));
  ```
- Dado el siguiente bloque, completa la función para que retorne, un string parametrizado:
  ```js
  function parameterize(str, param) {
    return false;
  }
  console.log(parameterize("Iván Zamarro de España", "-")); // iván-zamarro-de-españa
  console.log(parameterize(" Juan Carlos de Bobón ", "*")); // juan*carlos*de*bobón
  ```
- Dado el siguiente bloque, completa la función para que retorne, la primera letra en mayusculas de un string:
  ```js
  function capitalizeFirst(str) {
    return false;
  }
  console.log(capitalizeFirst("iván zamarro")); // Iván Zamarro
  ```
- Dado el siguiente bloque, completa la función para que retorne, la primera letra en mayusculas de cada palabra:
  ```js
  function capitalizeWords(str) {
    return str.replace(null, (word) => {
      return "";
    });
  }
  console.log(capitalizeFirst("iván zamarro")); // Iván Zamarro
  ```
- Dado el siguiente bloque, completa la función para que retorne, un string en el que inyectamos otro en determinada posición:
  ```js
  function injectstr(str, strToInject, position) {
    return false;
  }
  console.log(injectstr("JavaScript", "mola ", 0)); // mola JavaScript
  console.log(injectstr("We are doing some exercises", "JavaScript", 18)); // We are doing some JavaScript exercises.
  ```
- Dado el siguiente bloque, completa la función para que retorne, un string en el que borramos la primera ocurrencia que nos pasen:
  ```js
  function removeFirst(str, strToRemove) {
    return false;
  }
  console.log(removeFirst("JavaScript mola, pero es dificil", " mola, pero")); // JavaScript es dificil
  ```
marca_de_verificación_blanca
ojos
manos_levantadas
















Enviar mensaje a mad-full-stack-part-time-sept






