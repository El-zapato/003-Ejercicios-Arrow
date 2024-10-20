//Comprobar si una cadena comienza con una palabra
//Crea una función que verifique si una cadena comienza con una palabra específica usando startsWith().

function comienzaCon(cadena, palabra) {
    return cadena.startsWith(palabra);
}

// Ejemplo de uso
let resultado1 = comienzaCon("Hola, Peter", "Hola");
let resultado2 = comienzaCon("Hola, Peter", "Peter");

console.log(resultado1);
console.log(resultado2); 
