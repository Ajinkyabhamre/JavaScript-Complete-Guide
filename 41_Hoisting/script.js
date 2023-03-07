//Following two lines will run succesfully due to javascript hoisting  
console.log(a)
// console.log(b)  // ReferenceError: Cannot access 'b' before initialization
// console.log(c)  // ReferenceError: Cannot access 'c' before initialization
greet()
function greet(){
    console.log("Good Evening Commissioner")
}

var a = 9;  // Declaration hoisted to the top but initialisation is not.
console.log(a)

let b = 5;
let c = 5;
console.log(b)
console.log(c)


//Function Expression

// myFunction(); // Error: myFunction is not a function
// var myFunction = function () {
//   console.log("This is a function expression");
// };


//class Expression

// new MyClass(); // This is a class expression
// var MyClass = class {
//     constructor() {
//         console.log("This is a class expression");
//     }
// };
