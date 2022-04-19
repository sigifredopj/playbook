// Ejemplo 7: Uso de filter para filtrar una lista de elementos
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland', 'Rusia', 'Alemania']
const countriesContainingLand = countries.filter((country) => 
    country.includes('land')
)
console.log(countriesContainingLand)
const countriesEndsByia = countries.filter((country) => country.endsWith('ia'))

console.log(countriesEndsByia)
