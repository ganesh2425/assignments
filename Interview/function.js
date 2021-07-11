var a = 5;
function adder () {
    let b = 12
    console.log(a+b);
}

console.log(adder())
console.log(b)  // Error as b is not accessible outside the function

{
    const c = 10;
    console.log(c);  // 10
}

console.log(c) // Error as c is not accessible outside the block