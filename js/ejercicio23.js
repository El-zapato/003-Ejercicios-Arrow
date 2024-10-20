//Truncar una cadena a un número de caracteres
//Crea una función que trunque una cadena a un número específico de caracteres, agregando ... al final si es más larga.

function truncaCadena(cadena, limite) {
    if (cadena.length <= limite) {
        return cadena;
    }
    return cadena.slice(0, limite) + '...';
}

let resultado1 = truncaCadena("Hola pequeña bola de peluza", 10);
let resultado2 = truncaCadena("Hola", 10);

console.log(resultado1);
console.log(resultado2);
