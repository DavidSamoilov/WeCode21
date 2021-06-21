function car(model) {
    //Plain JS object
    //Litteral object
    return {
        model,
        wheels: 4
    }
}

const car1 = car('Hyundai');
const car2 = car('Volvo');

console.log(car1, car2);

console.log(car1 instanceof Car);


//Function constructor
//With capitalized name
//Creates a family of objects
function Car(model) {
    this.model = model;
    this.wheels = 4;
}

const car3 = new Car('Hyundai');
const car4 = new Car('Volvo');

console.log(car3, car4);

console.log(car3 instanceof Car, typeof car3);

//EX
// Create a function constructor of a Point with x and y (1,1 if no values supplied)
// Add a method which gets another point and returns the biggest point by x
// Create 3 Point objects.
// Using only the method - find the biggest point.

function Point(x, y) {
    //this = {}
    this.x = x || 1;
    //this = { x: 1 }
    this.y = y || 1;
    //this = { x: 1, y: 1 }
    this.biggest = function(other) {
        return this.x > other.x ? this : other; 
    }
    this.toString = function() {
        return `(${x},${y})`;
    }
    //this = { x: 1, y: 1, biggest: Function }
    // return this;
}

const point1 = new Point(1, 2);
const point2 = new Point(0, 3);
const point3 = new Point(3, 1);

console.log(`Biggest point: ${point1.biggest(point3).biggest(point2)}`); 