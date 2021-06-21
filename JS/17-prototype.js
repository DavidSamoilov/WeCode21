//Prior to ES6

//Function constructor
function Point(x, y) {
    this.x = x || 1;
    this.y = y || 1;    
}

Point.prototype.biggest = function(other) {
    return this.x > other.x ? this : other; 
}

Point.prototype.toString = function() {
    return `(${this.x},${this.y})`;
}

const point1 = new Point(1, 2);
const point2 = new Point(0, 3);
const point3 = new Point(3, 1);

console.log(`Biggest point: ${point1.biggest(point3).biggest(point2)}`); 



function sayYourName() {
    console.log(this.myName);
}

//Object is the default prototype
const person = {
    myName: 'Shahar'
}


// Not used so much, but
// person.__proto__.sayYourName = sayYourName;

// console.log(person.sayYourName());// person, nor prototypes, doesnt have sayYourName

Object.setPrototypeOf(person, {
    sayYourName,
    eliezer: 42,
    hallo: function() {
        console.log('stam');
    }
});

// Object
//   /\
//   ||
// {
//     sayYourName
// }
//   /\
//   ||
// person



prototype = {
    sayYourName: function() {
        //...
    }
}

person = {
    name: 'Yakov',
    __proto__: prototype
}

person.sayYourName();