const PullRequest = {
    title: 'New',
    branchName: 'Example',
    dateCreated: '01/01/2022',
    status: 'updated',
    repositoryNameAssociated: 'Sigi',


getStatus: function(){
return this.status
    },

getTitleAndAutor: function(){
      return `${this.title} was created by ${this.repositoryNameAssociated}`
    }
}
console.log(PullRequest.getStatus()) //correct
console.log(PullRequest.getTitleAndAutor()) //correct

// console.log(PullRequest.getStatus)X- Error
//console.log(PullRequest.getTitleAndAutor) X- Error

//console.log(getTitleAndAutor()) X- Error
//console.log(getStatus()) X- Error