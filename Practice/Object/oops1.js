const user={
    username:"sonam",
    age:24,
    employed:false,
}
function User(username,age,employed){
    this.username=username;
    this.age=age;
    this.employed=employed;

    this.grettings=function(){
        console.log(`Hello : ${this.username}`)

    }
    return this;
}
const user1=new User("saraswat",24,false);
console.log(user1);