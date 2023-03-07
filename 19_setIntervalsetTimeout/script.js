alert("hello ! i am a boy")

    //a has the index of function --> in this case it's 1
let timeId = setTimeout(()=>{
    alert("And my name is Ajinkya !")
}, 2000)


let b = prompt("do you want to know boy's Name ?")
if(b == "no"){
    clearTimeout(timeId); //cancels the execution
}


const sum = (a,b)=>{
console.log("yes The sum is " + (a+b))
    a+b
}
    
setTimeout(sum, 2000, 1,2) //let t = setTimeour(func, delay, param1,param2)




// setInterval(()=>{       //let t = setInterval(func, delay, param1,param2)
//     alert("I am setInterval")
// },3000) 

const fact = (a)=>{
    if(a==0){
        return 1
    }
    let b = a * fact(a - 1) 
   console.log(b)
    return b
}

 let pause = setInterval(fact, 3000, 5)

setTimeout(()=>{
    clearInterval(pause)
},10000)