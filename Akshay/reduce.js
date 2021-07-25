const arr = [2,6,8,5,3];

// sum or max

function findSum(arr){
    let sum = 0;
    for (let i=0; i< arr.length; i++) {
        sum =sum +arr(i);
    }
    return sum;
}
console.log(findSum(arr));