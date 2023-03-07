//Q.1
let arr = [1,10,34,20,30,45,90,100]
let res = arr.filter((val)=>{
    return val%10 == 0
})
console.log(res)

//Q.2
let arr2 = [1,2,3,4,5]
let res2 = arr2.map((val)=>{
return val * val
})
console.log(res2)

//Q.3 add all
let arr3 = [1,2,3,4,5]
let res3 = arr3.reduce((x1, x2)=>{
    return x1 + x2
})
console.log(res3)