  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';

    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    console.log(data)
    $('#current-city-name').text(data.name);
    })
}

displayWeather('London');

$('#select-city').submit(function(event) {
  event.preventDefault();
  var city = $('#current-city').val();
  displayWeather(city);
})