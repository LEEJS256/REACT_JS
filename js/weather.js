const API_KEY ="1a0ba3ceddd893ae18e09526b6b13224";

function onGeoOK(position){
    const lat =position.coords.latitude;
    const lng =position.coords.longitude;
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((Response) => Response.json())
    .then((data)=> {
        const weather = document.querySelector("#weather span:first-child");
        const city      = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText =`${data.weather[0].main} / ${data.main.temp}`;
 
        
        });
}

function onGeoError(){
    alert("Can't find u, no weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);