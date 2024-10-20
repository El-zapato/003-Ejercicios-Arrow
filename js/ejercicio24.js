//Comprobar si una cadena contiene solo números
//Escribe una función que verifique si una cadena contiene solo números.

function soloNumeros(cadena) {
    return /^\d+$/.test(cadena);
}

let resultado1 = soloNumeros("12345");
let resultado2 = soloNumeros("123a5");
let resultado3 = soloNumeros("0000");

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
