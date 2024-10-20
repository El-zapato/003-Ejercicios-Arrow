//Concatenar dos cadenas
//Crea una función que reciba dos cadenas y las concatene usando concat() o +.

function concatenar(cadena1, cadena2) {
    //Usando el metodo concat()
    let resultadoConcat = cadena1.concat(cadena2);
    
    //Usando la suma +
    let resultadoSuma = cadena1 + cadena2;
    
    return {
        resultadoConcat: resultadoConcat,
        resultadoSuma: resultadoSuma
    };
}

let cadenas = concatenar("Hola, ", "vecirijillo");
console.log(cadenas.resultadoConcat);
console.log(cadenas.resultadoSuma); 
