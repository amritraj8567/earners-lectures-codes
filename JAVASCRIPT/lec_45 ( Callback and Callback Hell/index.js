// function fun1(callback) {
//     console.log("hii");
//     callback()
// }

// function cb() {
//     console.log("this is callback function");
// }

// // fun1(cb)    // Callingback A Function

// let name = () => {}

// function hello(name){
// console.log(name);
// }

// hello(name)


// Async Functions

// function searchPizza(cb) {
//     console.log("searching PIZZA...");
//     setTimeout(() => {
//         console.log("heres your pizza");
//         cb()
//     }, 2000);
// }

// function addToCart() {
//     console.log("pizza added to cart");
// }

// searchPizza(addToCart)

function searchPizza(cb) {
    console.log("searching Pizza....");
    setTimeout(() => {
        console.log("heres your pizza");
        let price = 500
        cb(price)
    }, 2000);
}

function addToCart(cb2) {
    console.log("pizza Adding to cart...");
    setTimeout(() => {
        console.log("pizza added to cart");
        cb2()
    }, 3000);
}

function payment(price, cb3) {
    console.log("Payment Initiated", `${price}`);
    setTimeout(() => {
        console.log(`Payment Completed , Amount : ${price}`);
        console.log("bas aa hi gaya pizza");
        
    }, 5000);
}

//  Callback Hell :  passing function into a function and so on ...

searchPizza(function (price) {
    addToCart(function () {
        payment(price)
    })
})


 





