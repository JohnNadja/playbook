class  User {
    constructor(user, email, dateOfBirth, friends, posts){
    this.user = user
    this.email = email
    this.dateOfBirth = dateOfBirth
    this.friends = friends
    this.posts = posts
    }
    get getUserBioEmail(){
      return this.user + this.email
    }
    get getGeneralInfo(){
      return `The user: ${this.user} has their birthday on ${this.dateOfBirth} with: ${this.friends} friends and ${this.posts} posts created`
    }
   }
   
   const MyUser = new User("John Lic", "johnlic@email.com", "02.31.1999", 299, 42)
   console.log("Nombre de usuario:" + MyUser.user)
   console.log("Información básica: " + MyUser.getUserBioEmail)
   console.log(MyUser.getGeneralInfo)
   console.log("////////////////")
    
    
class post {
    constructor (type, title, numberOfReactions, numberOfComments, shareNumber){
    this.type = type
    this.title = title
    this.numberOfReactions = numberOfReactions
    this.numberOfComments = numberOfComments
    this.shareNumber = shareNumber
    }
    get getTypeAndTitle(){
        return this.type + this.title
    }
    get getGeneralInfo(){
        return `The post ${this.title} has ${this.numberOfReactions} reactions with ${this.numberOfComments} comments and was shared ${this.shareNumber} times`
    }
}

const myPost = new post ("Entertaiment", "Spoilers", 2524, 1365, 154)
console.log("Nombre del Post: " + myPost.title)
console.log("Cantidad de reacciones: " + myPost.numberOfReactions + " y comentarios: "+ myPost.numberOfComments)
console.log(myPost.getGeneralInfo)
console.log("//////////////////")

class biography {
    constructor(birthday, bio, location, work, education){
    this.birthday = birthday
    this.bio = bio
    this.location = location
    this.education = education
        // birthday: "12-06-2007",
    // bio: "Creating under the dreams",
    // location: "Mexico",
    // work: "Google",
    // education: "Harvard",
    }
    get getBioAndLocation(){
        return `Their bio is: ${this.bio} and they live in ${this.location}`
    }
    get getWorkAndEducation(){
        return `They work at  ${this.work} and studied in ${this.education}`
    }
}
const myBiography = new biography ("12-06-2007", "Creating under the dreams", "Mexico", "Google", "Harvard")
console.log("Biografía general: " + myBiography.getBioAndLocation)
console.log("Trabajo actual: " + myBiography.work)
console.log(myBiography.getWorkAndEducation)