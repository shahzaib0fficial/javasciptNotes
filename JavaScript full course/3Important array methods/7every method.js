// const numbers = [2,4,6,8];

// const ans = numbers.every(isEven => isEven%2 === 0);

// console.log(ans);

// // callback return true/false
// // every return true/false

const items = [
    {id: 1, name: "mobile", price:"25000"},
    {id: 2, name: "laptop", price:"20000"},
    {id: 3, name: "tablet", price:"15000"},
    {id: 4, name: "tv", price:"32000"},
];

console.log(items.every(item => item.price<35000));