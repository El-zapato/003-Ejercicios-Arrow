//Comprobar si una palabra es un palíndromo
//Escribe una función que determine si una palabra es un palíndromo (se lee igual al revés).

let palabra = prompt("Ingresa una palabra:").toLowerCase();
let palabraInvertida = palabra.split("").reverse().join("");

let espalindromo = palabra === palabraInvertida

if (espalindromo) {
  console.log(palabra+" es un palíndromo.");
} else {
  console.log(palabra+" no es un palíndromo.");
}

console.log("¿Es palindromo? "+espalindromo);