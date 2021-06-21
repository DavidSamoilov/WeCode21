
const obj = {
    foo: function() {
        console.log(obj === this);

        function bar() {
            console.log(obj === this);
        }
        bar();
        //1
        // bar.call(this);
        //2
        // bar.apply(this);
        //3
        // const bounded = bar.bind(this);
        // bounded();
        //4
        // bar.bind(this)();
        //5
        // ES6
        // Auto bind with fat arrow
        // fat arrow captures the this on declaration!
        const bar2 = () => console.log(obj === this);

        bar2();
    }
}

//Regarding 'this'
//The main difference between 'normal' function and lambda is:
//normal function evaluates the 'this' when invoked
//lambda evaluates the 'this' when declared


//6
//Caching the this reference
const obj2 = {
    foo: function() {
        const self = this; //cache

        console.log(obj === self);

        function bar() {
            console.log(obj === self);
        }

        bar();
    }
}

obj2.foo();