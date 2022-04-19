// Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesSlice = countries.map((country) =>
    country.toUpperCase().slice(0, 3)) // el método slice obtiene solo 3 caracteres
console.log(countriesSlice)
