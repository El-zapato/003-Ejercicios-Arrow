//Eliminar todas las vocales de una cadena
//Escribe una función que elimine todas las vocales de una cadena.

function eliminarVocales(cadena) {
    return cadena.replace(/[aeiouAEIOU]/g, '');
}

let resultado = eliminarVocales("¿Sabes lo que es un pollo de montaña?");
console.log(resultado);
