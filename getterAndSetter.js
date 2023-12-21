//to use getter and setter, use get and set keywords
//the name of the getter and setter methods should not be the same as property names

class Car{
    constructor(name){
        this.carname=name;
    }
    get getCarname(){
        return this.carname;
    }
    set setCarname(cname){
        this.carname=cname;
    }
}

let car1=new Car("Ford");
console.log(car1.getCarname);   //calling getter (do not use parentheses)

car1.setCarname="Thar";  //calling setter (do not use parentheses)
console.log(car1.getCarname);   //calling getter (do not use parentheses)