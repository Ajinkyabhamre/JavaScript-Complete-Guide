let first = document.getElementById("first")
let a = first.getAttribute("class")
console.log(a)

console.log(first.hasAttribute("class"))
console.log(first.hasAttribute("style"))

let second = document.getElementById("second")
second.setAttribute("hidden", "true")

first.setAttribute("class", "Red Green") //can add multiple classes
first.removeAttribute("class")  //all classes are removed

let third = document.getElementById("third")
console.log(third.attributes)

//custom Attributes
console.log(third.dataset)
console.log(third.dataset.game)
console.log(third.dataset.player)