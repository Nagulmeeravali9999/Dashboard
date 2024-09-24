

// Left Side
const apiKey = "954ff351bdac8243401a1815bd5c07f8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

 const searchBox = document.querySelector(".search input");
 const searchBtn = document.querySelector(".search .button i");
 const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404)
    {
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
    var data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src="clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src="clear.webp";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src="rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src="Drizzle.webp";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src="mist.png";
    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
}
}

searchBtn.addEventListener("click", () => {
    checkWeather (searchBox.value);
})

// Right Side

const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const allMonths = ["January", "Februaday", "March", "April", "May", "June", "Julay", "August", "September", "October", "November", "December"];

console.log(today);

date.innerHTML= (today.getDate() < 10 ? "0" : " ") + today.getDate();
day.innerHTML= weekDays[today.getDay()];
month.innerHTML= allMonths[today.getMonth()];
year.innerHTML= today.getFullYear();