const promiseOne=new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve();
        console.log("Async task 1 is completed")
    },1000)
})
promiseOne.then(function(){
    console.log("promise 1 resolved")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve();
        console.log("Async task2")
    })
}).then(function(){
    console.log("promise 2get executed")
})

const promisethree=new Promise(function(resolve,reject){

    let error=false;
    setTimeout(function(){
        if(error){
        console.log("Promise 3 resolved")
        }
        else{
            console.log("Error")
        }
    },1000)
})