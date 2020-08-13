var lat=25,longt=30,place;

window.addEventListener('load', ()=> {
  var x = document.getElementById("demo");
  

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  
} else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
}



function showPosition(position) {
  longt=position.coords.longitude;
  lat=position.coords.latitude;
  x.innerHTML = "Please Wait...";
//console.log(longt);
//longt=document.getElementById("demo");
  $(document).ready(function(){     //this code running before page loading so put inside showPositition
    var lat1=lat;
    var longt1=longt;
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://us1.locationiq.com/v1/reverse.php?key=d205f7d032efd1&lat="+lat1+"&lon="+longt1+"&format=json",    
      "method": "GET"
    }

  //here we find the city of current location
    $.ajax(settings).done(function (data) {
      place=data.address.city;
      console.log(place);
      valueSender();
    });
    
    //now we use the current city
    function valueSender(){
      localStorage.setItem("city",place);
      localStorage.setItem("value",1);
      window.location.href="weatherofcity.html";
    }

    
    
  }); 

}

function showError(error) {
switch(error.code) {
  case error.PERMISSION_DENIED:
    x.innerHTML = "Please allow Location Access!!!"
    var cnt=1;
    setInterval(() => {
          cnt++;
          if(cnt > 2)     window.close();
     }, 1000);
      
    break;
  case error.POSITION_UNAVAILABLE:
    x.innerHTML = "Location information is unavailable."
    var cnt=1;
    setInterval(() => {
          cnt++;
        if(cnt > 2)     location.replace('search.html')
     }, 1000);
    break;
  case error.TIMEOUT:
    x.innerHTML = "The request to get user location timed out."
    var cnt=1;
    setInterval(() => {
          cnt++;
        if(cnt > 2)     location.replace('search.html')
     }, 1000);
    break;
  case error.UNKNOWN_ERROR:
    x.innerHTML = "An unknown error occurred."
    var cnt=1;
    setInterval(() => {
          cnt++;
        if(cnt > 2)     location.replace('search.html')
     }, 1000);
    break;
}
}

  
});
