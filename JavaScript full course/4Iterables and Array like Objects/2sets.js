// set (iterable)
// store data
// also have it's own methods
// no index based access
// order is not garuntaees
// unique items only (no dublicates allowed)

/*
const numbers = new Set([1,2,3,4,5]);
console.log(numbers);

const myArray = ["item1","item2"];
const mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);
mySet.add(5);
mySet.add(6);
mySet.add(myArray);

console.log(mySet);
console.log(mySet.has(1));
*/

/*
const myArray = [1,2,3,4,4,5,6,5,6];
const uniqueElements = new Set(myArray);

console.log(uniqueElements);
console.log(myArray);

// checking length of set

let count = 0;

for(let element of uniqueElements){
    count++;
}

console.log(count);
*/