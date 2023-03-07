// 05;
// "Ajinkya";
// !true;

//Operators
//1. Arithmatic Operators ---->
let a = 45;
let b = 4;
console.log("a + b = " , a + b);
console.log("a - b = ", a - b)
console.log("a / b = ", a / b )
console.log("a * b = ", a*b)

//exponent
console.log("a ** b = " , a**b);

//mod
console.log("a % b = ", a % b);

//Increment - Decrement Properties
//initial value of a is 45 and b is 4

console.log("++a = ", ++a)
console.log("a++ = ", a++)
console.log("a = ", a)

console.log("--b = ", --b)
console.log("b-- =", b--);
console.log("b = ", b)


//Assignment Operators--------->

let c = 24;
c += 4;
console.log(" is now", c)

c -= 2
console.log(" is now", c)

c /= 3;
console.log(" is now", c)

c *= 4
console.log(" is now", c)

c %= 6
console.log(" is now", c)

c **= 6
console.log(" is now", c)

//Comparison Operators------------->
console.log("Comparison Operators")

let comp1 = 6;
let comp2 = "6";
let comp3 = 8;

console.log("comp1 == comp2 is ", comp1 == comp2)   //value is same, so true
console.log("comp1 != comp2 is ", comp1 != comp2)   //value is same, operator is not-equal-to  so false
console.log("comp1 === comp2 is ", comp1 === comp2) //value is same, Type is Different so false
console.log("comp1 !== comp2 is ", comp1 !== comp2) //value is same, Type is Different , operator is not-equal-to  so true
console.log("comp3 >= comp1 is ", comp3 >= comp1)
console.log("comp1 <= comp3 is ", comp1 <= comp3)
console.log(comp1 > comp3 ? "comp1 is grater" : "comp2 is greater")

//Logical Operators
console.log("Logical-Operators")

let x = 5; 
let y = 6;
console.log(x < y && x==5)
console.log(x > y || x==5)
console.log(!false)

//Expressions
// let p = prompt("Hey ! what is up...");
let p = "9"
console.log(typeof p)
p = Number.parseInt(p)  //converting a string into a number
console.log(typeof p)

//if-else
if (p < 0) {
    console.log("age is not valid")
}else if(p <=9){
    console.log("you are a kid")
}
else{
    console.log("you are an adult")
}

//switch statements
let exp = "%";
switch (exp) {
    case "+":
        console.log("addition")
        break;
        case "-":
        console.log("Substraction")
        break;
        case "%":
        console.log("Mod")
        break;
        case "/":
        console.log("division")
        break;

    default: 
    console.log("not valid")
        break;
}

//ternary-expressions
console.log("Your age is ", p > 18 ? "valid" : "not valid")

//Practice

//Q.1
let age = 18;
if (age >= 18 && age <= 30) {
    console.log("Young-blood")
} else {
 console.log("Old-blood")   
}