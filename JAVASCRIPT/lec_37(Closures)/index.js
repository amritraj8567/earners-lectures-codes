// function outter() {
//     let a = 5
//     function inner() {
//         console.log(a);     // "Reference Error" : Cannot access 'a' before initialization
//        let a = 4
//     }
//     inner()
// }

// outter()

function outter() {
    const a = 5
    function inner() {
        console.log(a);     // It will return value : "undefined"
        var a = 4
    }
    inner()
}

outter()





