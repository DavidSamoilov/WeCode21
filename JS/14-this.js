const person = {
    name: 'Shahar',
    age: 27,
    address: {
        city: 'Pardesiya'
    },
    //display is called also a method - meaning - function of an object
    //'this' is the reference to the invoking object
    
    // display: function() {
    display() {
        return `Name ${this.name}, aged ${this.age}, lives in ${this.address.city}`
    }
}

console.log(person.display());


function display() {
    return `Name ${this.name}, aged ${this.age}, lives in ${this.address.city}`
}

//display(); //name or age or address should be globals

const she = {
    name: 'lili',
    age: 90,
    address: {
        city: 'Afula Rabati'
    }
}

//Read about Function.call
display.call(she);

//What is the difference between call and apply?
//They are the same - invoked immediatelly.
//call get the 'this' as first parameter, and the arguments (if any)...
//apply get the 'this' as first parameter, and the arguments (if any)

const course = 'Angular';

const who = {
    name: 'wawa',
    age: 70,
    address: {
        city: 'Netanya Rabati'
    },
    course,
    // display: display
    display,
    changeCourse(newCourse) {
        this.course = newCourse;   
    }
}

who.display();



function changeCourse(newCourse) {
    this.course = newCourse;   
}

const what = {
    name: 'wawa',
    age: 70,
    address: {
        city: 'Netanya Rabati'
    },
    course,
    // display: display
    display    
}

//Use changeCourse with Function.bind
const changeCourseLaterOn = changeCourse.bind(what);
//...Later on...
changeCourseLaterOn('React');


function createHyundaiCar(model) {
    const car = {
        model,
        type: 'Hyundai'
    }
    function setYear() {
        this.year = 2021;
    }
    //Solution marked in comment
    //                     \/
    setTimeout(setYear/*.bind(car)*/, 2000);

    return car;
}

const i10 = createHyundaiCar('i10');
console.log(i10); // Immediatelly {model: 'i10', type: 'Hyundai'}

setTimeout(() => {
    console.log(i10); //{model: 'i10', type: 'Hyundai'}
}, 3000);


console.log(she);

console.log(`Person details: ${she}`);

const he = {
    name: 'lala',
    age: 91,
    address: {
        city: 'Nof Hagalil Empire'
    },
    //Override parent method
    toString(){
        return `Name ${this.name}, aged ${this.age}, lives in ${this.address.city}`
    }
}

console.log(`Person details: ${he}`);

