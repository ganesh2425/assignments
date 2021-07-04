//basic operations
let country = "India";
let state = "Hyderabad";
let population = 10;
language = "Telugu";

let description = state +
                 " is in " + country +
                 " and it's " + population + 
                 " million people speak " + language;

console.log(description);
// Hyderabad is in India and it's 10 million people speak Telugu
console.log(population/2); // 5
console.log(population++);  // 10
console.log(population > 30); // false
console.log(population < 50); // true

// strings and template literals
const description1 = `${state} is in ${country} and it's ${population} million people speak ${language}`;

    console.log(description1);