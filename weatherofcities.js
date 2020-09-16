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


$.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&appid=881fa4d8770aa81ebcc14abc786aa0aa",function(data){
    console.log(data);
    var icon= "https://openweathermap.org/img/w/"+data.weather[0].icon+".png";
    //console.log(icon);
    var weather= data.weather[0].main;
    var temp=data.main.temp;
    $('.icon').attr('src', icon);
    
    $('.temp').append(temp);
    $('.weather-info').append(weather);
});
