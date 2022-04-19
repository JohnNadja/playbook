class user {
    constructor (User, userName, bio, location, dateOfBirth, followers, following){
    
    this.User = User
    this.userName = userName
    this.bio = bio
    this.location = location
    this.dateOfBirth = dateOfBirth
    this.followers = followers
    this.following = following 
    }
    get getUserAndBio(){
      return this.User + this.bio
    }
    get getGeneralInfo(){
      return `This user: ${this.User} has their birthday on ${this.dateOfBirth} with: ${this.followers} followers`
    }
   }

    const myUser = new user("@StryJohn", "John S","Creating under the dreams","Mexico","02.31.1999", 299, 241)
    console.log("Nombre de usuario:" + myUser.userName)
    console.log("Información básica: " + myUser.getUserAndBio)
    console.log(myUser.getGeneralInfo)
    console.log("////////////////")
    console.log("")


    class trending_topic {
        constructor (type, title, numberOfTweets, numberOfComments){
            this.type = type
            this.title = title
            this.numberOfTweets = numberOfTweets
            this.numberOfComments = numberOfComments
        } 
        
        get getTypeAndTitle(){
            return this.type + this.title
        }
        get getGeneralInfo(){
            return `The trending ${this.title} has ${this.numberOfTweets} tweets`
        }
    }

    const myTrend = new trending_topic ("Spoliers", "5.541,222", 13)
    console.log("Nombre de la Tendencia: " + myTrend.title)
    console.log("Cantidad de tweets: " + myTrend.numberOfTweets)
    console.log(myTrend.getGeneralInfo)
    console.log("////////////////")
    console.log("")

   class hashtag {
       constructor (title, popularity, averageTweetPerDay){
        this.title = title
        this.popularity = popularity
        this.averageTweetPerDay = averageTweetPerDay
       }
    
    get getTitleAndPopularity(){
        return `This hashtag: ${this.title} has ${this.popularity} popularity`
    }
    get getAverageUse(){
        return `The average use per day is  ${this.averageTweetPerDay}`
    }
  }
    const myHashtag = new hashtag ("#GameSells", "Medium", 1527)
    console.log("Nombre del hastag: " + myHashtag.title)
    console.log("Tiene una popularidad: " + myHashtag.popularity)
    console.log(myHashtag.getTitleAndPopularity + " and " + myHashtag.getAverageUse)