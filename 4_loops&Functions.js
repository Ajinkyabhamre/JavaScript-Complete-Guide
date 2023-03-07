//for-loop

let sum = 0
let fact = 1

for (let index = 1; index <= 5; index++) {
//    console.log(index)
sum += index
fact *= index
}
console.log(sum)
console.log(fact)


let obj = {
    peter : "spiderman",
    bruce: "batman",
    clark: "superman",
    tony: "ironman"
}

//for-in loop access keys of object
for(let item in obj){
console.log(item + " is " + obj[item])
}

//for-of loop -----> works on iterable object
for (let item of "Ajinkya Bhamre") {
    console.log(item)
}

//while-loop
let i = 0;
while (i <= 5) {
    console.log(i)
    i++;
}

//do-while loop
let j = 0
do {
    console.log("om chutiya")
    j++
} while (j <= 10);

//Functions

function avgOf3(x, y, z){
    return Math.round( (x+y+z)/3 );
}

console.log(avgOf3(10.3,20.9,39.2))

//Arrow function
const sumOf2 = (p, q)=>{
return p+q ;
}

console.log(sumOf2(5,5))

//function without parameters
const hello = ()=>{
    console.log("Hello ! How are you ?")
}

hello();


const macLover = ()=>{
    return "I ❤️ macbook"
}

let res = macLover();
console.log(res)