var place;


function function1(){
    place=document.getElementById("userinput");
    console.log(place);
    localStorage.setItem("city1",place);
    //localStorage.setItem("value",0);
   // window.location.href="weatherofcity.html";
    window.open('weatherofcity.html');
}

function function2() {
    
    window.open('weatherofcurr.html');
}
