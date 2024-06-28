//join
//slice
//splice

//Javascript creates shallow copy(shares the same reference point) in array operations

const { array } = require("zod")

let arr1=[1,2,3,"Sonam", true]
let arr2=new Array(1,2,3,4,"sonam");


//length

console.log(arr1.length);

//push
arr1.push(6);
console.log(arr1);

//pop
arr1.pop();
console.log(arr1);
//shift
arr1.shift(9);
console.log(arr1);
//unshift
arr1.unshift(10);
console.log(arr1);
//includes
console.log(arr1.includes(6));
//indexof
console.log(arr1.indexOf(6));
////join converts into string
let arr=[1,2,4]
 arr=arr1.join();
 console.log(arr);
//slice
console.log(arr1.slice(2,4));
console.log(arr1)
//splice
console.log(arr1.splice(2,4));
console.log(arr1)

let son=[1,2,3,4,5];
son.shift(7);
console.log(son);


let a1=[1,2,3,4];
let a2=[5,6,7,8];

//a1.push(a2);
//console.log(a1);

//concat
let a3=a1.concat(a2);
console.log(a3);

//spread
//let a3 = [...a1, ...a2];
//console.log(a3);

//flat
let a5=[1,2,3,[4,5,6],[4,5,[6,7],8]];
let a6=a5.flat(Infinity);
console.log(a6);

//convert array from strings and variables

let score1=6;
let score2=7;
let score3=8;
let score4=9;
let a4=Array.of(score1,score2,score3,score4)
console.log(a4);

console.log(Array.isArray("Sonam"))
let s=(Array.from("Sonam"))
console.log(s);
//console.log(Array.from{name:"Sonam"})//Interesting read more






