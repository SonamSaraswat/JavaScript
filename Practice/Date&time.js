let myDate =new Date()

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23)

console.log(myCreatedDate.toDateString());
let CreatedDate = new Date(2023, 0, 23,5,3)
console.log(CreatedDate.toLocaleString());

let CreatedDt= new Date("1-23-2000")
console.log(CreatedDt.toDateString());

/********************************Time Stamp******************************************** */
let mytime=Date.now();
console.log(mytime);
console.log(mytime.getMonth());
console.log(mytime.getTime())

