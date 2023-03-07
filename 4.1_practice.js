let marks={
    Ajju: 100,
    anand: 70,
    sunita: 70,
    sachin: 70
}

//plain for-loop method
for (let i = 0; i <Object.keys(marks).length; i++) {
console.log("The marks of  "+ Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])    
}

//for-in loop method
for(let key in marks){
    console.log(key + " has "+ marks[key] + " marks. ")
}

const findMean = (a,b,c,d)=>{
    return (a+b+c+d)/4
}

console.log(findMean(4,5,6,7))