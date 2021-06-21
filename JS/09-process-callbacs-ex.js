// Ex
// Strategy pattern (simplified here) 
// is the ability to inject code into specific places in an already made algorithm.

// Your mission (If you would like to accept it ;-)
// 1- Complete the process body:
//      process is the strategy, in which you send a list of
//      items, then filter some, then do some manipulation on each,
//      and finally do some action on each.
// 2- Now use process like so
//       Let's say you have this array: 
const numbers = [-100, 330, 215, 17, 419, 121, -44, 124];
//      For a given list of numbers (the array):
//      For all numbers in array which are odd, between -400 and 300 and don't include 7,
//      Calculate their TAX, and,
//      Print them like so (For example, for a number like 215): The TAX is 251.55
// 3- Now use process like so
     const students = [
        {name: 'Shahar', course: 'JavaScript', grade: 81},
        {name: 'Lala', course: 'Node', grade: 75},
        { name: "David", course: "Node", grade: 60 },
        { name: "Eitan", course: "JavaScript", grade: 85 },
        { name: "Moshe", course: "JavaScript", grade: 98 },
        { name: "Gabi", course: "JavaScript", grade: 60 },
        { name: "Daniel", course: "JavaScript", grade: 20 },
     ]
//      For a given list of 7 students (name, course, grade):
//      For all students learning JavaScript which have grades below 70,
//      Give 5% bonus
//      Print them like so 
//      (For example, you have student named Eithan, learning JavaScript with grade 60): 
//      Eithan's grade (60) is now 63


//Strategy pattern (in a nut shell)
function process(array, filterCb, manipulateCb, actionCb) {
    //...your logic here    
    // array
    // .filter(filterCb)
    // .map(manipulateCb)
    // .forEach(actionCb);

    const filtered = [];

    for(const item of array) {
        if(filterCb(item)){
            filtered.push(item);
        }
    }

    const manipulated = [];

    for(const item of filtered) {
        manipulated.push(manipulateCb(item));
    }

    // for(let i = 0; i < filtered.length; i++) {
    //     const item = filtered[i];
    //     manipulated.push(manipulateCb(item));
    // }

    for(const item of manipulated) {
        actionCb(item);
    }
}

// //...complete necessary code to use process as instructed


function filterForTax(number){
    return number > -400 && number < 300 && 
    Math.abs(number % 2) === 1 && !(''+number).includes('7'); 
}

function addTax(number) { const tax = 1.17; return number * tax; }

function printTax(number) { console.log(`The TAX is ${number}`) }

process(
    numbers, 
    filterForTax,
    addTax,
    printTax
)

process(
    students,
    student => student.course === 'JavaScript' && student.grade < 70,
    student => {
        student.grade *= 1.05; 
        return student; 
    },
    student => console.log(`${student.name} grade (${student.grade / 1.05}) is now ${student.grade}`)
)


students
    .filter(student => student.course === 'JavaScript' && student.grade < 70)
    .map(student => {
        student.grade *= 1.05; 
        return student; 
    })
    .forEach(student => 
        console.log(`${student.name} grade (${student.grade / 1.05}) is now ${student.grade}`)
    );