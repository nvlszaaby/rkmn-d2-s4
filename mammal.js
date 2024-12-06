class Animal{
    #age
    constructor(name,food, energy, canReproduce,age){
        this.name = name
        this.food = food
        this.energy = energy
        this.canReproduce = canReproduce
        this.#age = age
    }
    // get #Age(){
    //     return this.#age
    //}
    isAdult(){ //breaking encapsulation
        return this.#age > 18
        }
    }

    export default Animal;