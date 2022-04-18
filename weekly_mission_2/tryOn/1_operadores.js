// Ejemplo 1: for Each para imprimir elementos de una lista
const [numbers] = [1, 2, 3, 4, 5];
numbers.forEach(num => { 
    console.log(num)
});


// Ejemplo 2: for Each para calcular la suma de todos los elementos de una lista
let sum = 0;
const [numbers2] = [1, 2, 3, 4, 5];
numbers2.forEach(num => {
    sum += num;
})
console.log(sum)


// Ejemplo 3: forEach para imprimir los países en letras mayúsculas

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];
countries.forEach((element) => {
    console.log(element.toUpperCase())
})

// Ejemplo 4: Uso de map para recorrer los elementos de una lista y crear una nueva lista

const list = [1, 2, 3, 4, 5];
const modifiedArray = list.map((element, index) => element);
console.log(modifiedArray)


// Ejemplo 5: Uso de Map para convertir todos los nombres de una lista a minúsculas


// Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas


// Ejemplo 7: Uso de filter para filtrar una lista de elementos


// Ejemplo 8: Filtrar una lista por condicional


// Ejemplo 9: Uso del reduce


// Ejemplo 10: uso de every nos ayuda a validar todos los elementos de una lista, si todos cumplen con la validación que indiques te regresa true, de lo contrario false


// Ejemplo 11: Uso de find para encontrar el primer elemento de una lista que cumpla con lo que indiques


// Ejemplo 12: Uso de find en una lista de objetos


// Ejemplo 13: Uso de findIndex, este método regresa la posición del primer elemento que cumpla con la validación que indiques.


// Ejemplo 14: Uso de some, este método validará todos los elementos de la lista, y si alguno cumple con la validación indicada, regresará true, de lo contrario será false.



//Ejemplo 15: Uso de sort para ordenar elementos


// Ejemplo 16: Ordenando una lista de objetos
