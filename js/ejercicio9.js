//Convertir la primera letra a mayúscula
//Crea una función que convierta la primera letra de una cadena en mayúscula.

let palabra=prompt("Escribe una palabra"); //ej. JavaScript

let mayusculaPL=palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();

console.log("La palabra es "+mayusculaPL);