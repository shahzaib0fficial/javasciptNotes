// const arr = [1,2,3,5];

// const sum = arr.reduce((accumulator,currentValue)=>{
//     return accumulator + currentValue;
// },15); //accumulater first value is 15(optional)

// console.log(sum);

// //accumulator      currentValue     return
// //   15                 1             16
// //   16                 2             18
// //   18                 3             21
// //   21                 5             26


const userCart = [
    {productId: 1, name: "Mobile", price: 40000},
    {productId: 2, name: "Laptop", price: 70000},
    {productId: 3, name: "tv", price: 30000},
];

const Amount = userCart.reduce((total , currentProduct)=>{
    return total + currentProduct.price;
}, 0);

console.log(Amount);