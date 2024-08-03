//when number of parameters is unknown
//Rest operator

function calculatePrice(...price){
    return price
}
console.log(calculatePrice(500,200,300))


//Accesing Objects into functions

const user={
    name:"sonam",
    age:"22"
}
function getUser(anyobject){
    console.log(`user is ${anyobject.name} and age is ${anyobject.age}`)
}
getUser(user)


/************THIS And Arrow Function ***************/

//IIFE

