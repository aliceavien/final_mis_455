const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

date = new Date();
document.getElementById("date").innerText = weekday[date.getDay()];
city = "http://api.openweathermap.org/geo/1.0/direct?q=USA&appid=378d535bfca5d57fc5c0409174e9ac7a";

fetch(city).then(response => response.json()).then(data => showdata(data));