//arrays are mutable, and array is an object

const fruits = ["apple", "banana", "mango", "pineapple"]
console.log(fruits)

const marks = [99, 89, 79, false, "Not-given"]
console.log(marks)
console.log(marks[2])
console.log(marks[3])
console.log(marks[4])
console.log(marks[5])

console.log(fruits.length)
marks[5] = 77   //adding elements into array
marks[1] = 0   //changing array values
console.log(marks)

for (let i = 0; i < fruits.length; i++) {
console.log(fruits[i])
    
}

//Array Methods
let num = [1,2,3,4,5,6,7]
let b = num.toString()
console.log(typeof b)

let c = num.join("_")
console.log(c, typeof c)

let r = num.pop()   //pop returns the pooped element
console.log(num, r) 

let n = num.push(50)   //push returns the new array length
console.log(num, n) 

let m = num.shift()   //shift returns first deleted element of array
console.log(num, m) 

let a = num.unshift(0)   //unshift adds element at start of array, and returns length of an array
console.log(num, a) 

//using delete method doesnt change the array length
let num2 = [100, 200,300,400,500]
console.log(num2.length)
delete num2[3]
console.log(num2)
console.log(num2.length)

//concating multiple arrays
let n1 = [1,2,3,4]
let n2 = [5,6,7,8]
let n3 = [9,10,11,12]

let newArray = n1.concat(n2, n3)
console.log(newArray)


//sort method - sorts alphabetically
let unSort = [551, 22, 3, 14, 5, 6,7,8,229]
unSort.sort()
console.log(unSort)


//below function works as compareTo func in java
let compare = (a, b)=>{
    return b - a        //Desc order
}

//JS is fucking confusing
let sort = unSort.sort(compare)
console.log(sort)

//reverse() function
let notRev = [5,4,3,2,1]
notRev.reverse()
console.log(notRev)

//splice method
let sp = [551, 22, 3, 14, 5, 6, 7, 8, 229]
let delVal = sp.splice(2, 3, 1022, 1023, 1024)
console.log(sp)     //source array is modified
console.log(delVal) //new arrays is returned of deleted values

//slice method
let sl = [34,56,78,12,45,78,97]
let newSl1 = sl.slice(3)
let newSl2 = sl.slice(3,6)
console.log(sl)     //Source array is not affected
console.log(newSl1)  //new array is created till last idx
console.log(newSl2)  //new array is created, from i1<->i2-1