class Person {
    constructor(Name, age, eno, qualification) {
        this.Name = Name;
        this.age = age;
        this.eno = eno;
        this.qualification = qualification
    }
    intro() {
        return "The name is: " + this.Name + " age is: " + this.age + " and eno is: " + this.eno;
    }
}

const Tayyab = new Person("Tayyab Khan", 21, "Gk4734", "MCA");
const Zoya = new Person("Zoya Khan", 21, "Gl2913", "BA");
const Anas = new Person("Anas Abrar", 22, "Gk4698", "MCA");

console.log(Tayyab.intro());