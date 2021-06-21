//Ex1
//1- You have object with id, name, and another object with phone, address.
//     Merge them to 1 object with id, name, phone and address.
// 2- Move the id property to be last in this object

const obj1 = {
    id: 1,
    name: 'lala'
}

const obj2 = {
    phone: '0541234567',
    address: 'Haifa'
}

let merged = {
    ...obj1,
    ...obj2
}

console.log(merged);

//2

const {id, ...restProps} = merged;

merged = {
    ...restProps,
    id
}

console.log(merged);


//Ex2
//Make this work by completing the removeProp function using only destructuring and spreading

// const removeProp = prop => obj => {
//     let {...objCopy} = obj;
//     delete objCopy[prop];
//     return objCopy;
// }


// const removeProp = prop => obj => {
//     const {[prop]: p, ...restProps} = obj;
//     return restProps;
// }

const removeProp = prop => ({[prop]: p, ...restProps}) => restProps;


let remove = removeProp('id');

const person1 = {
   id:454,
   name:'Sha',
   age: 45,
   phone: '0547410147'
};

const student1 = {
   course: 'Angular',
   grade: 77,
   name:'Sha',
   id:654,
   age: 19,
   phone: '0506532650'
}

let p = remove(person1);
//{ name: 'Sha', age: 45, phone: '0547410147' }
let s = remove(student1);
// { course: 'Angular', grade: 77, name: 'Sha', age: 19, phone: '0506532650' }
remove = removeProp('name');
p = remove(person1);
//{ id: 454, age: 45, phone: '0547410147' }
s = remove(student1);
// { course: 'Angular', grade: 77, id: 654, age: 19, phone: '0506532650' }



//Ex3
//Complete the general flatCopy function for copying properties from one POJO object to another, by flattening the other object.
function flatCopy(src, target){
    for(const prop in src) {
        if(typeof src[prop] === 'object') {
            flatCopy(src[prop], target);
        }else if(prop in target) {
            target[prop] = src[prop];
        }        
    }
    return target;
}

 //For example:
 //You have this object from outer source. You can't touch it.
const otherPerson = {
   id:12,
   fullName: {
       firstName: 'Shahar',
       lastName: 'Grauman'
   },
   age: 80,
   email: 'info@grauman.co.il'
}
//And you should copy its values to the corresponding properties of this object
//person is otherPerson, but flattened
const person = {
   firstName: '',
   lastName: '',
   age: 0,
   email: ''
}

const flattened = flatCopy(otherPerson, person);

console.log(flattened, person);//The same
//{firstName: 'Shahar', lastName: 'Grauman', age: 80, email: 'info@grauman.co.il'}




