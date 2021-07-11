function describeCountry (country, population,capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const descPortugal = describeCountry("Portugal",10,"Lisbon");

console.log(descPortugal);