//Obtener el carácter en una posición
//Escribe una función que devuelva el carácter en una posición específica de una cadena usando charAt().

function caracter(cadena, posicion) {
    if (posicion < 0 || posicion >= cadena.length) {
        return "Posición inválida";
    }
    return cadena.charAt(posicion);
}

let resultado = caracter("Hola tonotos", 8);
console.log(resultado); 
