

function fun1(){
   return new Promise((resolve , reject) => {
    setTimeout(() => {
        resolve("fun1")
    }, 3000);
   })
}

function fun2(){
   return new Promise((resolve , reject) => {
    setTimeout(() => {
        resolve("fun2")
    }, 1000);
   })
}

function fun3(){
   return new Promise((resolve , reject) => {
    setTimeout(() => {
        reject("fun3")
    }, 5000);
   })
}




// let res = Promise.all([fun1() , fun2() , fun3()])
// let res = Promise.allSettled([fun1() , fun2() , fun3()])
// let res = Promise.race([fun1() , fun2() , fun3()])         // jo phele settle ho gaya wo output hai
// let res = Promise.any([fun1() , fun2() , fun3()])          //  jo phele fulfill ho gaya wo output hai


res.then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})