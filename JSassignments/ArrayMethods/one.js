const items = [
    {name: "Bike",      price:100},
    {name: "Car",       price:200},
    {name: "Scooter",   price:10},
    {name: "TV",        price:5},
    {name: "Album",     price:500},
    {name: "Phone",     price:1000},
    {name: "Computer",  price:25},
];

// filter method
const filteredItems = items.filter((item)=> {
    return item.price <= 100;
});
console.log(items);
console.log(filteredItems);

//map method
const itemNames = items.map((item)=> {
    return item.name
});
console.log(itemNames);

// find method
const foundItem = items.find((item)=> {
    return item.name === "Phone"
});
console.log(foundItem);

//forEach
items.forEach ((item)=> {
    console.log(item.name)
});

// some method
const hasInexpensiveItems = items.some((item)=> {
  return item.price <= 100
});
console.log(hasInexpensiveItems);

// every method
const InexpensiveItems = items.every((item)=>{
    return item.price <= 1000
});
console.log(InexpensiveItems);

// reduce method
const total = items.reduce((currentTotal, item)=> {
    return item.price + currentTotal
}, 0);
console.log(total);