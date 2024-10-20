//Contar la frecuencia de caracteres en una cadena
//Escribe una función que cuente la frecuencia de cada carácter en una cadena y devuelva un objeto con los resultados.

function frecuenciaCar(cadena) {
    const frecuencia = {};

    for (const caracter of cadena) {
        frecuencia[caracter] = (frecuencia[caracter] || 0) + 1;
    }

    return frecuencia;
}

let resultado = frecuenciaCar("un saludo a mi mamá");
console.log(resultado);
