//Convertir una cadena en un array de palabras
//Escribe una función que divida una cadena en un array de palabras usando split().

function dividirPalabra(cadena) {
    return cadena.split(' ');
}

let resultado = dividirPalabra("Una animacion nos muestra que el proximo integrante de Digital Circus...");
console.log(resultado);
