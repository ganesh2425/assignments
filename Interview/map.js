const a = [1,2,3,4,5];

const d = a.map (function (item) {
    return item * 3
});

const x = a.map (function (item){
    return item + 5;
});

console.log(d); // [2,4,6,8,10]
console.log(x);