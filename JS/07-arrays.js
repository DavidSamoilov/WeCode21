var array = [];
//Same
var array2 = new Array();

var array3 = [5];
//Not the same
var array4 = new Array(5);

array.push(1);
array.push(2);
array.push(3, 4);

array.length; //4
array.length = 2;  // [1,2]
var last = array.pop(); //array = [1], last = 2

array.length = 10; // [1, undefined * 9]

array[0]; // 1
array[10] // undefined
array[100]// undefined

array = [1,2,3,4,5,6,7];

//iteration over array
for (var index = 0; index < array.length; index++) {
    var number = array[index];
    console.log(number);    
}

//for-of (foreach)
//iterator pattern
for(var number of array) {
    console.log(number);
}

var numbers = [9, 5, -2, 323, 3210];
var names = ['Shahar', 'Avi', 'Mahmud', 'Lucie', 'Abraham'];

//sort both arrays
console.log(names.sort());

function compareNumbers(a, b) {
    return a - b;
}

console.log(numbers.sort(compareNumbers));


// Ex (Arrays 1):
// You have numbers array
// Create function: returns another array containing the power by 2 of each number from the first array

function convertToPowers(numbers) {
    var result = [];

    for(var number of numbers) {
        result.push(number**2);
        // result.push(number*number);
        // result.push(Math.pow(number, 2));
    }

    return result;
}

var powers = convertToPowers([1,2,3,4,5,6]);
console.log(powers);

// Ex (Arrays 2):
// You have numbers array
// Create function: returns another array containing the negative number of each number from the first array

function convertToNegatives(numbers) {
    var result = [];

    for(var number of numbers) {
        result.push(number * -1);
    }

    return result;
}

var netagives = convertToNegatives([1,-2,3,4,-5,6]);
console.log(netagives);


// After completing Ex1+2, do you see a pattern here?
// Can you extract out the similarity between the two above solutions?

//מקרה פרטי
function power2(number) {
    return number**2;
}

//מקרה כללי
function convert(array, convertionFunc) {
    var result = [];

    for(var item of array) {
        result.push(convertionFunc(item));
    }

    return result;
}

powers = convert([1,-2,3,4,-5,6], power2);
console.log(powers);


function toNegative(number) {
    return number * -1;
}

netagives = convert([1,-2,3,4,-5,6], toNegative);
console.log(netagives);

var names = ['Eliezer', 'Yakov', 'Ron', 'David', 'Neri', 'Getaneh', 'Yemsrach', 'Etiel'];

//Function expression
// var lastChar = function (name) {
//     return name[name.length-1];
// }

var lastChars = convert(names, function (name) {
    return name[name.length-1];
});

console.log(lastChars);


//1-Create array of 10 random numbers between 24 and 43.
//  Create another array of the numbers starting with 3 (from the first array).
//2-You have names array - create another array containing only those having length more than 4 chars

//1 - Rosh Bakir
//2 - מקרה הכללי

function getRandomNumbers(){
    var result = [];
    for(var i = 0; i < 10; i++){
        result.push(Math.floor(Math.random()*(43 - 24 + 1)) + 24);
    }
    return result;
}

var randomNumbers = getRandomNumbers();

console.log('10 random numbers:', randomNumbers);

function getStartingWith3(numbers) {
    var result = [];

    for(var number of numbers) {
        if((''+number).startsWith('3')){
            result.push(number);
        }
    }

    return result;
}

function getLongerThan4(names) {
    var result = [];

    for(var name of names) {
        if(name.length > 4){
            result.push(name);
        }
    }

    return result;
}

//General filtering
function filterBy(array, filterCb) {
    var result = [];

    for(var item of array) {
        if(filterCb(item)) {
            result.push(item);
        }
    }

    return result;
}

var numbersStartingWith3 = filterBy(randomNumbers, function(number) {
    return (''+number).startsWith('3');
});

var evenNumbers = filterBy(randomNumbers, function(number) {
    return number % 2 === 0;
});

console.log(numbersStartingWith3, evenNumbers);