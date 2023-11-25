// in case of arrow function this value is from a level up where it is called

const user = {
    fName : "Shahzaib",
    age : 18,
    about : () => {
        console.log(this);
        console.log(this.fName,this.age);
    }
}

user.about();