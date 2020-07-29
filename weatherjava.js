let lat,longt;

window.addEventListener('load', ()=> {
  var x = document.getElementById("demo");
  

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition, showError);
  
} else { 
  x.innerHTML = "Geolocation is not supported by this browser.";
}


function showPosition(position) {
  lat=position.coords.latitude;
  longt=position.coords.longitude;
x.innerHTML = "Latitude: " + lat + 
"<br>Longitude: " + position.coords.longitude;
}

function showError(error) {
switch(error.code) {
  case error.PERMISSION_DENIED:
    x.innerHTML = "Please allow Location Access!!!"
    var cnt=1;
    setInterval(() => {
          cnt++
        if(cnt > 2)     window.close();
     }, 1000);
      
    break;
  case error.POSITION_UNAVAILABLE:
    x.innerHTML = "Location information is unavailable."
    var cnt=1;
    setInterval(() => {
          cnt++
        if(cnt > 2)     location.replace('search.html')
     }, 1000);
    break;
  case error.TIMEOUT:
    x.innerHTML = "The request to get user location timed out."
    var cnt=1;
    setInterval(() => {
          cnt++
        if(cnt > 2)     location.replace('search.html')
     }, 1000);
    break;
  case error.UNKNOWN_ERROR:
    x.innerHTML = "An unknown error occurred."
    var cnt=1;
    setInterval(() => {
          cnt++
        if(cnt > 2)     location.replace('search.html')
     }, 1000);
    break;
}
}

}); 

$(document).ready(function(){
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://us1.locationiq.com/v1/reverse.php?key=d205f7d032efd1&lat="+lat+"&lon="+longt+"&format=json",    //some error,correct it
    "method": "GET"
  }

  //here we find the city of current location
  

  //now we use the current city
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Varanasi&units=imperial&appid=881fa4d8770aa81ebcc14abc786aa0aa",function(data){
    //console.log(data);

    var icon="http://openweathermap.org/img/w/"+ data.weather[0].icon + ".png";
    console.log(icon);
    
  });
  
});
