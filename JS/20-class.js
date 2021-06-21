//ES6
//class is a function constructor
//syntactic sugar over fc + prototypes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        Person.counter++;
    }
    //On the prototype!
    get details() {
        return `${this.name}, ${this.age}`;
    }
    //On the prototype!
    birthday() {
        this.age++;
    }
    //static method
    //Person has it
    static Counter() {
        return Person.counter;
    }
}

//static member
Person.counter = 0;

const me = new Person('Shahar', 27);
console.log(me.details);
me.birthday();

const she = new Person('Lili', 11);
she.birthday();


//Inheritance
class Student extends Person {
    constructor(name, age, course) {
        super(name, age);
        this.course = course;
    }
    //Override!
    //On the Student prototype
    get details() {
        return `${super.details}, studying ${this.course}`;
    }
}

const student = new Student('Lala', 45, 'JS');