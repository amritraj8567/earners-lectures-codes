// let user = {
//     name: "nishant",
//     age: 45
// }

// const { Children } = require("react");

// console.log(user);

// Object.prototype.allInOne = function(){
//     console.log("all in one hu yaaro");
// }


// Array.prototype.printItems = function (arr) {
//     for (let i = 0; i < this.length; i++) {
//         console.log(this[i]);
//     }

// }


// let arr = [1, 2, 3]

// console.log(arr.__proto__.__proto__ === user.__proto__);            //"true"
// console.log(arr.__proto__);

// arr.printItems()

// let colors = ["red", "green", "blue"]
// colors.printItems()

// String.prototype.firstTwoCharacter = function(){
//     console.log(this[0] + this[1]);

// }

// "amrit".firstTwoCharacter()


// "vdehjdev".allInOne()
// arr.allInOne()
// user.allInOne()

// function random(){

// }
// random.allInOne()

// Number(1).allInOne()



let animal = {
    eat(){}
}

let person = Object.create(animal)

person.walk = function(){
    console.log("walk");
}

let student = Object.create(person)

student.study = function(){
    console.log("study");
}

console.log(person);
console.log(student);

console.log(student.hasOwnProperty("study"));
console.log(student.hasOwnProperty("eat"));

console.log(Object.getPrototypeOf(student));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(student)));

Object.setPrototypeOf(person , {
    hello(){}
})

// let obj = Object.create({})
// console.log(obj);


class User {
    country = "india" // default property
    constructor(name, country2) {
        this.name = name // instance property
        this.country = country2 // instance property
    }


    printName() { // instance method
        console.log(this.name);
    }
}


const u1 = new User("Nishant", "India")
const u2 = new User("Akshay", "India")

// console.log(u1);
// console.log(u2);

// u1.printName()
// u2.printName()

// console.log(u1.printName() === u2.printName());

// console.log(u1 instanceof User);    // true
// console.log(u1 instanceof Object);  // true
// console.log(u1 instanceof Array);   //false


