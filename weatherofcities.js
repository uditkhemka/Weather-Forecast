var city,retrieve=-1;
retrieve=localStorage.getItem("value");
//retrieve=0;
console.log(retrieve);
if(retrieve==1){
    city=localStorage.getItem("city");
    console.log(city);
}
else{
    city=localStorage.getItem("city");
    console.log(city);
}

//localStorage.setItem("city",resetValue);


const api = {               //api key
    key: "881fa4d8770aa81ebcc14abc786aa0aa",
    base: "https://api.openweathermap.org/data/2.5/"
  }
  
 
    fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)             //using the api
      .then(weather => {
        return weather.json();
      }).then(displayResults);
  
  function displayResults (weather) {           //displaying
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);
  
    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
  
    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;
  
    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
  }
  
  function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }
