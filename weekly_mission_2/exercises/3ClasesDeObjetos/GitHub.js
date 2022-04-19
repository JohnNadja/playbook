class repo {
    constructor (name, author, language, numberOfCommits, stars, forks, issues_open, issues_close){
    this.name = name
    this.author = author
    this.language = language
    this.numberOfCommits = numberOfCommits
    this.stars = stars
    this.forks = forks
    this.issues_open = issues_open
    this.issues_close = issues_close
    }
    get getTotalIssues(){
      return this.issues_open + this.issues_close
    }
    get getGeneralInfo(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   const repo1 = new repo("LaunchXStudent", "carloDev", "JavaScript", 100, 199, 299, 10, 10)
   console.log(repo1.name)
   console.log(repo1.getTotalIssues)
   console.log(repo1.getGeneralInfo)
   console.log("////////////////")
   console.log("")


   class issue {
       constructor(title, respository, status, numberOfComments, labels, author, dateCreated, lastUpdated){
        this.title = title
        this.respository = respository
        this.status = status
        this.numberOfComments = numberOfComments
        this.labels = labels
        this.author = author
        this.dateCreated = dateCreated
        this.lastUpdated = lastUpdated
        }
        get getTitleAndAuthor(){
            return this.title + this.author
        }
        get getGeneralInfo(){
            return `This issue ${this.title} was created by ${this.author} on ${this.dateCreated}`
        }
   }
   const myIssue = new issue ("Too many branches", "LaunchX", "OPEN", 13, 3, "@JohnNadja", "15-04-2022", "19-04-2022")
   console.log("Nombre del Issue: " + myIssue.title)
   console.log("Estado del issue: " + myIssue.status + ", tiene un número de comentarios de:" + issue.numberOfComments)
   console.log(myIssue.getGeneralInfo)
   console.log("////////////////")
   console.log("")

   class PullRequest {
       constructor(title, author, branchName, dateCreated, status, repositoryNameAssociated){
    this.title = title
    this.author = author
    this.branchName = branchName
    this.dateCreated = dateCreated
    this.stars = status
    this.repositoryNameAssociated = repositoryNameAssociated
    }
    get getStatus(){
        return `This PR: ${this.title} is in the repo: ${this.repositoryNameAssociated} (status: ${this.status})`
    }
    get getTitleAndAuthor(){
        return `The PR: ${this.title} was created by ${this.author}`
    }
  }

  const PR1 = new PullRequest ("New Objects", "SkyStry", "Reordering Clasess and Objects", new Date(), "OPEN", "LaunchX")
  console.log("Nombre del PR: " + PR1.title)
  console.log("El nombre de la rama del PR es: " + PR1.branchName)
  console.log(PR1.getStatus)