let students = {
    name: "varad",
    rollNo: 34,
    subjects: ["maths", "english", "hindi"]


}

// let{subjects , ...variables  } = students
// console.log(variables);
// console.log(subjects);

// how to rename a key

// let { subjects: vishay, ...variables } = students
//subjects --> vishay
// console.log(vishay);


// object merging

let obj1 = {
    name: "nishant",
    phone: 465637382
}

let obj2 = {
    address: "india",
    adhaarCard: 234254321254,
    name: "yash"
}

let obj3 = {
    ...obj1, ...obj2
}

// console.log(obj3);   // obj1 and obj2 both contains name as a "key" but it is unique and only the last one survives


// let arr = [1, 2, 3, 4]

// arr[1] = "updated"

// console.log(arr);

const obj = {
    name: "kasturi",
    rollNo: 23,
    address: null
}


obj["name"] = "sumit"
obj.name = "vanshika"

// delete obj.rollNo  //property to delet a entry

// console.log(obj);

// console.log(obj.address);

// console.log(obj.address?.street);

let arr1 = [1, 2, 3, 4, 5, 6]

// arr1.pop()

// arr1.shift()

// arr1.splice(2, 1)  // .splice( starting index , delete count)

// arr1.splice(3,0,["replace value"])  // used to replace a value

// let trimarr1 = arr1.slice(0,3)   // .slice(start index , ending index(excluded))

// console.log(trimarr1);

// arr1.indexOf(6)

// console.log(arr1.indexOf(6));  // if present shows the index position

// console.log(arr1.indexOf(673));   // if not present it returns "-1"

// let res = arr1.find((value) => {
//     return value === 6;
// })

// console.log(res);

// let resIndex = arr1.findIndex((value) => {
//     return value === 3
// })

// console.log(resIndex);


//Flat        // converts nested array to simple single array

let arr3 = [1, 2, 3, 4, 5, [6, 7, 8, [9, 8, 7, 6,]]]

// console.log(arr3.flat());

// console.log(arr3.flat(2));

// console.log(arr3.flat(Infinity));


// Mutability

let arr4 = [1, 2, 34, 5, 423]

let arrcopy = arr4 ;
let arrcopy2 = [...arr4]  //spread operator

arrcopy.pop()

console.log("arr4" , arr4);
console.log("arrcopy" , arrcopy);
console.log("arrcopy2" , arrcopy2);











