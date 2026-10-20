

// console.log(a);
// // let a = 6
// var a = 6
// // const a = 6

// addNum()

// function addNum(){
//     console.log("hello");
// }

// addTwoNum()

// let addTwoNum = function(){
//     console.log("function expression");
// }


// var a = 5;
// let b = 7
// function addNum(){
//     let a = 6
//     console.log(a);
// }

// addNum()

// let x = 6

// function random(){
//     console.log(x);
//     x = 3
// }

// random()

// let city = 'delhi'

// function printCity() {
//     console.log(city);
// }

// function random(fn) {
//     let city = "varanasi"
//     fn()
// }

random(printCity)

function fun1() {
    username = "nishant"

    function fun2() {

        function fun3() {

            function fun4() {
                console.log(username);

            }

            fun4()
        }
        fun3()
    }
    fun2()
}
fun1()