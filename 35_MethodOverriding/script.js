class Employee{
    login(){
        console.log(`Employee has looged in`)
    }
    logout(){
        console.log(`Employee has looged out`)
    }
    requestLeaves(x){
        console.log(`Employee has requested ${x} leaves`)
    }
}

class Programmer extends Employee{
//If there is no constructor in child class, this is created automatically
    // constructor(...args){
    //     super(...args)
    // }

    constructor(name){
//constructor in inheriting classes must call super(...) and do it before using "this" keyword
        super()
        console.log(`Programmer constructor is initialised...`)
        this.name = name ;
    
    }
    
    requestLeaves(x){
//method overriding
       console.log(`Employee has requested ${x + 1} leaves (Extra 1)`)
       
//super-keyword
//super.method() in a child method to call parent method
       //super.requestLeaves(4);
       
    }

}

let emp1 = new Programmer();
emp1.login();
emp1.requestLeaves(5)
emp1.logout();