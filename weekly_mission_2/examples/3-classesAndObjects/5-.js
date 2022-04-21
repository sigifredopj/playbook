// Ejemplo 5: Atributos con valores por default


class PullRequest {
    constructor(repository, title, number){
        this.repository = repository
        this.title = title
        this.number = number
        this.status = "open"
        this.dateCreated = new Date()
    }
    getInfo(){
        return `This PR is in the repo: ${this.repository} (status: ${this.status}) and was created on ${this.dateCreated}`
    }
}
console.log("Ejemplo 5: Atributos con valores por default")
const myPR1 = new PullRequest("LaunchX", "Mi Primer PR", 100)
console.log(myPR1.getInfo())

    // Puedes instanciar n cantidad de objetos de la misma clase
const myPR2 = new PullRequest("LaunchX", "Mi segundo PR", 99)
console.log(myPR2.getInfo())

