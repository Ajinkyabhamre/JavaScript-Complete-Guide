
const showtime = ()=>{
let time = new Date();
let hour = time.getHours()
let min = time.getMinutes()
let sec = time.getSeconds()
am_pm = "AM"
let day = time.getDate()
let month = time.getMonth();
let year = time.getFullYear();

if(hour > 12){
    hour = hour - 12
    am_pm = "PM"
}
if(hour == 0){
    hour = hour+12
    am_pm="AM"
}

hour = hour < 10 ? "0" + hour : hour
min = min < 10 ? "0" + min : min
sec = sec < 10 ? "0" + sec : sec
day = day < 10 ? "0" + day : day
month = month < 10 ? "0" + month : month


let currentTime = hour +":"+min+":"+sec+am_pm +" "+ day+"-"+month+"-"+ year

document.getElementById("clock").innerHTML = currentTime

}

setInterval(showtime, 1000);
