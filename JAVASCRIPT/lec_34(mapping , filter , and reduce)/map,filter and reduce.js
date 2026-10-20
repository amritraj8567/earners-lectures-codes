let originalPrices = [463, 345, 132]

let discountedPrice = []

// for(value of originalPrices){
//     // discountedPrice.push(value*0.9)  //10% discount
// }

// console.log(originalPrices);
// console.log(discountedPrice);

// originalPrices.forEach((value) => {
//     discountedPrice.push(value * 0.9)
// })

// console.log(discountedPrice);

// const discountedPrice2 = originalPrices.map((value) => {
//     return value * 0.9
// })

// console.log(discountedPrice2);

let students = [
    {
        name: "soman",
        marks: 55
    }
    ,
    {
        name: "amrit",
        marks: 67
    }
    ,
    {
        name: "kishan",
        marks: 30
    }
    ,
    {
        name: "ravi",
        marks: 32
    }
]

// const studentNames = students.map((student) => student.name)
// const studentMarks = students.map((student) => student.marks)

// console.log(studentNames, studentMarks);

// const boostedMarks = students.map((student) => {
//     return{...student , marks: student.marks +10}
// })

// console.log(boostedMarks);

// let failedStudents = []

// students.forEach((student) => {
//     if (student.marks < 33){
//         failedStudents.push(student)
//     }

// })

const failedStudents = students.filter((student) => student.marks < 33).map((student) => student.name)



// console.log(failedStudents);


let marks = [54, 67, 45, 34, 31, 32]

//totalMarks = 0

// marks.forEach((mark) => totalMarks = totalMarks + mark)

const totalMarks = marks.reduce((accumulator, currrentValue) => {
    accumulator = accumulator + currrentValue
    return accumulator
}, 0)

// console.log(totalMarks);


const attendance = ["present", "present", "absent", "present", "absent"]

// let obj = {}

// attendance.forEach((value) => {
//     if (obj[value]){
//         obj[value] = obj[value] + 1
//     }
//     else {
//         obj[value] = 1
//     }
// })

const obj = attendance.reduce((acc ,value) => {
//    if (acc[value]){
//         acc[value] = acc[value] + 1
//     }
//     else {
//         acc[value] = 1
//     }

acc[value] = (acc[value] || 0) + 1
    return acc
} , {})

console.log(obj);
































