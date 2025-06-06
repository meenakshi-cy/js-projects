let clock=document.querySelector("#clock");
setInterval(() => {
    let date= new Date();
    let hours= String(date.getHours());
    let minutes= String(date.getMinutes());
    let seconds= String(date.getSeconds());
    clock.innerHTML=`${hours.padStart(2,"0")}:${minutes.padStart(2,"0")}:${seconds.padStart(2,"0")}`
}, 1000);
