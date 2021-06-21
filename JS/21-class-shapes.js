class Shape {
    constructor(x, y){
        this.x = x;
        this.y = y;
        Shape._counter++;
    }
    get area() {
        return 0;
    }
    toString() {
        return `${this.constructor.name} (${this.x},${this.y})`;
    }
    //static means - class level. Just 1 counter for all shapes
    static Counter() {
        return Shape._counter;
    }
}

//static member
//a field/member in a high level, not related to a specific instance
Shape._counter = 0;

const shape = new Shape(1,1);
console.log(''+shape);
console.log(shape.area);

class Rectangle extends Shape{
    constructor(x, y, width, height){
        super(x, y);
        this.width = width;
        this.height = height;    
    }
    get area() {
        return this.width * this.height;
    }
    
    toString() {
        return `${super.toString()} w ${this.width} h ${this.height}`;
    }
}

const rect = new Rectangle(1,3, 10, 20);

console.log(`Shapes count: ${Shape.Counter()}`);// 2

console.log(''+rect, 'area', rect.area); //Rectangle (1,3) w 10 h 20

class Box extends Rectangle {
    constructor(x, y, width, height, length){
        super(x, y, width, height);
        this.length = length;
    }
    get area() {
        return (2 * this.width * this.height) +
               (2 * this.width * this.length) +
               (2 * this.height * this.length);
    }
    
    toString() {
        return `${super.toString()} l ${this.length}`;
    }
}


const boxi = new Box(1,3, 10, 20, 5);

console.log(''+boxi, 'area', boxi.area); //Box (1,3) w 10 h 20 l 5

class Circle extends Shape{
    constructor(x, y, radius){
        super(x, y);
        this.radius = radius;
    }
    get area () {
        return Math.PI * this.radius**2;
    }
    get circumreference() {
        return 2 * Math.PI * this.radius;
    }
    toString() {
        return `${super.toString()} radius ${this.radius}`;
    }
}



const circle = new Circle(4, 4, 8);
console.log(`Shapes count: ${Shape.Counter()}`);// 4