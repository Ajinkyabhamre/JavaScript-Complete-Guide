let count = 0;let userScore = 0; let machineScore = 0;
const array = ["stone", "paper", "scissor"]

const result = (userChoice, compChoice)=>{
    if (userChoice == "stone") {
        if (compChoice == "paper") {
           return "machineScore"
            
        }else if(compChoice == "scissor"){
           return "userScore"
            
        }else{
            return "";
        }
  }else if(userChoice == "paper"){
        if (compChoice == "stone") {
            return "userScore"
            
        }else if(compChoice == "scissor"){
          return  "machineScore"
            
        }else{
            return ""
        }
  }else{//user - scissor
        if (compChoice == "paper") {
          return"userScore"
            
        }else if(compChoice == "stone"){
          return  "machineScore"
            
        }else{
            return ""
        }
  }

}


while (count <= 6) {
    let userChoice  = prompt("Enter your choice...")
    const random  = Math.floor(Math.random() * array.length)
    console.log("machineChoice = ", array[random])

 let resType = result(userChoice, array[random])
 if (resType == "machineScore") {
    machineScore++
 }else if (resType == "userScore") {
    userScore++
 }
 
count++    
}
console.log("machineScore = ",machineScore)
console.log("userScore = ",userScore)