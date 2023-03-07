let arr= [3,5,8,9,12,14]

// no need to do this
// let a = arr[0]
// let b = arr[1]


//Destructuring --->

let [a, b, c, d, ...rest] = arr
console.log(a,b,c,d, rest)

let [x, , , y, z, ...res] = arr
console.log(x, y, z, res)


//object destructuring

let {a1, a2} = {a1: 1, a2: 2}
console.log(a1, a2)


//Spread Operator
let nums = [1, 2, 3, 4, 5]
let obj1 = {...nums}
console.log(obj1)

const sum=(a,b,c)=>{
return a+b+c
}

console.log(sum(...nums))


let object2 = {
    name: "Ajju",
    company: "unemployeed",
    address: "xyz",
    rollnum: 05
}

// console.log({ rollnum: 6, ...object2 }); 
console.log( {...object2, rollnum: 6 } ) 