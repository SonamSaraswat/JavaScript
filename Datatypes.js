const { boolean, symbol } = require("zod");

let n=19;
let name="sonam"
let isloggedIn=true

let id=symbol('123')
let another_id=symbol('123')

console.log(id===another_id)

//primitive data type

//7 primitive datatypes
//string,number,boolean,null,undefined,symbol,bigint

//NOn primitive type
//Array,Object,Functions

//number => 2 to 53
//bigint 
//string =>" "
//boolean => true/false
//null =>standalone value
//undefined =>
// symbol =>unique


/*Interview question*/
console.log(typeof null)
console.log(undefined)


/*Datatypes conversion*/

//convert into number

let value="33"
let no=Number(value)
console.log(no)

// "33"=>33
//"33abc"=>NaN
//true=>1; false=>0

/*Convert into String*/

let isnumber ="Sonam";

let yes=Boolean(isnumber)

console.log(yes)

//1=>true,0=>false
//""=>false
//"sonam"=>true


/* Convert into String*/

let someNumber=33
console.log( String(someNumber));

//operations

let str1="Sonam"
let str2="Saraswat"

console.log(str1+str2);
console.log("1"+"2");
console.log("1"+"2"+2);
console.log(1+1+"2");
//jo pehle hota h uske hisabh se operation hota h
//pehle string toh string
//pehle number toh number






