var place;


function function1() {
    place=document.getElementById("userinput").value;
    console.log(place);
    localStorage.setItem("city",place);
    localStorage.setItem('value',0);
    window.location.href="weatherofcity.html";
    
}



function function2() {
    
    window.open('weatherofcurr.html');
}
