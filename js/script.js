$(function () { 
  $.get("http://api.openweathermap.org/data/2.5/weather?q=Pretoria,za&units=metric&APPID=ad072cb9c0700a66a327e65573d6cee8", function(response) {
    var weatherResult = response;
    var name = "City: " + weatherResult.name;
    var temp = "Temperature: " + weatherResult.main.temp + "°C";
    var tempMax = "Maxmimum Temperature: " + weatherResult.main.temp_max + "°C";
    var tempMin = "Minimum Temperature: " + weatherResult.main.temp_min + "°C";
    var pressure = "Pressure: " + weatherResult.main.pressure + " Pa";
    var humidity = "Humidity: " + weatherResult.main.humidity + " g/m3";
    
    if(weatherResult.weather.length > 0) {
      var weatherDescription = "Weather circumstances are: " + weatherResult.weather[0].main;
    } else {
      var weatherDescription = "No weather description avaiable";
    }

    document.getElementById("weatherHeading").innerHTML = "Current Weather:"
    document.getElementById("name").innerHTML = name;
    document.getElementById("temp").innerHTML = temp;
    document.getElementById("tempMax").innerHTML = tempMax;
    document.getElementById("tempMin").innerHTML = tempMin;
    document.getElementById("pressure").innerHTML = pressure;
    document.getElementById("humidity").innerHTML = humidity;
    document.getElementById("weatherDescription").innerHTML = weatherDescription;  
  })
  .fail(function(jqXHR, textStatus, errorThrown) {
    document.getElementById("weatherHeading").innerHTML = "Error:" + "</br>" + errorThrown;
  });
});    

