//diagrama de Twitter
const user = {
    user: "@StryJohn",
    userName: "John S",
    bio: "Creating under the dreams",
    location: "Mexico",
    dateOfBirth: "02.31.1999",
    followers: 299,
    following: 241,
    getUserAndBio: function(){
      return this.user + this.bio
    },
    getGeneralInfo: function(){
      return `This user: ${this.user} has their birthday on ${this.dateOfBirth} with: ${this.followers} followers`
    }
   }
   
   
   console.log("Nombre de usuario:" + user.userName)
   console.log("Información básica: " + user.getUserAndBio())
   console.log(user.getGeneralInfo())
   console.log("////////////////")


   const trending_topic = {
        type: "Entertaiment",
        title: "Spoliers",
        numberOfTweets: "5,541,222",
        numberOfComments: 13,
        getTypeAndTitle: function(){
            return this.type + this.title
        },
        getGeneralInfo: function(){
            return `The trending ${this.title} has ${this.numberOfTweets} tweets`
        }
   }

   console.log("Nombre de la Tendencia: " + trending_topic.title)
   console.log("Cantidad de tweets: " + trending_topic.numberOfTweets)
   console.log(trending_topic.getGeneralInfo())
   console.log("//////////////////")

   const hashtag = {
    title: "#GameSells",
    popularity: "Medium",
    averageTweetPerDay: 1527,
    getTitleAndPopularity: function(){
        return `This hashtag: ${this.title} has ${this.popularity} popularity`
    },
    getAverageUse: function(){
        return `The average use per day is  ${this.averageTweetPerDay}`
    }
  }

  console.log("Nombre del hastag: " + hashtag.title)
  console.log("Tiene una popularidad: " + hashtag.popularity)
  console.log(hashtag.getTitleAndPopularity() + " and " + hashtag.getAverageUse())