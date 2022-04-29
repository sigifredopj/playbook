const repo = {
    name: "playbook",
    author: "sigi",
    language: "JavaScript",
    numberOfCommits: 88,
    stars: 1,
    forks: 2,
    issues_open: 0,
    issues_close: 0,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())