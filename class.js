class Student{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    display(){
        console.log(`I am a student of ${this.name} years old and name is ${this.age}`);
    }
}

let s=new Student("Arijit Bhakta", 22);
s.display();