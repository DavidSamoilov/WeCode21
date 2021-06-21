//Ex (functions 4):
// Complete this code

function doSomethingExtraOrdiner(number, x) {
    var isDivided = findIfNumberIsDividedByX(number, x);
    var res;
    if(isDivided) {
        res = multiplyNumberByXWithoutMultiplication(number, x);
    }
    if(res){
        printResult(number, x, res);
    }
}

function findIfNumberIsDividedByX(number, x) {
    return typeof number === 'number' && typeof x === 'number' && number % x === 0;
}

function multiplyNumberByXWithoutMultiplication(number, x) {
    var answer = 0;

    while(x) {
        answer += number;
        x--;
    }

    // for(;x--; answer += number);

    return answer;
}

function printResult(number, x, res) {
    console.log(`${number} * ${x} = ${res}`);
}

// Ex (functions 5):
// 1- Write a function which gets a number and returns the sum of its digits
//      For example: 745238 -> 29
// 2- Write a function which gets a number and sum its digits until it’s a single digit
//       For example: 745238 -> 29 -> 11 -> 2

function sumDigits1(number) {
    var num = number.toString(),
        index = 0,
        result = 0;

    while(index < num.length) {
        result += (num[index] * 1);
        index++;
    }
    return result;
}

function sumDigits2(number) {
    var sum = 0;

    while(number) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }

    return sum;
}

function sumDigits3(number) {
    return (''+number).split('').reduce((sum, num) => sum + +num , 0);
}

console.log(sumDigits2(745238)); //29

function sumDigitsUntil1Digit(number) {
    while(number > 9) {
        number = sumDigits2(number);
    }

    return number;
}

console.log(sumDigitsUntil1Digit(745238)); //2
