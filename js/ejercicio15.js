//Obtener el último carácter de una cadena
//Crea una función que devuelva el último carácter de una cadena sin usar length.

function ultimoCaracter(cadena) {
    let ultimoCarc = '';
    for (let i = 0; ; i++) {
        if (cadena.charAt(i) === '') break;
        ultimoCarc = cadena.charAt(i);
    }
    return ultimoCarc;
}

let resultado = ultimoCaracter("Hola combinacion de carbono, hidrogeno, oxigeno y nitrogeno");
console.log(resultado); 
