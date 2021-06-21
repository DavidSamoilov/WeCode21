// MDN:
// A closure is the combination of a 
// function bundled together (enclosed) with
// references to its surrounding state
//  (the lexical environment)


const ex1 = () => {
    // Closures Ex
    // 1
    // Make this code work:

    function setup(defaultProps) {    
        function completeDefaultsProps(obj) {
            //1 - spreading
            // return {
            //     ...defaultProps,
            //     ...obj
            // };
            
            //2 -         
            for(const prop in defaultProps){
                obj[prop] = obj[prop] || defaultProps[prop];
            }
            return obj;
        }

        return completeDefaultsProps;
    }

    const f = setup({id:1, name:'John Doe', age: 18, gender: 'other'});
    let obj = f({id:10, name:'Shahar', gender: 'male', city: 'Haifa'});
    console.log(obj);//{id:10, name:'Shahar', age: 18, gender: 'male', city: 'Haifa'}
    obj = f({name:'Osi', gender: 'female'});
    console.log(obj);//{id:1, name:'Osi', age: 18, gender: 'female'}
    obj = f({course: 'JS'});
    console.log(obj);//{id:1, name:'John Doe', age: 18, gender: 'other', course: 'JS'}


    const f2 = setup({animal: 'Prukey Raglayim', area: 'Drom Afrika', poison: 'low'});
    let juk = f2({type: 'hideous', fly: 'Hell yes!', killable: 'not quite'});
    console.log(juk);
    let rima = f2({});
    console.log(rima);
}

// ex1();

// Self learning BONUS exercise:
//------------------------------------
// Read about 'Revealing module pattern' and try to:
// Make this code work:

const calculator = sign => {
    let sum = 0;
    let lala = 'wawa';//Not in the 'closure'
    console.log(lala);
    const addX = x => sum += x;
    const sub = x => sum -= x;
    const mul = x => sum *= x;
    const div = x => {
        if(!x) sum = 'Err';
        else sum /= x;
    };
    const result = () => `${sum === 'Err' ? '' : sign}${sum}`;
    
    //Revealing module (object)
    return {
        add: addX,
        sub,
        mul, 
        div,
        equals: result,
        reset: x => sum = x
    }
}

// API
// ------
// Application
// Programming
// Interface (ממשק)



const calc = calculator('$');
calc.add(1);
calc.add(2.9);
calc.equals();//$3.9
calc.mul(2);
console.log(calc.equals());//$7.8
calc.sub(1.8);
calc.equals();//$6
calc.div(2);
calc.equals();//$3
calc.div(0);
console.log(calc.equals());//Err
calc.reset(0);
console.log(calc.equals());//$0

const counter = calculator('#');
counter.add(1);
counter.equals(); //#1
counter.add(10);
console.log(counter.equals()); //#11
//...

// //Ex
// //In this exercise you'll be using setTimeout and setInterval
// //Read about them and then solve this 3 steps:
// //1-
// function logs(x){
// }

// logs('yippi', 13);
// //After this line, there should be console.log on every second from now on:
// //(After 1 second)
// //'yippi counter is 13!'
// //(After 1 second)
// //'yippi counter is 14!'
// //(After 1 second)
// //'yippi counter is 15!'
// //(After 1 second)
// //'yippi counter is 16!'
// //(After 1 second)
// //'yippi counter is 17!'
// //...

// //2-
// //Same as before, but now the console logs ends after x seconds
// //Here the console logs will end after 4 seconds
// logs('lala', 100, 4);
// //(After 1 second)
// //'lala counter is 100!'
// //(After 1 second)
// //'lala counter is 101!'
// //(After 1 second)
// //'lala counter is 102!'



//
// const what = x => y => y < x;

// what(99)(100);

// const what2 = function(x) {
//     return function(y) {
//         return y < x;
//     }
// }

// const f = what2(99);
// f(100);

// what2(99)(100);