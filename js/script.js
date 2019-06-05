$(function () { // Same as document.addEventListener("DOMContentLoaded"...
  $.get("http://api.openweathermap.org/data/2.5/weather?q=Pretoria,za&units=metric&APPID=ad072cb9c0700a66a327e65573d6cee8", function(response) {
    var weatherresult = response;
    var name = "City: " + weatherresult.name;
    var temp = "Temperature: " + weatherresult.main.temp + "°C";
    var tempMax = "Maxmimum Temperature: " + weatherresult.main.temp_max + "°C";
    var tempMin = "Minimum Temperature: " + weatherresult.main.temp_min + "°C";
    var pressure = "Pressure: " + weatherresult.main.pressure + " Pa";
    var humidity = "Humidity: " + weatherresult.main.humidity + " g/m3";
    var weatherdescription = "Weather description: " + weatherresult.weather[0].main;
    console.log(weatherresult);
    document.getElementById("name").innerHTML = name;
    document.getElementById("temp").innerHTML = temp;
    document.getElementById("tempMax").innerHTML = tempMax;
    document.getElementById("tempMin").innerHTML = tempMin;
    document.getElementById("pressure").innerHTML = pressure;
    document.getElementById("humidity").innerHTML = humidity;  
    document.getElementById("weatherdescription").innerHTML = weatherdescription;
  })
true;
});
