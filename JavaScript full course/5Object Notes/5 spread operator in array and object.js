// spread operators

// in arrays
// const array1 = ["1","2","3","4","5"];
// const array2 = ["5","6"];

// const array3 = [...array1,...array2];
// console.log(array3);

// in Objects
const obj1 = {
    key1 : "value1",
    key2 : "value2",
};

const obj2 = {
    key3 : "value3",
    key4 : "value4",
};

const obj3 = {...obj1 , ...obj2};
console.log(obj3);

const obj4 = {..."abcdefghijklmnopqrstuvwxyz"}
console.log(obj4);