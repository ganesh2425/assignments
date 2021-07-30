"use strict";
// first of all install 'npm install prompt-sync'

const prompt = require ("prompt-sync")({sigint:true});

let number = parseInt(prompt("Enter Integer Number: "));

let result = (number % 2) == 0;

switch ( result ) {
    case true:
        console.log(`${number} is even number`);
        break;
    case false:
        console.log(`${number} is odd number`);
        break;
}