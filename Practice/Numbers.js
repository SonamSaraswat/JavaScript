const number1=400;
const number2=new Number(100);

console.log(number1);
console.log(number2);

console.log(number2.toString().length);

console.log(number2.toFixed(2));

const othernumber=23.68
console.log(othernumber.toPrecision(3))

const hundres=100000;
console.log(hundres.toLocaleString('en-IN'))


/******************************************MATHS************************************** */

console.log(Math.abs(-4));
console.log(Math.round(4.6))
console.log(Math.ceil(4.3))
console.log(Math.floor(4.5))
console.log(Math.min(4,5,6));

console.log(Math.random());


//to get the value from 1 to 10

//Math.floor to get the lowest value


console.log(Math.floor(Math.random()*10)+1);

//Genaeral formula to get the value from min to max

const min=10;
const max=20;
// +1 to avoid the zero
//+ min to get the least value

console.log(Math.floor(Math.random()*(max-min+1))+min)