  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=410d6f0a45c42109e3fcee5882a08729';
    var units = '&units=metric';

    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    $('#current-town-name').text(data.name);
    console.log(data.name)
    })
};

displayWeather('London');

$('#select-city').submit(function(event) {
  event.preventDefault();
  var city = $('#current-city').val();
  console.log(city);
  displayWeather(city);
  console.log(city);
});