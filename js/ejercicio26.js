//Crear una función que devuelva la palabra más larga en una cadena
//Escribe una función que encuentre la palabra más larga en una cadena.

function palabraLarga(cadena) {
    let palabras = cadena.split(' ');

    return palabras.reduce((masLarga, palabraActual) => {
        return palabraActual.length > masLarga.length ? palabraActual : masLarga;
    }, '');
}

let resultado = palabraLarga("Te amamos Metroman, y yo a tu ciudadano promedio");
console.log(resultado);
