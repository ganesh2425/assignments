let array = [4,1,6,2,8,5];

let result = array.map(el => el*3)
                    .filter(el => el>6)
                    .reduce((total,el) => total += el);

console.log(result);