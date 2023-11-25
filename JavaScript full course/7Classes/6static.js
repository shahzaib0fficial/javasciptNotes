class Person{
    constructor(firstName , lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    static aboutClass(){
        console.log("This is a Person Class");
    }
    static prop = "Static Property";
    detail(){
        console.log(this.firstName,this.lastName);
    }
}

const person = new Person("Shahzaib" , "Ahmed");

// person.detail();

Person.aboutClass();
console.log(Person.prop);