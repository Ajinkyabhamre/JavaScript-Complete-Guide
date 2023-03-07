const hello=()=>{
    console.log("hello World")
}

const add=(a,b)=>{
    console.log(a+b)
}

module.exports = { hello, add } //same as below line
// module.exports = { hello : hello, add : add };