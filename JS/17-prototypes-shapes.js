function Shape(x, y) {
    this.x = x;
    this.y = y;
    Shape._counter++;
}

Shape.prototype.area = function() {
    return 0;
}

Shape.prototype.toString = function() {
    return `${this.constructor.name} (${this.x},${this.y})`;
}

//static member
//a field/member in a high level, not related to a specific instance
Shape._counter = 0;
Shape.Counter = function() {
    return Shape._counter;
}

const shape = new Shape(1,1);
console.log(''+shape);
console.log(shape.area());

function Rectangle(x, y, width, height) {
    Shape.call(this, x, y);
    this.width = width;
    this.height = height;    
}

function inheritsFrom(Parent, Child) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;    
}

// //Object.create creates a new object ({}), with the specified prototype)
// //This is good for us, because we need a fresh object for Rectangle prototype!
// Rectangle.prototype = Object.create(Shape.prototype);
// //Then, we 'fix' the constructor to point correctly to Rectangle function constructor
// Rectangle.prototype.constructor = Rectangle;

inheritsFrom(Shape, Rectangle);

Rectangle.prototype.area = function() {
    return this.width * this.height;
}

Rectangle.prototype.toString = function() {
    return `${Shape.prototype.toString.call(this)} w ${this.width} h ${this.height}`;
}

const rect = new Rectangle(1,3, 10, 20);

console.log(`Shapes count: ${Shape.Counter()}`);// 2


console.log(''+rect, 'area', rect.area()); //Rectangle (1,3) w 10 h 20

function Box(x, y, width, height, length) {
    Rectangle.call(this, x, y, width, height);
    this.length = length;
}

inheritsFrom(Rectangle, Box);

Box.prototype.area = function() {
    return this.width * this.height * this.length;
}

Box.prototype.toString = function() {
    return `${Rectangle.prototype.toString.call(this)} l ${this.length}`;
}

const boxi = new Box(1,3, 10, 20, 5);

console.log(''+boxi, 'area', boxi.area()); //Box (1,3) w 10 h 20 l 5

function Circle(x, y, radius) {
    Shape.call(this, x, y);
    this.radius = radius;
}

inheritsFrom(Shape, Circle);

Circle.prototype.area = function () {
    return Math.PI * this.radius**2;
}

Circle.prototype.toString = function() {
    return `${Shape.prototype.toString.call(this)} radius ${this.radius}`;
}

Circle.prototype.circumreference = function () {
    return 2 * Math.PI * this.radius;
}

const circle = new Circle(4, 4, 8);
console.log(`Shapes count: ${Shape._counter}`);// 4

