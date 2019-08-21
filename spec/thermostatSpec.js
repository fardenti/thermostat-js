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
});
