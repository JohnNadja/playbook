//diagrama de GitHub
const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
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
   console.log("////////////////")


   const issue = {
        title: "Too many Branchs",
        repositoryNameAssociated: "LaunchX",
        status: "OPEN",
        numberOfComments: 13,
        labels: 3,
        author: "@JohnNadja",
        dateCreated: "15-04-2022",
        lastUpdated: "18-04-2022",
        getTitleAndAuthor: function(){
            return this.title + this.author
        },
        getGeneralInfo: function(){
            return `This issue ${this.title} was created by ${this.author} on ${this.dateCreated}`
        }
   }

   console.log("Nombre del Issue: " + issue.title)
   console.log("Estado del issue: " +issue.status + ", tiene un número de comentarios de:" + issue.numberOfComments)
   console.log(issue.getGeneralInfo())
   console.log("//////////////////")

   const PullRequest = {
    title: "New Objects",
    author: "StrySky",
    branchName: "Reordering Classes and Objects",
    dateCreated : new Date(),
    status: "OPEN",
    repositoryNameAssociated: "LaunchX",
    getStatus: function(){
        return `This PR: ${this.title} is in the repo: ${this.repositoryNameAssociated} (status: ${this.status})`
    },
    getTitleAndAuthor: function(){
        return `The PR: ${this.title} was created by ${this.author}`
    }
  }

  console.log("Nombre del PR: " + PullRequest.title)
  console.log("El nombre de la rama del PR es: " + PullRequest.branchName)
  console.log(PullRequest.getStatus())