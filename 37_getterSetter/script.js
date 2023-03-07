class Animal {

constructor(name){
    this._name = name ;
}

  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
}

class Rabbit extends Animal{
    eatCarrot(){
        console.log("Eating Carrot....")
    }
}


let a1 = new Rabbit("chimpu")
console.log(a1.name);

a1.name = "Bruno"
console.log(a1.name)


//Instance Of Operator
let c = 100
console.log(a1 instanceof Animal)
console.log(a1 instanceof Rabbit)
console.log(c instanceof Animal)