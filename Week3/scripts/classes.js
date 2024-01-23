/**
 * Vehicle
 */
class Vehicle {
    constructor(wheels)
    {
        // set number of wheels
        this.wheels = wheels;
    }

    toString()
    {
        // Returning the number of wheels for a vehicle
        return "(" + this.wheels + ")";
    }
}

/**
 * Car extends Vehicle
 */
class Car extends Vehicle
{
    constructor(colour)
    {
        // Call super to create vehicle property; all cars have four wheels
        super(4);
        // Set custom property colour
        this.colour = colour;
    }
    // Overriding toString to print out wheels and the car colour
    toString()
    {
        // Returning the number of wheels for a vehicle
        return super.toString() + " coloured: " + this.colour;
    }
}

let genericVehicle = new Vehicle(2);
console.log(genericVehicle, genericVehicle.toString());
// Check to see if genericVehicle is an instance of Car, Vehicle
console.log(genericVehicle instanceof Car); // false
console.log(genericVehicle instanceof Vehicle); // true

let blueCar = new Car("blue")
console.log(blueCar, blueCar.toString());
// Check to see if blueCar is an instance of Car, Vehicle
console.log(blueCar instanceof Car); // true
console.log(blueCar instanceof Vehicle); // true