// class Animal{

//     sound(){
//         console.log("Sound");
        
//     }
// }

// class dog extends Animal{
//     bark(){
//         console.log("Bark");
        
//     }
// }

// let Dog = new dog();
// Dog.sound();
// Dog.bark();



class Animal{

    constructor(name){
        this.name = name;
    }

}
class Dog extends Animal{
    constructor(name,sound){
        super(name);
        this.sound =sound;
    }
}


let d1 = new Dog("Dog", "bark");
console.log(d1);
