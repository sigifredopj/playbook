// Ejemplo 1: Crear un objeto

const objetoVacio = {}
console.log(objetoVacio)


// Ejemplo 2: Crear un objeto con propiedades

const objeto2 = {
    name: "Javier",
    age: 34
    }
console.log(objeto2)

// Ejemplo 3: Objeto con diferentes propiedades

const objeto3 = {
    name: "Javier",
    age: 34,
    nicknames: ["Javier", "Javi", "Sigi"],
    address: {
        zip_code: "40000",
        street: "Jaime Nuno",
        city: "Guadalajara"
    }
}
console.log(objeto3)
console.log(objeto3.name)
console.log(objeto3["nicknames"])
console.log(objeto3["address"])


// Ejemplo 4: Objeto con métodos

const objeto4 = {
    name: "Javier",
    sayHello: function(){
        console.log(`Hola, soy ${this.name}`)
    }  
}
console.log(objeto4)
objeto4.sayHello()



// Ejemplo 5: Objeto con método que recibe parámetros
const objeto5 = {
    name: "Javier",
    sayHelloToMyPet: function(yourPet){
        console.log(`Hola, soy ${this.name} y te saludo a ${yourPet}`)
    }   
}
console.log(objeto5)
objeto5.sayHelloToMyPet("Hades")
