"use strict";

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees", function() {
    expect(thermostat.temperature()).toEqual(20);
  });

  it("increases the temperature with up function", function() {
    thermostat.up();
    expect(thermostat.temperature()).toEqual(21);
  });
  it("descreases the temperature with down function", function() {
    thermostat.down();
    expect(thermostat.temperature()).toEqual(19);
  });
  it("minimum temperature is 10 degrees", function() {
    expect(function() {
      thermostat.down(15);
    }).toThrowError("default temperature is 10");
  });
  it("sets maximum temperature to 25 degrees if saving mode is on", function() {
    thermostat.savingModeOn();
    expect(function() {
      thermostat.up(20);
    }).toThrowError("cannot increase: maximum temperature is 25 degrees");
  });
  it("sets maximum temperature to 32 degrees if saving mode is off", function() {
    thermostat.savingModeOff();
    expect(function() {
      thermostat.up(13);
    }).toThrowError("cannot increase: maximum temperature is 32 degrees");
  });
  it("saving mode is on by default", function() {
    expect(thermostat.savingMode()).toBeTruthy();
  });
  it("resets the temperature to 20", function(){
      thermostat.reset();
    expect(thermostat.temperature()).toEqual(20);
  });
  it("returns low energy usage", function(){
      thermostat.down(11);
    expect(thermostat.usage()).toEqual('low-usage');
  });
  it("returns medium energy usage", function(){
    expect(thermostat.usage()).toEqual('medium-usage');
  });
  it("returns high energy usage", function(){
      thermostat.savingModeOff();
    thermostat.up(10);
  expect(thermostat.usage()).toEqual('high-usage');
});
});
