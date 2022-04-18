// Ejemplo 5: Objeto con método que recibe parámetros
const objeto5 = {
    name: "Javier",
    sayHelloToMyPet: function(yourPet){
        console.log(`Hola, soy ${this.name} y te saludo a ${yourPet}`)
    }   
}
console.log(objeto5)
objeto5.sayHelloToMyPet("Hades")
