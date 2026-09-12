class student {
    constructor(name, age){
        this.name=name;
        this.age=age;

    }
    study(){
        console.log(this.name+' is studying');
    }
}
const student1 = new student('john', 18);
student1.study();

//encapsulation

class bankacc{
    #bal=0;
    deposit(amount){
        this.#bal+=amount;

    }
    getbalance(){
        return this.#bal;
    }
}
const acc=new bankacc();
acc.deposit(1000);
console.log(acc.getbalance());

//inheritance

class animal{
    eat(){
        console.log("eating...");
    }

}
class dog extends animal{
    bark(){
        console.log("barking...");
    }
}
const dog=new dog();
dog.eat();
dog.bark();

//polymorphism
class animal{
    sound(){
        console.log("animal makes sound...");
    }

}
class Dog extends animal{
    sound(){
        console.log("dog barks...");
    }
}
class Cat extends animal{
    sound(){
        console.log("cat meows...");
    }
}
const dog=new Dog();
const cat=new Cat();

dog.sound();
cat.sound();





