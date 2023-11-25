const numbers = [5,9,120,40,300];

// numbers.sort();

// console.log(numbers); // sort according to the fist character ASCII code 


// to sort in accending according to number
numbers.sort((a,b)=>{
    return a-b;
});

// 5,9
// a-b ---> -4 (in case of negitive value won't swap)

// 120,40
// a,b ---> (in case of positive values swap)

// console.log(numbers);


// // to sort in decending according to number
// numbers.sort((a,b)=>{
//     return b-a;
// });

// console.log(numbers);


const products = [
    {id: 1, name :"p1", price: 200},
    {id: 2, name :"p2", price: 100},
    {id: 3, name :"p3", price: 500},
    {id: 4, name :"p4", price: 400},
    {id: 5, name :"p5", price: 1200},
];

// price low to high 

const lowToHigh = products.slice(0).sort((a,b)=>{
    return a.price - b.price;
});

console.log(lowToHigh);


// price high to low 

const highToLow = products.slice(0).sort((a,b)=>{
    return b.price - a.price;
});

console.log(highToLow);