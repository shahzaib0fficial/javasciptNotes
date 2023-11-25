// const numbers = [3,5,7,8,11];

// const ans = numbers.some(number => number%2==0);

// console.log(ans);

// return true if condition is true once


const items = [
    {id: 1, name: "mobile", price:"50000"},
    {id: 2, name: "laptop", price:"70000"},
    {id: 3, name: "tablet", price:"55000"},
    {id: 4, name: "tv", price:"250000"},
];

const ans = items.some(item => item.price > 100000);
console.log(ans);