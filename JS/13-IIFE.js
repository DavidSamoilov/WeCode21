//IIFE
//Immediatly
//Invocation
//Function
//Exression

function stam() {
    console.log('stam');
}
stam();//Invocation

(function () {
    console.log('anon');
})();//IIFE

(function (name) {
    console.log(`Your name is ${name}`);
})('Shahar');


const res = (function() {
    const name = 'Shahar';
    return name;
})();

console.log(res);



const addNum = (function(initValue) {
    let sum = initValue;
    return function (x) {
        sum += x;
        return sum;
    }
})(-1);

addNum(1);
addNum(2);
console.log(addNum(3));//5



//SQL
//Structured
//Query
//Language

//Connection String
// "Server=http://www.myserver-db.com;Database=MyDatabase;User Id=admin;Password=1234qaz"

const config = (function(){
    //Simulation - not real!
    //Suppose you have those details somewhere
    //Go and fetch from somewhere the details for the connection string...
    const serverName = 'http://server-address.com',
          databaseName = 'my-awesome-db',
          userDetails = {
              email: 'lala@wawa.com',
              password: 'zaq123'
          };

    return {
        getConnectionString: function() {
            return `Server=${serverName};Database=${databaseName};User Id=${userDetails.email};Password=${userDetails.password}`
        }
    }
})();


//Later on... when we need to connect to our db...

const conn = config.getConnectionString();
//


//Zochrim et loopsi?
//Solve loopsi with IIFE!


function loopsi() {
    var funcs = [];

    for(var i = 0; i < 5; i++) {
        funcs.push(
            (function (index){
                return function () {
                    return index;
                }
            })(i)
        );
    }

    for(var f of funcs) {
        console.log(f());
    }
}

loopsi();


//jQuery

//Design Pattern -  Singleton
//You have 1 instance of an object of a class - and only 1 instance



const lala = () => {
/*
    function foo(x) {
        x = {
            x: {x: x.x++ }
        }
        return x.x
    }

    function bar(x) {
        x.x = x.x ? 0 : x.x;
    }

    let x = { x: 0 };

    bar(x);

    console.log(x);

    x = foo(x);

    console.log(x);
*/

/*
    const foo = arr => {
        arr = [arr[0]];
        arr[0].id -= 11;
        return arr;
    }

    let d = [{id:1010}];

    d = foo(d);

    console.log(d[0]);
*/

    function inner(s) {
        const a = [];

        return function outer(b) {
            a.push([a.length, a.push(b)]);
            return a;
        };
    }

    const f = inner();
    let a = f("a");
    a = f("b");
    console.log(a.length);
}

lala();
