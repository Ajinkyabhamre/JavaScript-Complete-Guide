message = "how are you ?"
function hello(){
    let message = "how you doin ?"
    console.log("Outer function : " + message)

    let c = function hello2(){
        console.log("I am c " + message)
    }
    return c
}

 c = hello()
 c();


 /* In JavaScript, a closure is a feature that allows a function to access and manipulate variables that are outside of its own scope. A closure is created when a function is defined inside another function, and the inner function can access the outer function's variables, even after the outer function has returned. */


function outerFunction() {
  var outerVariable = "Hello, ";

  function innerFunction(name) {
    console.log(outerVariable + name);
  }

  return innerFunction;
}

var myFunction = outerFunction();
myFunction("John"); // Output: Hello, John

/* In this example, outerFunction returns innerFunction, which is then assigned to myFunction. When myFunction is called with the argument "John", it logs the string "Hello, John" to the console.

The important thing to note here is that innerFunction has access to the outerVariable defined in outerFunction, even though outerFunction has already returned and its execution context has been removed from the call stack. This is possible because innerFunction forms a closure over the variables in the outer scope. */


    // function createCounter() {
    //   var count = 0;

    //   function incrementCounter() {
    //     count++;
    //     console.log(count);
    //   }

    //   return incrementCounter;
    // }

    // var counter = createCounter();
    // counter(); // Output: 1
    // counter(); // Output: 2
    // counter(); // Output: 3

/*In this example, createCounter returns a function incrementCounter that increments and logs the count variable every time it is called. When createCounter is called, it sets the count variable to 0 and returns incrementCounter. counter is then assigned to incrementCounter, and every time counter is called, it logs and increments the count variable. Again, the count variable is defined in the outer scope of incrementCounter, but incrementCounter has access to it through the closure formed by createCounter.*/


function returnFunc(){
const x =() =>{
    let a = 1
    console.log(a)

    const y = ()=>{
        // let a = 2
        console.log(a)

        const z = ()=>{
            // let a = 3;
            console.log(a)
        }
        z();
    }
    a = 999
    y();
  }

return x
}

let a1 = returnFunc()
a1()


//Arrow Functions ===>

const obj = {
    name : "Ajju",
    role: "JS Developer",
    myName: function(){
        // let util = this
        // console.log(this)
        setTimeout(()=>{
            console.log(`my name is ${this.name} & role is ${this.role}`)
        }, 2000);
    }
}
obj.myName()