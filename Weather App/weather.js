const apiKey = "e5680cc68a9b1efc52ff4699076776a2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const textBox = document.querySelector(".weather-app input");
const searchBtn = document.querySelector(".weather-app button");

/*
    This function, checkWeather, does the following:

    ->It sends a request to a weather API (the URL of which is stored in a variable called apiUrl) to get 
    information about the weather.

    ->It waits for a response from the API, and when the response arrives, it reads the data from that response.

    ->After getting the data, it converts it into a format that JavaScript can understand (specifically, it's converting 
    it into a JavaScript object).

    ->Finally, it prints the weather data to the console.
*/

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
}

searchBtn.addEventListener("click", ()=>{
    let cityName = textBox.value;
    checkWeather(cityName);
});

checkWeather();
