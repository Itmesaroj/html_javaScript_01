

// Vehicle Constructor function
function Vehicle(brand, model, speed, fuelType) {
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.fuelType = fuelType;
}

Vehicle.prototype.accelerate = function () {
    this.speed++;
    console.log(this.speed);
};

Vehicle.prototype.brake = function () {
    this.speed--;
    console.log(this.speed);
};

Vehicle.prototype.refuel = function () {
    console.log(`${this.brand} ${this.model} is refueling.`);
};

// Car Constructor function
function Car(numberOfWheels, brand, model, speed, fuelType) {
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfWheels = numberOfWheels;
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.honk = function () {
    console.log("honk honk......");
};

// Airplane constructor function
function Airplane(brand, model, speed, fuelType, numberOfEngines, hasLandingGear) {
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfEngines = numberOfEngines;
    this.hasLandingGear = hasLandingGear;
}
Airplane.prototype = Object.create(Vehicle.prototype);
Airplane.prototype.constructor = Airplane;

Airplane.prototype.takeOff = function () {
    console.log(`${this.model} ${this.brand} the airplane is taking off`);
};

// Creating instances
let myCar = new Car(4, "Toyota", "Camry", 60, "Petrol");
let myAirplane = new Airplane("Boeing", "747", 800, "Jet Fuel", 4, true);

// Demonstrate methods
myCar.accelerate();
myCar.brake();
myCar.refuel();
myCar.honk();

myAirplane.accelerate();
myAirplane.brake();
myAirplane.refuel();
myAirplane.takeOff();
