const user = {
    fName : "Shahzaib",
    age : 18,
    about(){
        console.log(this.fName,this.age);
    }
}

user.about();