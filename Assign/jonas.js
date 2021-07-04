// Values and Variables
let country = "Bangalore";
let continent = "India";
let population = 20;

console.log(country);
console.log(continent);
console.log(population);

//Data Types
let isIsland = false;
language = "Telugu";

console.log(typeof isIsland);
console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);

//Basic Operations
console.log(population/2);
console.log(population*10);
console.log(population++);
console.log(population > 6);
console.log(population < 10);

const description = country + 
        " is in " + continent + 
        ", and its " + population + 
        " million people speak " + language;

console.log(description);

// strings and template literals
const description1 = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

console.log(description1);