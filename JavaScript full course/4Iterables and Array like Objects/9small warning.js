const user1 = {
    fName : "Shahzaib",
    age : "18",
    about: function(){
        console.log(`Name : ${this.fName} and age : ${this.age}`);
    }
}

// don't do that

const myFunc = user1.about;
myFunc();

// do
const myFunc2 = user1.about.bind(user1);
myFunc2();