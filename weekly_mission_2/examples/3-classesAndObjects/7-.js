
// Ejemplo 7: Setters para modificar los atributos del objeto
class MissionCommander {
    constructor(name, mission){
        this.name = name
        this.mission = mission
        this.students = 40
        this.lives = 6
    }
    
    get getStudents(){
        return this.students
    }
    
    get getLives(){
        return this.lives
    }
    
    set setStudents(students){
        this.students = students
    }
    
    set setLives(lives){
        this.lives = lives
    }
    }
    
    console.log("Ejemplo 7: Setters para modificar los atributos del objeto")   
    const missionCommanderNode = new MissionCommander("Carlo", "NodeJS")

    console.log(missionCommanderNode.getStudents) // 0 por default
    console.log(missionCommanderNode.getLives)// 0 por default

