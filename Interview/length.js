// object destructuring

const languages = ["Js","python","c","c++","java","react"];

const {length, 0: first, [length-1]: last} = languages
console.log(first, last);


const laptops = ["dell","lenovo","hp","acer","mi","mac"];

console.log(laptops.length);