//Remover caracteres especiales de una cadena
//Crea una función que elimine todos los caracteres especiales (como @, #, !) de una cadena.

function caraEspecial(cadena) {
    return cadena.replace(/[^a-zA-Z0-9\s]/g, '');
}

let resultado = caraEspecial("Como te a ido la vida 39*@^");
console.log(resultado); 
