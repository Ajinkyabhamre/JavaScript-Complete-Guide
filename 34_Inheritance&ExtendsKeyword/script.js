class Animal{
    constructor(name, color){
        this.name = name;
        this.color = color
    }

    run(){
        console.log(this.name + " is running...")
    }

    shout(){
        console.log(this.name + " is shouting !!!")
    }
}


class monkey extends Animal{
    eatBanana(){
        console.log(this.name + " is eating banana...")
    }
}

let dog = new Animal("bruno", "white")
let monki = new monkey("chimpu", "orange")

dog.shout();
monki.eatBanana()