function sayYourName() {
    console.log(this.myName);
}

//Object is the default prototype
const person = {
    age: 17,
    sayYourName,
    sayYourAge: function(){
        console.log(`Age ${this.age}`);
    }
}

//Object is the default prototype
const neria = {
    age: 23,
    city: 'Gedera',
    myName: 'Neria',
    toString() {
        return `${this.myName}, Age ${this.age}, lives in ${this.city}`;
    }
}

//Object is the default prototype
const son = {
    age: 1,
    myName: 'Oshri'
}

Object.setPrototypeOf(neria, person);
Object.setPrototypeOf(son, neria);
neria.sayYourName(); //Neria
son.sayYourName(); //Oshri
console.log(`Son ${son}`);

// delete son.myName;
// delete neria.myName;
// son.sayYourName(); //undefined
