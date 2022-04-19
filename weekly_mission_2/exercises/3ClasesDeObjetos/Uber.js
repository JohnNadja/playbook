class profile {
    constructor (userName, location, languages , starRate, numberofTravel){
        this.userName = userName
        this.location = location
        this.languages = languages
        this.starRate = starRate
        this.numberofTravel = numberofTravel 
    }
    get getUserLocLang(){
      return this.user + this.location + this.languages
    }
    get getGeneralInfo(){
      return `This user: ${this.userName} has ${this.numberofTravel} made with: ${this.starRate} star rate`
    }
   }
   
   const myUProfile = new profile ("John S", "Mexico", ["English, Spanish, Deutsch"], 4.89, 545)
   console.log("Nombre de usuario:" + myUProfile.userName)
   console.log("Información básica: " + myUProfile.getGeneralInfo)
   console.log(myUProfile.getUserLocLang)
   console.log("////////////////")


   class travel {
       constructor(from, to, date, ETA){
        this.from = from
        this.to = to
        this.date = date
        this.ETA = ETA
       }
        
        get getDateAndEta(){
            return this.date + " +" + this.ETA
        }
        get getGeneralInfo(){
            return `The travel from ${this.from} to ${this.to} was created on ${this.date}`
        }
   }

   const myTravel = new travel ("Oasis Coyoacán", "Aztec Stadium", new Date(), "45 minutes")
   console.log("Fecha de viaje: " + myTravel.getDateAndEta)
   console.log("Tiempo estimado:" + myTravel.ETA)
   console.log(myTravel.getGeneralInfo)
