console.log('Hello World');
let cityEl = 'London';
const apiKey = '8b2d35def7e94f94a090d5619b19ea83';
let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityEl + "&APPID=" + apiKey;  

$.ajax({
    url:queryURL,
    method:"GET",
}).then(function(response){
    console.log(response);
})