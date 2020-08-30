var key = "617f886168a1ef642bd485c8ecb91d71";
var autocompleteKey = "AIzaSyDbQxUr5vasMa1XwTKzmoGKZtSgQBfLZys";

init();

function parseData(data) {
  if("200".localeCompare(data.cod) == 0) {
    document.getElementById("wind").value = data.wind.speed + " m/s";  
    document.getElementById("humidity").value = data.main.humidity + " g/m^3";
    document.getElementById("temperature").value = Math.round((data.main.temp - 273) * 100) / 100 + " C";  

  } 

}

function init() {
  // $(document).ready(function(){

    document.querySelector('.input').addEventListener("keyup", function(event){
      if (event.keyCode === 13) {
        var city = document.getElementById("myCity").value;
        document.getElementById("town_name").innerHTML = city;

        $.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}`, function(data, status){
          // alert("Data: " + data + "\nStatus: " + status);
          
          // console.log(data);
          parseData(data);
        }).fail(error => alert("Something went wrong! :("));

      }
    });

    document.querySelector('.input').addEventListener("click", function(event){
      if(document.getElementById("myCity").value != "") {
        var city = document.getElementById("myCity").value;
        document.getElementById("town_name").innerHTML = city;

        $.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}`, function(data, status){
          // alert("Data: " + data + "\nStatus: " + status);
          
          // console.log(data);
          parseData(data);
        }).fail(error => alert("Something went wrong! :("));

      }
    });
  
  // });


}



