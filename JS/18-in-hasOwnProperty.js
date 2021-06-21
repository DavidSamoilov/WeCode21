const obj = {
    num: 42,
    details: function(){
        console.log(this.num);
    }
}

console.log('num' in obj);//true
console.log('details' in obj);//true
console.log('toString' in obj);//true
console.log('age' in obj);//false

console.log(obj.hasOwnProperty('num'));//true
console.log(obj.hasOwnProperty('details'));//true
console.log(obj.hasOwnProperty('toString'));//false
console.log(obj.hasOwnProperty('age'));//false


//Object Ex
// Create Grade function constructor having student name and grade.
// Create 3 instances:
// - ‘Shahar’ and 88, 
// - ‘Yusuf’ and 79 
// - ‘Suha’ and 91.
// Make this work:
console.log(`Average: ${(shahar + yusuf + suha) / 3}`);
//Average: 86

//Hint: Doesn't relate to Object.create or assign