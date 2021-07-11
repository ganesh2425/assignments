let array = ["Hai", "I'm", "Javascript"];
let newArray = ["Hai", "I'm", "Javascript"];

delete array[1];
delete array[2];

newArray.splice(1,2);

console.log(array.length);
console.log(newArray.length);