//Primitives
//
//number, boolean, string, undefined, null

//All the other are considered object types
//Reference (pointer)
//
// object, function


var whoIam; //undefined
whoIam = 17; //number
whoIam = "lala"; //string
whoIam = {name:"shahar", age: 27} //object


console.log('== vs. ===');
console.log("0 == ''", 0 == '');    //true
console.log("0 === ''", 0 === '');  //false
console.log("0 == '0'", 0 == '0');  //true
console.log("0 === '0'", 0 === '0');//false
console.log("false == '0'", false == '0'); //true
console.log("false === '0'", false === '0'); //false
console.log("true == 1", true == 1);    //true
console.log("true === 1", true === 1);  //flase
console.log("null == undefined", null == undefined);   //true
console.log("null === undefined", null === undefined); //false











typeof  operator
console.log('\ntypeof operator');

//"string"
console.log(typeof "lala");
console.log(typeof '@');

//"number"
console.log(typeof 3);
console.log(typeof 3.5);
console.log(typeof Infinity);
console.log(typeof NaN); //(NaN = Not A Number)

//"boolean"
console.log(typeof true);
console.log(typeof false);

//"object"
console.log(typeof [1, 2, 3, 4]);
console.log(typeof { name: 'Shahar', age: 34 });
//regular expression (regex)
console.log(typeof /^[0-9]$/);
console.log(typeof (new Date()));
console.log(typeof null);

//"undefined"
console.log(typeof undefined);

//"function"
console.log(typeof function () { });

console.log(typeof x === undefined ? 'x is undefined' : 'x is defined');
//Error
console.log(x === undefined ? 'x is undefined' : 'x is defined');








//What equals false?
//false
//0
//'' / ""
//undefined
//null

//All the others are true


var x;
x = '0';

if(!x){
    console.log('falsy');
}else {
    console.log('truthy');
}

// What can be sent to test for the output to be truthy?
function test(x) {
    return x != x;
}
//NaN
//Why?!
//Why NaN != NaN ?