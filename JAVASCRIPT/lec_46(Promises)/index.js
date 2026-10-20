// Promise

// const p = new Promise(function (resolve, reject) {
//     // resolve("hello")
//     reject("server hang hai chotu")
// });
// console.log(typeof p);       // "Object"

// console.log(p);                 // Promise { <pending> }

// p.then(function onFulfilled(val) {                // .then : it takes both resolve and reject
//     console.log(val);
// }, function onRejected(val) {
//     console.log(val);
// })

// const res = p.then(function (val) {
//     console.log(val);
// }, function (val) {
//     console.log(val);
// })

// console.log("res" , res);

// p.catch(function onRejected(val){        // it is always for reject
//     console.log(val);
// })

// const res = p.then(function (val) {
//     console.log(val);
// })
//     .then(function onFulfilled(val) {                // .then : it takes both resolve and reject
//         console.log(val);
//     })
//     .then(function onFulfilled(val) {                // .then : it takes both resolve and reject
//         console.log(val);
//     })
//     .then(function onFulfilled(val) {                // .then : it takes both resolve and reject
//         console.log(val);
//     })
//     .catch(function (val) {                          // .catch : it takes only reject 
//         console.log(val);
//     })
//     .finally(function () {                             // .finally : it will run always
//         console.log("ye to hamesha chalega");
//     })


// console.log("a");

// const p2 = new Promise(function f1(resolve, reject) {
//     console.log("b");
//     resolve("hello")
// })

// p2.then(function f2(val) {
//     console.log("then");
//     console.log(val);
// }).catch(function f3() {
//     console.log("catch");
// }).finally(function f4() {
//     console.log("finally");
// })

// console.log("c");



const p3 = new Promise(function f1(resolve, reject) {
    resolve() // ye line sirf or sirf itna batati hai ki promise fulfill ho gaya thats it
})

// Promise.resolve().then(function f2() {
//     console.log("f2 function");
// })

// setTimeout(function fun3() {
//     console.log("setTimeout");
// }, 2000)

// p3.then(function f3() {
//     console.log("f3 function");
// })


// Promise.resolve().then(function f2() {
//     console.log("f2 function");
// })

// Promise.resolve().then(function f2() {
//     console.log("f2 function");
// })

// Promise.resolve().then(function f2() {
//     console.log("f2 function");
// })

// Promise.resolve().then(function f2() {
//     console.log("f2 function");
// })


function searchPizza() {
    return p = new Promise(function a(resolve, reject) {
        console.log("searching Pizza....");
        setTimeout(() => {
            console.log("heres your pizza");
            let price = 500
            // cb(price)
            resolve(price)
        }, 2000);
    })


}

function addToCart() {
    return p = new Promise(function a(resolve, reject) {
        console.log("pizza Adding to cart...");
        setTimeout(function fun2() {
            console.log("pizza added to cart");
            resolve(price)
        }, 3000);
    })
}




function payment(price) {
    return p = new Promise(function a(resolve, reject) {
        console.log("Payment Initiated", `${price}`);
        setTimeout(() => {
            console.log(`Payment Completed , Amount : ${price}`);
            resolve()
        }, 5000);
    })
}


let res = searchPizza()
res.then(function (price) {
    return addToCart(price)
}).then(function (price) {
    return payment(price)
}).then(function () {
    console.log("pizza bas aa hi gaya");
}).catch(function (err) {
    console.log(err);
})


