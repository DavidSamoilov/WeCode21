function addXtoY(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        return NaN;
    }else {
        return x + y;
    }
}

var result = addXtoY(2, 7);//9

if(isNaN(result)) {
    console.log('Problem with parameters. Should be only numbers');
}else {
    console.log(`The result is ${result}`);
} 

addXtoY(2);// y wasnt provided

// Ex (functions 1):
// 1- Make sure addXtoY works here as well: addXtoY(3, ‘two’); //error
// 2- If there’s a problem, addXtoY returns NaN. Otherwise returns the result.
// 3- (Outside of addXtoY) Check the result of addXtoY and print appropriate message.
