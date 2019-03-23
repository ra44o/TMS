function Car(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10) {
  this.name = name;
  this.model = model;
  this.year = year;
  this.color = color;
  this.maxSpeed = maxSpeed;
  this.fuelCapacity = fuelCapacity;
  this.fuelConsumption = fuelConsumption;
}

Car.prototype.getFullName = function() {
  return `${this.name} ${this.model}`;
}

Car.prototype.getAge = function() {
  return new Date() - this.year;
}

Car.prototype.changeColor = function(newColor) {
  if (newColor === this.color) {
    console.log('Your car is in this color already.');
  } else {
    this.color = newColor;
    console.log(`Color changed on ${this.color}.`);
  }
}

Car.prototype.calculateWay = function(kilometres, fuel) {
  if (fuel < 10) {
    console.log(`You'd better to refuel because you have less than 10 litres of fuel.`);
  }
  const wayTime = ((kilometres / (this.maxSpeed * 0.5))*60).toFixed(0);
  console.log(`You need ${wayTime} minutes to reach your destination.`);
  if (this.fuelCapacity - kilometres / 100 * this.fuelConsumption < 0) {
    console.log(`You will need to refuel ${Math.ceil(kilometres / 100 * this.fuelConsumption / this.fuelCapacity)} times.`);
  }
}

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
  Child.superclass = Parent.prototype;
}

function BMW(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10) {
  BMW.superclass.constructor.call(this, name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
  // добавить других свойств
}

extend(BMW, Car);
