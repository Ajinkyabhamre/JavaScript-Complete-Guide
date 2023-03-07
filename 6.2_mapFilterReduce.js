//Array Map Method ->
//map() -> Creates a new array by performing same operation on each array element
// array.map((value, index, array) =>{ func logic...})

// The difference between forEach & map is in forEach user perform operations on existing array, whereas in map user creates new array and perform operations on that array


let arr = [45, 23, 21]
let arrSq = arr.map((value, idx, arr) =>{
    console.log(value, idx, arr)
    return value * value
})

console.log(arrSq)

//Array Filter Method
// filters an array with values that passes a test creates a new array
let arr2 = [45, 23, 21, 0, 3, 5]
let smallNums = arr2.filter((value) =>{
    return value < 10 ;
})
console.log(smallNums)


//Array Reduce Methods
// Reduces an array to a single value, and return the value
//Ex.1 ->
let arr3 = [1,2,3,5,2,1]
let result1 = arr3.reduce((h1, h2) =>{
    return h1 + h2
})
console.log(result1)

//Ex.2 ->
const multiply =(x, y)=>{
    return x * y
}

let result2 = arr3.reduce(multiply)
console.log(result2)