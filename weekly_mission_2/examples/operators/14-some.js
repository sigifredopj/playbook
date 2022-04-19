
/* Ejemplo 14: Uso de some, este método validará todos los elementos de la lista, 
y si alguno cumple con la validación indicada, regresará true, de lo contrario será false.*/

const bools = [true, true, false, true]
const result = bools.some((bool) => bool)
console.log("Ejemplo 14: Alguno de los elementos de la lista cumple con la validación: " + result)

