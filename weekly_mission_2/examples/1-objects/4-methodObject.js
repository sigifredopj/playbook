// Ejemplo 4: Objeto con métodos

const objeto4 = {
    name: "Javier",
    sayHello: function(){
        console.log(`Hola, soy ${this.name}`)
    }  
}
console.log(objeto4)
objeto4.sayHello()