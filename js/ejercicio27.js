//Convertir una cadena a snake_case
//Crea una función que convierta una cadena a formato snake_case.

function convertirSnakeCase(frase) {
    return frase
        .toLowerCase()
        .replace(/\s+/g, '_') 
        .replace(/[^\w_]/g, ''); 
}

let resultado = convertirSnakeCase("Saludos terricolas, plantas y zombis");
console.log(resultado); 
