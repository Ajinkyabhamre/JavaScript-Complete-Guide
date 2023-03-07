class complex{
    constructor(real, img){
        this.real = real
        this.img = img
    }

    print(){
        console.log(`The Complex no. is ${this.real} + ${this.img}i`)
    }

    add(num){
        this.real += num.real
        this.img += num.img
    }

    get real(){
        return this._real
    }
    get img(){
        return this._img
    }
    set real(newReal){
        this._real = newReal
    }
    set img(newImg){
        this._img = newImg
    }

}


let num1 = new complex(3, 2)
num1.real = 10
num1.img = 10
let num2 = new complex(5, 2)
num1.add(num2)

num1.print()

class Human{
    constructor(name, favfood){
        this.name = name
        this.favfood = favfood
    }

    food(){
        console.log(`Human is walking....`)
    }
}

class Student extends Human{
    food(){
        console.log(`${this.name} fav food is ${this.favfood}`)
    }
}

let s1 = new Student("Ajinkya", "Chicken-Tikka");
s1.food()

console.log(s1 instanceof Human)










