//Comprimir una cadena eliminando letras consecutivas repetidas
//Crea una función que elimine las letras consecutivas repetidas en una cadena.

function letraRep(cadena) {
    return cadena.replace(/([a-zA-Z])\1+/g, '$1');
}

let resultado = letraRep("saaaaarrrraaaampiiiiiioooonnnnnn");
console.log(resultado); 
