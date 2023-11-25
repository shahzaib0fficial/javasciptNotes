const numbers = [1,2,3,4,5,6,7,8];

function check(number){
    return number%2==0; // return true or false
}

const evenNumbers = numbers.filter(check); // take a callback function in case of true it add in case of false it will ignore

console.log(evenNumbers);