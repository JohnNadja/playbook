class Pokemon{
    constructor(name) {
        this.name = name
      }
      sayHello() {
        console.log(`Mi Pokemon: ${this.name} te saluda :D`)
      }
    
      sayMessage (msg) {
        console.log(`Mi pokemon dice: ${this.name} dice: ${msg}`)
      }
    
}

module.exports = Pokemon