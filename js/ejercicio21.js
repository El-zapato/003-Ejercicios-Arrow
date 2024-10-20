//Reemplazar todas las ocurrencias de una palabra
//Crea una función que reemplace todas las ocurrencias de una palabra en una cadena usando replaceAll().

function remplazarPalabra(cadena, palOriginal, newPalabra) {
    return cadena.replaceAll(palOriginal, newPalabra);
}

let resultado = remplazarPalabra("Hola, tonoto estas bien hermoso.", "tonoto", "personita");
console.log(resultado);
