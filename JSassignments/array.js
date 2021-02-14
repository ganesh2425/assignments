let fruits = ['Apple', 'Banana', 'Grapes'];

console.log(fruits);
console.log(fruits[fruits.length-1]);
console.log(fruits[0]);

fruits.forEach(function(item, index, array){
    console.log(item,index);
});
let newLength = fruits.push('Mango');
console.log(fruits.length);
