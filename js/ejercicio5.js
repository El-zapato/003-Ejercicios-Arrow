//Reemplazar una palabra en una cadena
//Escribe una función que reemplace una palabra específica en una cadena con otra palabra usando replace().

var nombre = "Alexander Hamilton"
var apellido = "Hamilton"
var nValor= "Tierras"

var nuevoname = nombre.replace(apellido, nValor);

console.log("¿Eres "+nombre+"? No.")
console.log("Tu nombre debe ser "+nuevoname+", el culpable de robar gallinas");