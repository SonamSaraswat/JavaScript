//jb koi constructor se bnta h toh singelton object bnata h 
//aur jb literal se bnta h toh singelton nhi bnta


const mykey=Symbol("myk");

const users={     //Object literal
    name: "Sonam",
    age: "22",
    email: "s@gmail.com",
    "fullname": "Sonam Saraswat",
    //different syntax for symbol
    [mykey]: "mykey1"
}
console.log(users.name);
console.log(users["name"]);
console.log(users.fullname);
console.log(users["fullname"]);
console.log(users[mykey]);//for symbol we have to access like this
//change the value
users.name="Devesh"
console.log(users.name);
Object.freeze(users);//freeze the value so anyone canot Change
users.name="Kunjan"
console.log(users.name);

users.greeting=function(){
    console.log(`hi users, ${this.name}`)
}
console.log(users.greeting)


/***************************Objects using constructor(Singelton object)************************ */

const tinderUser=new Object();
tinderUser.name="Devesh"
tinderUser.email="d@gmail.com"
tinderUser.phone="238976534"

console.log(tinderUser.name);
console.log(tinderUser.email);
console.log(tinderUser.phone);


//Accessing the elements of nesting object

const grandfamily={
    name: "GrandFather",
    age:"89",
    family:{
        name:"father",
        age:"55",
    kids:{
        name: "son",
        age:"25"
    }
}
}
console.log(grandfamily.family.kids.name);



//spread

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}
const obj3=Object.assign({},obj1,obj2)  /*Three methods to join the objects*/
//const obj3={obj1,obj2}
//const obj3={...obj1, ...obj2}
console.log(obj3)

//for database
console.log(Object.keys(grandfamily));
console.log(Object.values(grandfamily));
console.log(Object.entries(grandfamily));


/******************De- Structuring**************** */
const course={
    coursename:"DSA",
    courseprice:"999",
    courseInstructor:"Sonam"
}

const{courseInstructor: teacher}=course
console.log(teacher);




