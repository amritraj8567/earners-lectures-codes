// let product1 = ["iphone", 56835, 4.5, 75, 10]

// let product2 = {
//     price: 57683,
//     avgRating: 4.5,
//     productName: "iphone 20 pro max",
//     totalReviews: 75,
//     discount: 10,
//     printProductName: function () {
//         console.log(this.productName);
//     },
//     printDiscount() {
//         console.log(this.discount);
//     }
// }

// console.log(product2["discount"]);

// console.log(product2.totalReviews)

// console.log(product2);

// product2.printProductName()
// product2.printDiscount()

// console.log(Object.keys(product2));
// console.log(Object.values(product2));
// console.log(Object.entries(product2));

// for (value of product1) {
//     console.log(value);
// }

// product1.forEach(function (value, index) {
//     console.log(value, index);
// })

// for(value in product2){
//     console.log(product2[value]);
// }

// for(value in product1){      
//     console.log(value);
// } 


// destructuring

// let product1 = ["iphone", 56835, 4.5, 75, 10]
// const [a, b, c, d, e, f] =
//     console.log(c);


let product2 = {
    price: 57683,
    avgRating: 4.5,
    productName: "iphone 20 pro max",
    totalReviews: 75,
    discount: 10,
    printProductName: function () {
        console.log(this.productName);
    },
    printDiscount() {
        console.log(this.discount);
    }
}

let { price, avgRating, productName, discount, printDiscount } = product2

// console.log(price, printDiscount(), avgRating);

// for ([key, value] of Object.entries(product2)) {
//     console.log([key, value]);
// }


// let arr = [34, 56, 23, 56, 1, 23, 55, 34]

// console.log(arr);
// console.log(...arr);   //spread operator

// console.log(Math.min(...arr));

// let a = [1 ,2]
// let b = [3 , 4]

// let c = [...a , ...b]   //array merging by spread operator 

// console.log(...c);

// const [ n , p , ...hello] = ["iphone" , 56835 , 4.5 , 75 , 10 ]

// console.log(n);
// console.log(p);
// console.log(hello);   //rest operator ---> packing of rest values

// function add(...numbers) {
//     console.log(numbers);
// }

// console.log(add(4,5,56,345));

function add(...numbers) {
    let total = 0
    for (value of numbers) {
        total += value
    }
    return total
}

console.log(add(4, 5, 345, 234, 34));









