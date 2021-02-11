'use strict';

class Thermostat {

  constructor() {
    this.temperature = 20;
  };

  getCurrentTemp() {
    return this.temperature;
  }

  up(number) {
    this.temperature += number;
    return this.temperature;
  };

  down(number) {
    this.temperature -= number;
    return this.temperature;
  };

};
