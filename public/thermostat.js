"use strict";

function Thermostat() {
  this._temperature = 20;
  this._savingMode = true;
}

Thermostat.prototype.temperature = function() {
  return this._temperature;

};
;
Thermostat.prototype.up = function(number = 1) {
  if (this.savingMode() === true && this._temperature + number > 25) {
    alert("cannot increase: maximum temperature is 25 degrees");
    throw new Error("cannot increase: maximum temperature is 25 degrees");
    return;
  } else if (this.savingMode() === false && this._temperature + number > 32) {
    alert("cannot increase: maximum temperature is 32 degrees")
    throw new Error("cannot increase: maximum temperature is 32 degrees");
    return;
  }
  this._temperature += number;
};

Thermostat.prototype.down = function(number = 1) {
  if (this._temperature - number < 10) {
    alert("default temperature is 10");
    throw new Error("default temperature is 10");
    return;
  }
  this._temperature -= number;
};

Thermostat.prototype.savingModeOn = function() {
  this._savingMode = true;
};

Thermostat.prototype.savingModeOff = function() {
  this._savingMode = false;
};
Thermostat.prototype.savingMode = function() {
  return this._savingMode;
};

Thermostat.prototype.reset = function() {
  this._temperature = 20;
};

Thermostat.prototype.usage = function() {
  if (this._temperature < 18) {
    return "low-usage";
  } else if (this._temperature < 25) {
    return "medium-usage";
  } else {
    return "high-usage";
  }
};


$(document).ready(function(){
  const thermostat = new Thermostat();
  function updateTemperature() {
    $("#temperature").text(thermostat.temperature());
    $("#temperature").attr("class", thermostat.usage());
  }
//   $("#temperature").text(thermostat.temperature());

  $("#temperature-up").on("click", function() {
    thermostat.up();
    updateTemperature();
  });
  $("#temperature-down").on("click", function() {
    thermostat.down();
    $("#temperature").text(thermostat.temperature());
    updateTemperature();
  });
  $("#temperature-reset").on("click", function() {
    thermostat.reset();
    updateTemperature();
  });
  $("#powersaving-on").on("click", function() {
    thermostat.savingModeOn();
    updateTemperature();
    $("#saving-mode").text("saving mode on");
  });
  $("#powersaving-off").on("click", function() {
    thermostat.savingModeOff();
    updateTemperature();
    $("#saving-mode").text("saving mode off");
  });

  $(window).on('unload', function() {
    $.ajax({
      type: 'POST',
      url: '/temperature',
      data: { temperature: thermostat.temperature()},
      async: false
    });
  });
});

