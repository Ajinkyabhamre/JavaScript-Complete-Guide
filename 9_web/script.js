console.log(document.body.firstChild)
console.log(document.body.lastChild)
console.log(document.body.childNodes)
let arr = Array.from(document.body.childNodes)
console.log(arr)

let a = document.body.firstChild
console.log(a.parentElement)
console.log(a.parentNode)

let b = document.body
console.log("first child of b is ", b.firstChild)
console.log("first child of b is ", b.firstElementChild)

const changeColor = ()=>{
    b.firstElementChild.style.background = "crimson"
}

changeColor();