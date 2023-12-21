class Student{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    display(){
        console.log(`I am a student of ${this.age} years old and name is ${this.name}`);
    }
}

class Player extends Student{
    //inherits the constructor and display()
    static myMethod(){
        console.log("I am inside of a static method");
    }
}

let p=new Player("Arijit Bhakta", 22);
p.display();

Player.myMethod();