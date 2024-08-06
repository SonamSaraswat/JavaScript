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

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
promiseFour.then(function(user){
    console.log(user)
})