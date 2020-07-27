window.addEventListener('load', ()=> {
    var x = document.getElementById("demo");
    

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
    
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }


function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
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
