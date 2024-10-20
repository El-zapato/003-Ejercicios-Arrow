//Contar el número de palabras en una cadena
//Crea una función que cuente cuántas palabras hay en una cadena usando split() y length.

function contarPalabra(cadena) {
    let palabras = cadena.split(' ');
    return palabras.filter(palabra => palabra !== '').length;
}

let resultado = contarPalabra("Una animacion nos muestra que el proximo integrante de Digital Circus...");
console.log(resultado);
