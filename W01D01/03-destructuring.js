const favoritePlayer = {
    firstName : "Cristiano",
    lastName : "Ronaldo",
    email : "cr7@email.com",
    age : 39
}

const playerFirstName = favoritePlayer.firstName
const playerLastName = favoritePlayer["lastName"]
const {firstName, lastName} = favoritePlayer;
const {firstName:fn, lastName:ln} = favoritePlayer;
// console.log(playerFirstName, playerLastName);
// console.log("Destructuring : ",firstName, lastName );
// console.log("Destructuring with alias : ",fn, ln );
const {email:emailAddress,age} = favoritePlayer
// console.log("Destructuring with alias : ",emailAddress, age );

const superHeros = ["spiderman", "batman", "jedi", "antman", "thor", "aquaman"] 

// I want the 2nd and the 4th elements
const second = superHeros[1]
const fourth = superHeros[3]
const [,secondHero,,fourthHero] = superHeros
// console.log(second, fourth);
// console.log("Destructuring : ",secondHero, fourthHero );
const [first,,third] = superHeros
// console.log("Destructuring : ",first, third );

const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
      {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
      },
      {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
      }
    ],
    createdAt: 1543945177623
  };
const oldCity = person.addresses[1].city
console.log(oldCity);
const {addresses:[,{city:newCity}]} = person
const {addresses:[,{address: newAddress}]} = person
console.log("New City: ", newCity);
console.log("New Address: ", newAddress);