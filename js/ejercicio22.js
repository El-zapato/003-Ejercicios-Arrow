//Convertir una frase a camelCase
//Escribe una función que convierta una frase a formato camelCase.

function convertircamelCase(frase) {
    return frase
        .toLowerCase() 
        .split(' ') 
        .map((palabra, index) => {
            if (index === 0) return palabra;
            return palabra.charAt(0).toUpperCase() + palabra.slice(1);
        })
        .join('');
}

let resultado = convertircamelCase("hola a todos los que leen esto");
console.log(resultado);
