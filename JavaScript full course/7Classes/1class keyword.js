class createObj{
    constructor(firstName , lastName , age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    about(){
        console.log(this.firstName , this.lastName , this.age);
    }
    is18(){
        return this.age >= 18
    }
}

const user1 = new createObj("Shahzaib" , "Ahmed" , 18);
user1.about();
console.log(user1.is18());