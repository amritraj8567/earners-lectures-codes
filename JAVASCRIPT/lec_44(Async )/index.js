// console.log("task 1");

// console.log("task 2");

// for (let i = 0 ; i<10000000000 ; i++){

// }

// let startTime = Date.now()

// while(Date.now() - startTime <10000){

// }

// console.log("task 3");


// console.log("task 1");

// setTimeout(function cb() {
//     console.log("task 2");
//     let startTime = Date.now()

//     while (Date.now() - startTime < 10000) {

//     }
// }, 0)

// console.log("task 3");


// setTimeout(() => {
//     console.log('hii');
// }, 3000);


// console.log("task 1");

// setTimeout(()=>{
//     console.log("task 2");
// }, 4000)

// let startTime = Date.now() // ms

// while(Date.now() - startTime < 10000){

// }

// setTimeout(()=>{
//     console.log("task 5");
// }, 1000)

// setTimeout(()=>{
//     console.log("task 4");
// }, 2000)

// console.log("task 3");


// let count = 1

// let id = setInterval(() => {
//     count++
//     if (count > 5) {
//         clearInterval(id)
//     }
//     console.log("hii");

// }, 1000);


const body = document.querySelector("body")

let colorStr = "0123456789abcdef"



setInterval(() => {
    let color = ""
    for(let i = 0 ; i < 6 ; i++){
let randomValue = Math.floor(Math.random()*colorStr.length) 
color = color + colorStr[randomValue]
}

body.style.backgroundColor = `#${color}`
    
}, 2000);




















