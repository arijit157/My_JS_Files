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
    constructor(name, age, game){
        super(name, age);  //to call the super class constructor
        this.game=game;
    }
    displayFavGame(){
        console.log(`Game: ${this.game} and name : ${this.name}`);
    }
}

let p=new Player("Arijit Bhakta", 22, "Badminton");
p.display();
p.displayFavGame();


//to access any methods of parent class from the child class, use super.method_name()

//to access any properties of parent class from the child class, use this.property_name