let users = [
    {fistName: "M31s", Brand: "Samsung"},
    {fistName: "8pro", Brand: "Realm"},
    {fistName: "11X", Brand: "Xia"}
];

let userName = users.map(function(element) {
    return `${element.fistName} ${element.Brand}`
});

console.log(userName); // [ 'M31s Samsung', '8pro Realm', '11X Xia' ]