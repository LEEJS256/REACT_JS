const clock = document.querySelector("h2#clock");

function getClock(){
    const today = new Date();
    const hours = String(today.getHours()).padStart(2,"0");
    const minites =  String(today.getMinutes()).padStart(2,"0");
    const seconds = String(today.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minites}:${seconds} `; 
    // console.log(`${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`);
}

getClock();
setInterval(getClock,1000);