class Person{
    constructor(firstName , lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set changeName(change){
        const [first , last] = change.split(" ");
        this.firstName = first;
        this.lastName = last;
    }
}

const person = new Person("Shahzaib" , "Ahmed");

person.changeName = "Abdul Aleem";

console.log(person.fullName);