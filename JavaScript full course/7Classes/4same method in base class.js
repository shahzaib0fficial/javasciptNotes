class Animal{
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
    detail(){
        console.log(this.name , this.age);
    }
}

class Mouse extends Animal{
    constructor(name,age,speed){
        super(name,age);
        this.speed = speed;
    }
    detail(){
        console.log(this.name , this.age , this.speed);
    }
}

const animal = new Mouse("Jerry" , 5 , 0.2);
animal.detail();