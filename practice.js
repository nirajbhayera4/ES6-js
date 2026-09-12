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

