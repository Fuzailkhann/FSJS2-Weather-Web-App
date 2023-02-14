let data 

const inputBox = document.getElementById("inputBox");
const countryName = document.getElementById("countryName");
const stateName = document.getElementById("stateName");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const  windspeed = document.getElementById("windspeed");
const temp = document.getElementById("temperature");
const logoImg = document.getElementById("logoImage");
const weather =document.getElementById("weatherstatus");

const getData = async (event) =>{
    event.preventDefault();
    if(!inputBox.value)
    {
        alert("Please Enter a city Name");
        return;
    }

    const city = inputBox.value;

    // fetch the data

    const fetchData = await fetch(`http://api.weatherapi.com/v1/current.json?key=5df3b12550314980814105915231102&q=${city}`);
    const orgdata = await fetchData.json();
    data = orgdata;
    console.log(data);

    // displaying html
    countryName.innerHTML = data.location.country;
    stateName.innerHTML = data.location.region;
    cityName.innerHTML = data.location.name;

    //weather 
    weatherstatus.innerHTML = data.current.condition.text;
    logoImage.src = data.current.condition.icon;
    temperature.innerHTML = data.current.temp_c;
    windspeed.innerHTML = data.current.wind_kph;
    humidity.innerHTML = data.current.humidity;

}