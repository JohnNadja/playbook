//diagrama de Facebook
const user = {
    user: "John Lic.",
    email: "johnlic@email.com",
    dateOfBirth: "02.31.1999",
    friends: 299,
    posts: 42,
    getUserBioEmail: function(){
      return this.user + this.email
    },
    getGeneralInfo: function(){
      return `The user: ${this.user} has their birthday on ${this.dateOfBirth} with: ${this.friends} friends and ${this.posts} posts created`
    }
   }
   
   
   console.log("Nombre de usuario:" + user.user)
   console.log("Información básica: " + user.getUserBioEmail())
   console.log(user.getGeneralInfo())
   console.log("////////////////")


   const post = {
        type: "Entertaiment",
        title: "Spoliers",
        numberOfReactions: 2524,
        numberOfComments: 1365,
        shareNumber: 154,
        getTypeAndTitle: function(){
            return this.type + this.title
        },
        getGeneralInfo: function(){
            return `The post ${this.title} has ${this.numberOfReactions} reactions with ${this.numberOfComments} comments and was shared ${this.shareNumber} times`
        }
   }

   console.log("Nombre del Post: " + post.title)
   console.log("Cantidad de reacciones: " + post.numberOfReactions + " y comentarios: "+ post.numberOfComments)
   console.log(post.getGeneralInfo())
   console.log("//////////////////")

   const biography = {
    birthday: "12-06-2007",
    bio: "Creating under the dreams",
    location: "Mexico",
    work: "Google",
    education: "Harvard",
    getBioAndLocation: function(){
        return `Their bio is: ${this.bio} and they live in ${this.location}`
    },
    getWorkAndEducation: function(){
        return `They work at  ${this.work} and studied in ${this.education}`
    }
  }

  console.log("Biografía general: " + biography.getBioAndLocation())
  console.log("Trabajo actual: " + biography.work)
  console.log(biography.getWorkAndEducation())