const time = document.getElementById("time");
const me = document.getElementById("me");
const date = document.getElementById("d");
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const latitude = document.getElementById("lat");
const loongitude = document.getElementById("lon");
const pressure = document.getElementById("pressure");
const humidity = document.getElementById("humidity");
const winds = document.getElementById("Wind Speed");
const sunrise = document.getElementById("Sunrise");
const weathercard = document.querySelector("#forcast");
const timezone = document.getElementById("timezone");

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "Sep", "Oct", "Nov", "Dec"];

setInterval(() => {

    let newdate = new Date();
    time.innerText = newdate.toLocaleTimeString();

    let newmonth = newdate.getMonth();
    let newday = newdate.getDay();
    let ndate = newdate.getDate();

    // console.log(newmonth, newday, ndate);

    date.innerHTML = days[newday] + ", " + months[newmonth] + " " + ndate;
    // console.log(date.innerHTML);

    if (newdate.getHours() >= 0 && newdate.getHours() < 12) {
        me.innerText = "AM";
    }
    else {
        me.innerText = "PM";
    }

}, 1000);

function getfutureData(lat, lon) {
    let uniquedate = [];
    const newresponse = fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=45eaa71c3786abd2e78234b30a05feea&units=metric`);
    newresponse.then((newres) => {
        return newres.json();
    }).then((newres) => {
        console.log(newres);

        const { list } = newres;
        const fivedayforcast = list.filter((newres) => {
            const forecastdate = new Date(newres.dt_txt).getDate();
            if (!uniquedate.includes(forecastdate)) {
                return uniquedate.push(forecastdate);
            }
        });
        console.log(fivedayforcast);
        weathercard.innerHTML= "";
       
        fivedayforcast.forEach((data) => {
            weathercard.insertAdjacentHTML("beforeend",displaydata(data));
        });
    })
}

function displaydata(data){
    return `<div class="future"><p class="day">${data.dt_txt.split(" ")[0]}</p>
     <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" class="icon">
         <p class="max">MaxTemp: ${data.main.temp_max}&deg;c</p>
         <p class="min">MinTemp: ${data.main.temp_min}&deg;c</p></div>`

    
}

//Api = "9948bec860ba06adccf6660a595204ff"

let api = "45eaa71c3786abd2e78234b30a05feea";

function getWeatherdata() {
    const cityname = input.value;
    if (!cityname) { return "" }
    const response = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${api}&units=metric`);

    response.then((res) => {
        return res.json();
    }).then((res) => {
        console.log(res);
        const { main } = res;
        pressure.innerText = main.pressure;
        humidity.innerText = main.humidity;
        const { coord } = res;
        latitude.innerText = `lat: ${coord.lat}`;
        loongitude.innerText = `lon: ${coord.lon}`;
        const { wind } = res;
        winds.innerText = wind.speed;
        const { sys } = res;
        sunrise.innerText = sys.sunrise;
        const {name} = res;
        timezone.innerText = `${sys.country} \ ${name}`;

        getfutureData(coord.lat ,coord.lon);

    }).catch((error) => {
        console.log(error);
    })
}

btn.addEventListener("click", getWeatherdata);