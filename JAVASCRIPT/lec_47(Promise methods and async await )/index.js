// "use strict"

// async function fun2() {
//     // console.log("hello");return Promise.resolve(10)


//     return Promise.resolve(10)

//     // return 11
// }

// function fun1() {
//     // console.log("hii");

//     // return Promise.resolve(10)

//     return 10
// }

// console.log(fun2());
// console.log(fun1());

// fun2().then((data) => {
//     console.log(data);
// })


// async function fun3() {
//     return "hello"
// }

// fun3().then(data => {
//     console.log(data);
// })


// function fun4() {
//     return Promise.resolve("hii")
// }

// async function fun5() {
//     // fun3().then(data => {
//     //     console.log(data);
//     // })
//     console.log("1");
//     let data = await fun3()
//     console.log("2");
//     let data2 = await fun4()
//     console.log("3");
//     console.log(data, data2);
// }

// console.log("Amrit");

// fun5()

// console.log("a");

// async function random() {
//     console.log("b");

//     await 1;

//     console.log("c");
// }

// random()

// console.log("d");


async function fun5() {
    try {
        data = await userdata()
        console.log(userdata);
    } catch (err) {
        console.log(err);
    }finally{

    }
}

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
            resolve()
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


// let res = searchPizza()
// res.then(function (price) {
//     return addToCart(price)
// }).then(function (price) {
//     return payment(price)
// }).then(function () {
//     console.log("pizza bas aa hi gaya");
// }).catch(function (err) {
//     console.log(err);
// })


async function orderFood(){
    try{

        let price = await searchPizza()
         await addToCart()
         await payment(price)
    }catch(error){
        console.log(error);
    }
}

orderFood()










