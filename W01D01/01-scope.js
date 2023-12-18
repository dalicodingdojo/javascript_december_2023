
var superHeros = ["spiderman", "batman", "jedi"] // Global scoped variable 

function printHero(list) {
    // list block scoped variable  :  can be seen only inside the function 
    console.log(list[0]);
}
// console.log(list);
printHero(superHeros)
console.log("*****************************");
for(var i =0; i<superHeros.length;i++) {
    var hero  = superHeros[i]
    console.log(hero);
}
// console.log(hero);