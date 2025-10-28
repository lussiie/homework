class Animal{
    constructor(name){
        this.name = name
    }

speak(){
    console.log(`makes a sound ${this.name}`)
}
}
class Dog extends Animal {
    constructor(name){
        super(name);
    }
    speak(){
        console.log(`${this.name} barks`);
    }
}
const dog = new Dog("Buddy")
dog.speak()