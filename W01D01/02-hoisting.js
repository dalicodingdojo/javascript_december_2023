// console.log(dog)
 
// console.log(sayHi(dog))
function sayHi(name) {
    var number  = 2+2
    return `Hi ${name}`
}
let dog = "Max"

// console.log(dog);
// console.log(2 == "2")

// * How The interpreter Works
// 1 - Create namespaces = organize files 
//  2 - Hoisting :  var and function 
// 3 - Calculations & Interpolations
// 4 - Convert Everything to string
// 5 - run it


// Predict the hoisting

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// -----
// function learn(){
//     var dojo
//     dojo = "seattle";
//     console.log(dojo);
//     dojo = "burbank";
//     console.log(dojo);
// }
// dojo = "san jose";
// //  san jose
// learn()
// // seattle
// // burbank
// // san jose