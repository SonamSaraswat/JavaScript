const promiseOne=new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve();
        console.log("Async task 1 is completed")
    },1000)
})
promiseOne.then(function(){

    console.log("promise 1 resolved")
})