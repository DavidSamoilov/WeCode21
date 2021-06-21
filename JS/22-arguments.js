//arguments is a special private function object
function foo(a) {
    if(arguments.length > 1){
        console.log(`Number of passed parameters ${arguments.length}`);    
        for(let i = 0; i < arguments.length; i++){
            console.log(arguments[i]);
        }
    }else{
        console.log(a);
    }
}

foo('lala', 42, 'Harasho');


function bar(a, args) {
    if(args.length > 1){
        console.log(`Number of passed parameters ${args.length}`);    
        for(let i = 0; i < args.length; i++){
            console.log(args[i]);
        }
    }else{
        console.log(a);
    }
}

bar('lala', [42, 'Harasho']);
