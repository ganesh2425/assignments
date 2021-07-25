const users = [
    {firstName: "Samantha", lastName: "Ruth", age: 33},
    {firstName: "Pavan", lastName: "Kalyan", age: 30},
    {firstName: "Samba", lastName: "Siva", age: 27},
    {firstName: "Ganesh", lastName: "Kummara", age: 22},
]

const output = users.map((x)=> x.firstName + "" + x.lastName);

console.log(output)