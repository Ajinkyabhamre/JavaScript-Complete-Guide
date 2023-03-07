document.getElementById("google").addEventListener('click', (e)=>{
   console.log(e)
    window.location = "https://www.google.com"
    window.focus();
})

setInterval(() => {
    document.querySelector("#bulb").classList.toggle("bulb")
}, 300);