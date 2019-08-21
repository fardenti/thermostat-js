"use strict";

function Thermostat() {
  this._temperature = 20;
}

Thermostat.prototype.temperature = function() {
  return this._temperature;
};

Thermostat.prototype.up = function(number = 1) {
  this._temperature += number;
};
Thermostat.prototype.down = function(number = 1) {
  if (this._temperature - number < 10) {
    throw new Error("default temperature is 10");
  }
  this._temperature--;
};
