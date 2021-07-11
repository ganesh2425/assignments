const words = ["react", "script", "interview", "style", "javascript"];
const ans = words.filter((word) => word.length > 6);

console.log(ans); // [interview, javascript]

let newArr = [];
for (let i = 0; i < words.length; i++) {
    if(words[i].length > 6) {
        newArr.push(words[i])
    }
}

console.log(newArr);