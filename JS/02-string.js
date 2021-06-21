var text = 'Hi there amigos';
var str = "Ahalan Jama'a";
var firstChar = text.charAt(0);// text[0];

if(!firstChar) {
    //error code
}

str.substring(0, 6)//Ahalan
str.indexOf('J')// 7

//String is immutable, meaning - cannot be changed
var chaining =  text + '! and ' + str + '. Welcome!';
//string templates / interpolation
//ES6 (EcmaScript2015)
var interpolation = `${text} ! and ${str}. Welcome!`;
