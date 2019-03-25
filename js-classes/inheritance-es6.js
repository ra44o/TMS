class Car {
  constructor(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.fuelCapacity = fuelCapacity;
    this.fuelConsumption = fuelConsumption;
  }

  getFullName() {
    return this.name + ' ' + this.model;
  }
  
  getAge() {
    return new Date() - this.year;
  }
  
  changeColor(newColor) {
    if (newColor === this.color) {
      console.log('Your car is in this color already.');
    } else {
      this.color = newColor;
      console.log('Color changed on ' + this.color + '.');
    }
  }
  
  calculateWay(kilometres, fuel) {
    if (fuel < 10) {
      console.log('You\'d better to refuel because you have less than 10 litres of fuel.');
    }
    const wayTime = ((kilometres / (this.maxSpeed * 0.5))*60).toFixed(0);
    console.log('You need' + wayTime + 'minutes to reach your destination.');
    if (this.fuelCapacity - kilometres / 100 * this.fuelConsumption < 0) {
      const refuelTimes = Math.ceil(kilometres / 100 * this.fuelConsumption / this.fuelCapacity);
      console.log('You will need to refuel' + refuelTimes + 'times.');
    }
  }
}

class BMW extends Car {
  constructor(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 12, country, sunRoof) {
    super(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
    this.country = country;
    this.sunRoof = sunRoof;
  }

  turnOnMusic() {
    console.log('pa-pa para-para pa-pa ...');
  }
}

class Lexus extends Car {
  constructor(name, model, year, color, maxSpeed, fuelCapacity = 50, fuelConsumption = 11, country, climateControl) {
    super(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
    this.country = country;
    this.climateControl = climateControl;
  }

  beep() {
    console.log('beep-beep-beep ...');
  }
}

class Toyota extends Car {
  constructor(name, model, year, color, maxSpeed, fuelCapacity = 45, fuelConsumption = 8, country, wheelsDiametr) {
    super(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
    this.country = country;
    this.wheelsDiametr = wheelsDiametr;
  }

  chargePhone() {
    console.log('The phone is charging.');
  }
}
