console.log("The Ultimate JavaScript Course");

//Varicables - let, const, var
var a = 12;     //var can be redeclared and redefined
var a = "Tweleve";
let b = 05;
b = "Ajinkya";

{
  // black scope --->
  let b = "Bhamre";  //let variable can be declared once and changed multiple times
  console.log(b);
}

console.log(b);
console.log(a);

const num = 23; // const values cannot be changed
console.log(num);
