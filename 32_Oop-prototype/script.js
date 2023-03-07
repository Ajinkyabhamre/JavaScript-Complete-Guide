

let a ={
    name: "Ajinkya",
    language: "JavaScript",

}
console.log(a)

let p ={
    run: ()=>{
        alert("Run")
    }
}

p.__proto__ = {
    address: "Bleeker Street"
}




a.__proto__ = p

a.run()

console.log(a.address)