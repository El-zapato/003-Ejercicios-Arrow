//Contar ocurrencias de una letra en una cadena
//Escribe una función que cuente cuántas veces aparece una letra específica en una cadena.

function vecesrepite(cadena, caracter) {
    let contador = 0;

    for (let i = 0; i < cadena.length; i++){
        if (cadena[i] === caracter) {
            contador++;
        }
    }

    return contador;
}

const cadena=prompt("Escribe una palabra"); //ej. JavaScript
const caracter = "a";
const resultado= vecesrepite(cadena, caracter);

console.log("El caracter "+caracter+" aparece "+resultado+" en total")