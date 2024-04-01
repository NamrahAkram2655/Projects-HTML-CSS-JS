// 35f396f044bba3e58678acb4f7b42b55

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// unit=matric

let api = "35f396f044bba3e58678acb4f7b42b55";
const btn = document.getElementById("btn");
const SearchInput = document.getElementById("input");
const icon = document.getElementById("icon");

const city = document.getElementById("city");
const temp = document.getElementById("temp");
const looks = document.getElementById("looks");
const weather = document.querySelector(".weather");

function search() {
    city.innerText = SearchInput.value;
}

btn.addEventListener("click", function () {
    search();
    let location = SearchInput.value;
    weathercity(location);
});

function weathercity(city) {
    const response = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;
    
    fetch(response).then((response) => {
        return response.json();
    }).then((response)=>{   
        console.log(response);
        
        const {main} = response;
        temp.innerText= `${main.feels_like}°C`;
        
        const {weather} = response;
        looks.innerText = weather[0].main;

        icon.innerHTML=`<img src='https://openweathermap.org/img/wn/${weather[0].icon}@2x.png'>`

    }).catch((error)=>{
        console.log(error);
    });
}

