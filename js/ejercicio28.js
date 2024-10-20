//Capitalizar todas las palabras de una frase
//Escribe una función que convierta la primera letra de cada palabra de una cadena a mayúscula.

function PriLetraMay(cadena) {
    return cadena
        .split(' ') 
        .map(palabra => 
            palabra.charAt(0).toUpperCase() + palabra.slice(1) 
        )
        .join(' '); 
}

let resultado = PriLetraMay("saludos terricolas, plantas y zombis");
console.log(resultado);
