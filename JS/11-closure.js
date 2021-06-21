const globalScope = () => {
    const x = 42;
    
    function foo(x) {
        const num = 17;
    
        function bar(y) {
            console.log(x + num + y);
        }
    
        bar(x);
    }
    
    foo(x);
    //bar(x);
    //console.log(num);
}

//demo1
// globalScope();


const closure1 = () => {
    function foo(x) {
        const num = 17;

        function bar() {
            return x + num;
        }
        return bar;
    }    

    const func = foo(42);
    console.log(func());

    const func2 = foo(0);
    console.log(func2());
}

// closure1();

const closureDemo2 = () => {

    function foo(init) {
        let sum = init;

        function bar(count) {
            sum += count;
            return sum;
        }
        return bar;
    }

    const whoAmI = foo(0);
    console.log(whoAmI(1));//1
    console.log(whoAmI(1));//2
    console.log(whoAmI(1));//3
    console.log(whoAmI(1));//4

    const count2 = foo(2);
    console.log(count2(2));//4
    console.log(count2(2));//6
    console.log(whoAmI(1));//5
    console.log(count2(2));//8


}

// closureDemo2();

//Ex
//Make this code work:

//1 strings
function foo() {
    let str = '';

    function bar(char) {
        return str = char + str;
        // return (str += char).split('').reverse().join('');
    }
    return bar;
}

//2 arrays
function foo2() {
    let arr = [];//Will be in closure
    const x = 9; //Will NOT be included

    function bar(char) {
        arr.unshift(char);
        return arr.join('');
    }
    return bar;
}


const addC = foo2();
console.log(addC('a'));//a
console.log(addC('b'));//ba
console.log(addC('c'));//cba
console.log(addC('d'));//dcba

//1 - with string manipulations
//2 - with array manipulations


//Ex
//Go back to loopsi and solve it with closure!

function loopsi() {

    var funcs = [];

    function outer(i){
        function inner(){
            return i;
        }
        return inner;
    }

    for(var i = 0; i < 5; i++) {
        funcs.push(outer(i));
    }

    for(var f of funcs) {
        console.log(f());
    }
}

loopsi();
