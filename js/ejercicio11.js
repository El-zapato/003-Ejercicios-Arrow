//Revertir una cadena
//Crea una función que tome una cadena y la devuelva invertida.

const string = "Hola";

function revertir(str) {
  let revirtiendo = str.split("");

  return revirtiendo.reverse().join("");
}

console.log(revertir(string)); 