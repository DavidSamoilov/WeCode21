
const ex1 = () => {
    //Adding shuffle to all arrays
    Array.prototype.shuffle = function() {
        this.sort(() => Math.random() - .5);
    }

    const arr = ['a','b','c','d','e','f'];

    //shuffle only for this arr
    // arr.shuffle = function() {
    //     this.sort(() => Math.random() - .5);
    // }

    arr.shuffle();
    console.log(arr); //possible output: ['b','d','a','c','f', 'e']

    const names = ['lala', 'babala', 'wawa', 'haha'];

    names.shuffle();
    console.log(names);

    //Override / דריסה
    arr.shuffle = function() { return 'None' };
}

// ex1();

//Function constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}

let me = new Person('Shahar', 27);
console.log(me.name, me.age);

Person.prototype.details = function () {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}

me.details();

//Student -> IS A TYPE OF -> Person
//We have here inheritance!
//Student is a Person first, then she's a Student
//Therefore, name and age are mandatory, and reused by Person c'tor
function Student(name, age, course) {
    //Reuse Person initialization
    Person.call(this, name, age);    
    this.course = course;
}

Student.prototype = Object.create(Person.prototype);
//Reset back to Student, after changing Student's prototype
Student.prototype.constructor = Student;

const student = new Student('David', 22, 'Astronoutika');

console.log(me instanceof Student); //false
console.log(student instanceof Student); //true
console.log(student instanceof Person); //true
