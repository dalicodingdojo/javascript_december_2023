//!  Callback Function ? : function passed as an parameter to an other function


// setTimeout( () => console.log("start") , 3000 );
      
//   console.log("end");

  const addEmoji  = (element) => console.log(element+"🎈")

  const arr = ["one", "two", "three"]

  const printElements = (list, callbackFunction) => {
    for(let i =0; i<list.length; i++){
        callbackFunction(list[i])
    }
  }

//   printElements(arr, addEmoji)

// !  MAP 

const numbers = [1,47,22,9]
// for(let i = 0; i<numbers.length; i++){
//     console.log("From For Loop",numbers[i])
// }
numbers.map((x, y) => console.log(`FROM .map ${y} --  ${x**5}`))
const  doubleNumbersForLoop = []
// for(let i = 0; i<numbers.length; i++){
//     doubleNumbersForLoop.push(numbers[i]*2)
//     console.log("From For Loop",numbers[i])
// }
const doubleNumbers = numbers.map(element => element*2)
// console.log(doubleNumbers);

// ! Filter 

const animals  = ["leopard 🐆", "giraffe 🦒 ","zebra 🦓", "elephant 🐘", "monkey 🐵", "lion 🦁"];

// for (let i=0; i<animals.length; i++){
//     if(animals[i].length>8){
//         console.log(animals[i]);
//     }
// }
const longNameAnimals = animals.filter(element => element.length>8)
// console.log(longNameAnimals);
const animalsWithO = animals.filter(animal => animal.includes("o"))
// console.log(animalsWithO);

// -------- Map & Filter ------------------

const animalsWithOCool = animals.filter(animal => animal.includes("o")).map(element => element + " is Cool (-_-) ")
console.log(animalsWithOCool);


// Freeze 

const people = Object.freeze([
    {name:"Alex", age:23},
    {name:"Sarah", age:17},
    {name:"Max", age:28},
    {name:"Amelia", age:18},
    {name:"Bob", age:30},
    {name:"Mary", age:16},
    {name:"Sue", age:28},
    {name:"George", age:38},
]);

const peopleOver18  = people.filter(person => person.age>18)
console.log(peopleOver18);
peopleOver18[0].name = "Unknown"
console.log("People Over 18: ", peopleOver18);
console.log("People : ", people);
