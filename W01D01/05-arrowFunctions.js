
// console.log(newFunction(3));


// function myFunction(){
//     console.log(this)
//     console.log("Hello *****");
// }

// function power(e) {
//     return e**3
// }
// Named function without hoisting 
const newFunction = function power(e) {
    return e**3
}

// console.log(newFunction(3));
const newAnonymousFunction = function (e) {
    console.log("Function", this, "***************************************")
    return e**3
}
console.log(newAnonymousFunction(3));

const newAnonymousArrowFunction =  (e) => {
    console.log(this);
    return e**3
}
console.log(newAnonymousArrowFunction(3));

// const newAnonymousArrowOneLineFunction =  (e) =>  e**3 
// console.log(newAnonymousArrowOneLineFunction(3));

// function getValueFromId(id){
//     return document.getElementById(id).value;
// }
// const getValue = (id) => document.getElementById(id).value