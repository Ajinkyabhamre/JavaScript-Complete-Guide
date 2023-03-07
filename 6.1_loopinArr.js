let nums = [3,5,1,4,7,9]

//For-loop
// for (let i = 0; i < nums.length; i++) {
//     console.log(nums[i])
// }

//For-each loop
//array.forEach((value, index, array) =>{ func logic...})
nums.forEach((ele) =>{
    console.log(ele * ele)
})

//Array.from - converts into an array [
//   'A', 'j', 'i','n', 'k', 'y','a']
let name = "Ajinkya"
let arr = Array.from(name)
console.log(arr)


//for-of in arrays - short and cleaner way of writing standard for loop
for(let i of nums){
console.log(i)
}

//for-in in arrays - iterate through index (keys) of an array
for(let i in nums){
    console.log(i)
}