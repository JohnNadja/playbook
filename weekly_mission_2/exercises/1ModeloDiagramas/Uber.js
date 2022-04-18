//diagrama de Uber
const profile = {
    userName: "John S",
    location:"Mexico",
    languages:"English, Spanish, Deutsch",
    starRate: "4.89",
    numberofTravel: 545,
    getUserLocLang: function(){
      return this.user + this.location + this.languages
    },
    getGeneralInfo: function(){
      return `This user: ${this.userName} has ${this.numberofTravel} made with: ${this.starRate} star rate`
    }
   }
   
   
   console.log("Nombre de usuario:" + profile.userName)
   console.log("Información básica: " + profile.getGeneralInfo())
   console.log(profile.getUserLocLang())
   console.log("////////////////")


   const travel = {
        from: "Oasis Coyoacán",
        to: "Aztec Stadium",
        date: new Date(),
        ETA: "45 minutes",
        getDateAndEta: function(){
            return this.date + " +" + this.ETA
        },
        getGeneralInfo: function(){
            return `The travel from ${this.from} to ${this.to} was created on ${this.date}`
        },
   }

   console.log("Fecha de viaje: " + travel.getDateAndEta())
   console.log("Tiempo estimado:" + travel.ETA)
   console.log(travel.getGeneralInfo())
