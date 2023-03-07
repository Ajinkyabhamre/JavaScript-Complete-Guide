let x =()=>{
alert("hello 1");
}

let y =()=>{
alert("hello 2");
}


btn.addEventListener('click', x)

btn.addEventListener('click', y)

let choice = prompt("Enter 1 or 2")
if (choice == "1") {
    btn.removeEventListener('click', y)
}else{
    btn.removeEventListener('click', x)

}



//when an event happens, the browser creates an event object, puts details into it and passes it as an argument to the handler

let z = (event)=>{
    console.log(event)
    console.log(event.type, event.clientX, event.clientY)
    alert("function is called !")
}

btn.addEventListener('click', z)