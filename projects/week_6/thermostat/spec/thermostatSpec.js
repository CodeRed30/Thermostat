'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function () {
    thermostat = new Thermostat();
  })

  // Thermostat starts at 20 degrees
  it('Starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemp()).toEqual(20);
  });

// You can increase the temp with an up function
  it ('Goes up when called upon', function() {
    thermostat.up(1);
    expect(thermostat.getCurrentTemp()).toEqual(21);
  });

// You can decrease the temp with a down function
  it('Goes down when called upon', function() {
    thermostat.down(1)
    expect(thermostat.getCurrentTemp()).toEqual(19);
  });

});
