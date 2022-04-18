const explorers = [
 {
   name: "Explorer 1",
   exercises_completed: 10,
   rate: 99,
   city: "CDMX",
   stack: [
     "js",
     "c#"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: true,
       exercisesFinished: true
     }
   }
 },
 {
   name: "Explorer 2",
   exercises_completed: 9,
   city: "Veracruz",
   rate: 50,
   stack: [
     "js"
   ],
   missions: {
     onboarding: {
       isFinished: false,
       exercisesFinished: false
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 },
 {
   name: "Explorer 3",
   exercises_completed: 3,
   city: "Sonora",
   rate: 100,
   stack: [
     "elixir"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 }
]

console.log("////////////////")
console.log("1. Uso de FOR EACH")
explorers.forEach(explorer => console.log(explorer.name))
console.log("////////////////")

console.log("")
console.log("////////////////")
console.log("2. Uso de FOR EACH")
explorers.forEach(elemento => console.log(elemento.stack))
console.log("////////////////")


console.log("")
console.log("////////////////")
console.log("3. Uso de MAP")
explorers.map(iStack => console.log(iStack.stack))
//Otra manera
console.log("3.1 Uso de MAP y CONST")
const misStacks = explorers.map(iStack => iStack.stack)
console.log(misStacks)
console.log("////////////////")


console.log("")
console.log("////////////////")
console.log("4. Uso de FILTER")
const explorerJS = explorers.filter(explorer_with_JS => explorer_with_JS.stack.includes("js"))
console.log(explorerJS)
console.log("////////////////")



console.log("")
console.log("////////////////")
console.log("5. Uso de FIND")
const explorerCDMX = explorers.find(explorer => explorer.city === "CDMX")
console.log(explorerCDMX)
console.log("////////////////")



console.log("")
console.log("////////////////")
console.log("6. Uso de Reduce")
const AllExcercises = explorers.reduce((acc, listaExplorers) => acc + listaExplorers.exercises_completed,0)
console.log("El total de ejercicios resueltos por los explores son: " + AllExcercises)
console.log("////////////////")



console.log("")
console.log("////////////////")
console.log("7. Uso de Some")
const AlgunoHechosVerdaderos = explorers.some((a) => a.missions.frontend.isFinished === true)
console.log("Hay algunos explorers que han completado los ejercicios de frontend: " + AlgunoHechosVerdaderos)
console.log("////////////////")



console.log("")
console.log("////////////////")
console.log("8. Uso de EVERY")
const CheckFinished = explorers.every((siTerminado) => typeof siTerminado.missions.onboarding.isFinished === false)
console.log("Todos los expolores finalizaron onboarding: " + CheckFinished)
console.log("////////////////")