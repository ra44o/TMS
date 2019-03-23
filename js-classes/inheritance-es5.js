function Car(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10) {
  this.name = name;
  this.model = model;
  this.year = year;
  this.color = color;
  this.maxSpeed = maxSpeed;
  this.fuelCapacity = fuelCapacity;
  this.fuelConsumption = fuelConsumption;
}

Car.prototype.getFullName = function () {
  return this.name;
}

Car.prototype.getAge = function () {
  return new Date() - this.year;
}

Car.prototype.changeColor = function (newColor) {
  if (newColor === this.color) {
    console.log('Your car is in this color already.');
  } else {
    this.color = newColor;
    console.log('Color changed on ' + this.color);
  }
}
