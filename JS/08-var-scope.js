//Hoisting (כאב ראש)
//var i;

console.log(i);

for (var i = 0; i < 5; i++) {
    console.log(i);    
}

console.log(i);    

//output?
//0
//1
//2
//3
//4
//5


function hoist() {
    var ok = true;

    if(ok) {
        var notOK = false;
        console.log(ok, notOK);
    }
    console.log(ok, notOK);
}

// console.log(ok, notOK);

hoist();
//Output?
//true, false
//true, false


//var scope can be in functions or global!

function loopsi() {
    //Hoisting
    // var i;
    // var funcs;
    // var f;

    var funcs = [];

    for(var i = 0; i < 5; i++) {
        funcs.push(function() {
            return i;
        });
    }

    for(var f of funcs) {
        console.log(f());
    }
}

loopsi();
//Output
//5 times 5
//Why?

let x = 42;

if(true){
    let x = 41;
    console.log(x);
    while(true) {
        let x = 40;
        console.log(x);
        break;
    }
}

console.log(x);

//Error?
//Output?

console.log(i = 1); //1
console.log(i); //1


//Summary var vs. let
//var declaraion
//scope: global or golbal inside the function
//redeclaration is enabled in the same scope - it'll override previous value
//let declaration
//scope: block scoped! or global
//block scope meaning currly braces { }
//redeclaration is disabled in the **same scope**

//Finaly - const!
//const can't be re-assigned
//Besides that - same as let

const num = 42;
// num++; //num = num + 1 - can't re-assign

// const str;//Error - must assing value in declaration

let y = num;
y++; //43

function foo(num) {
    num++;
    console.log(num); //43
}

foo(num);
console.log(num); //42

//Literal object (plain object)
const person = {
    name: 'Yemsrach',
    age: 19
};

console.log('person', person, person.name, person.age);

function bar(person) {
    person.age++;
}

bar(person);
console.log(person.age); //20

function bar2(person) {
    person = {
        name: 'Kobi',
        age: 21
    }
    console.log(person.name);//Kobi
}

bar2(person);
console.log(person.name);//Yemsrach


person.address = 'Haifa'; //OK

//Arrays are objects so everything we said before applies to the as well

const car = {
    type: 'Subaru Justi',
    year: 2001,
    engine: {
        type: 'V8',
        isElectric: true,
        isOK: false
    }
}

function replaceEngine(car) {
    car.engine = {
        type: 'V8',
        isElectric: true,
        isOK: true
    }
    car.gasoline = '92 Octan';
}

replaceEngine(car);
console.log(car.engine); //?