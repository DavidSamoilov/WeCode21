function spreadingTheNews(a, b, ...more) {
    console.log((a + b) + more.join(' - '));

    const things = ['lala', true, 42];
    //spread
    const moreThings = ['v', ...things, 3.14];

    console.log(moreThings); 
}

spreadingTheNews(1, 2, 13, 14, 15, 16, 17);
//313 - 14 - 15 - 16 - 17
//['v', 'lala', true, 42, 3.14]

//Ex
// Write a function that gets 2 arrays and returns them as 1 array. 
// Don’t use Array.concat
function merge(arr1, arr2) {
    return [...arr1, ...arr2];
}
//Ex 2
// Write a function which gets 2d array and returns it flattened as 1 array. Use the previous function.
// For Example: For [[1, 2, 3], [4, 5], [6]] you get [1, 2, 3, 4, 5, 6]

// function myFlat(two2Arr) {
//     const result = [];

//     for(const arr of two2Arr) {
//         result.push(...merge([], arr));
//     }

//     return result;
// }
// function myFlat(two2Arr) {
//     let result = [];

//     for(const arr of two2Arr) {
//         result = merge(result, arr);
//     }

//     return result;
// }
function myFlat(two2Arr) {
    return two2Arr.reduce((flatArray, arr) => merge(flatArray, arr), []);
}

//Ex3
//If you haven't yet bumped into the built-in Array methods like flat, now is the time to use them

const flatten = [[1, 2, 3], [4, 5], [6]].flat();

//Ex4
//Using built in flatMap - convert [[1, 2, 3], [4, 5], [6]] to [ "0: 6", "1: 9", "2: 6" ]

console.log(
    [[1, 2, 3], [4, 5], [6]]
    .flatMap((element, index) => `${index}: ${element.reduce((sum, x) => sum + x)}`)
);

console.log(
    [[1, 2, 3], [4, 5], [6]]
 .map((element, index) => `${index}: ${element.reduce((sum, x) => sum + x)}`)
);


//Spread in objects

const person = {
    id: 2345,
    name: 'Lili',
    age: 90,
    address: {
        city: 'Ashdod :)'
    }
}

//What it does behind the scenes
// const what = {
//     id: person.id,
//     name: person.name,
//     age: person.age,
//     address: person.address
// }

//Shallow copy
const cloned = Object.assign({}, person);
//The same with spreading
const cloned2 = { ...person };

const her = { ...person, name: 'Hadas' };
const him = { ...person, car: 'Volvo' };

console.log(person, cloned2, her, him);
//person props (keys + values)
//same props keys and values
//same, but name is Hadas
//same with addition of car prop
console.log(person === cloned2); //false
console.log(person.id === cloned2.id); //true
console.log(person.address === her.address); //true
person.address.city = 'Sderot :)'; 
console.log(him.address.city); //Sderot

console.log(person.address.city === her.address.city); //true

her.address = {
    city: 'Ashkelon :)'
}

console.log(him.address.city); //Sderot :)
console.log(him.address.city === person.address.city); //true