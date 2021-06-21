//Destructuring is the ability to break apart arrays or objects

const numbers = [1, 2, 3, 4, 5];

// const first = numbers[0],
//       second = numbers[1],
//       sixth = numbers[500];

//destructure
//fail safe, meaning, if no proper index - undefined
const [first, second, , , , sixth] = numbers;

console.log(first, second, sixth); //1, 2, undefined

//Ex:
//declare x and y and swap between them using destructure
let x = 1, y = 2;

//swap
[x, y] = [y, x];

console.log(x, y); //2 1

const list = [17, 42];

// const a = list[0] || -1,
//       b = list[1] || -1,
//       c = list[2] || -1,
//       d = list[3];

const [a = -1, b = -1, c = -1, d] = list;


console.log(a, b, c, d); //17, 42, -1, undefined

const veryLongObjectNameIndeedMamash = {
    firstName: 'Lala',
    ln: 'Wawa',
    address: {
        city: 'Tel Aviv :)'
    }
}

// const fn = veryLongObjectNameIndeedMamash.firstName,
//       lastName = veryLongObjectNameIndeedMamash.ln,     
//       lucky = veryLongObjectNameIndeedMamash.lucky || 42, 
//       myCity = veryLongObjectNameIndeedMamash.address.city;


const getLuckyNumber = () => 42;

const {firstName:fn, ln:lastName, lucky = 42, address: {city:myCity}} = veryLongObjectNameIndeedMamash;
// const {firstName:fn, ln:lastName, lucky = getLuckyNumber(), address: {city:myCity}} = veryLongObjectNameIndeedMamash;

console.log(fn, lastName, lucky, myCity);

function f1([myName, myVal]) {
    console.log(myName, myVal);
}

function f2({myName: n, myVal: v}) {
    console.log(n, v);
}

function f2_2(obj) {
    const n = obj.myName,
          v = obj.myVal;
    console.log(n, v);    
}

function f3({myName, myVal}) {
    console.log(myName, myVal);
}

f1(['David', 42]);
f2({myName: 'Sari', myVal: 17});
f2({myVal: 23, myName: 'Lala'});
f2_2({myVal: 23, myName: 'Lala'});
f3({myName: 'Sari', myVal: 17});


//Another demo
const propName = 'fname';

const obj = {
    [propName]: 'David',
    id: 34,
    address: {
        city: 'Haifa'
    }
}

console.log(obj);
//{ fname: 'David', id: 34, address: { city: 'Haifa'} }

const {[propName]: _, ...restProps} = obj;

console.log(_, restProps);
//'David', 
//{ id: 34, address: { city: 'Haifa'} }
