"use strict";

function Thermostat() {
  this._temperature = 20;
  this._savingMode = true;
}

Thermostat.prototype.temperature = function() {
  return this._temperature;
};

Thermostat.prototype.up = function(number = 1) {
    if(this.savingMode() === true && this._temperature + number > 25){
        throw new Error("cannot increase: maximum temperature is 25 degrees");
        return;
    } 
  this._temperature += number;
};
Thermostat.prototype.down = function(number = 1) {
  if (this._temperature - number < 10) {
    throw new Error("default temperature is 10");
  }
  this._temperature--;
};
Thermostat.prototype.savingModeOn = function(){
    this._savingMode = true;
};
Thermostat.prototype.savingMode = function(){
    return this._savingMode;
};