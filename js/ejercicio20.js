//Comprobar si una cadena termina con una palabra
//Escribe una función que verifique si una cadena termina con una palabra específica usando endsWith().

function terminaCon(cadena, palabra) {
    return cadena.endsWith(palabra);
}

let resultado1 = terminaCon("Hola criatura del señor", "señor");
let resultado2 = terminaCon("Hola criatura del señor", "Hola");

console.log(resultado1); 
console.log(resultado2); 
