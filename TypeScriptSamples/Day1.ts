
// let Name:string = " Naveen";
// console.log(Name);

// function add(a: number, b:number): number{
//    return  a+b;

// }
// let result = add(10,20);

// console.log(result);

// let age : number = 24;

// console.log(age);

// Interface

// interface Student{
//     name : string,
//     age : number
// }

// let s1 : Student = {
//     name : "Naveen",
//     age :12
// }

// console.log(s1);


// class Student {
//     name : string;
//     age : number;

//     constructor(name: string , age : number){
//         this.name = name;
//         this.age = age;
//     }

//     display() : void {
//         console.log(this.name);
//         console.log(this.age);
        
//     }
// }

// let s1 = new Student("Naveen", 25);
// s1.display();


// let names : Array<string> = ["Naveen", "praveen", "kevin"];
// let age : Array<number> = [23,24,25];

// console.log(names);
// console.log(age);

// let largeNumber : bigint = 12345667n;
// console.log(largeNumber);

// let id1:symbol = Symbol("id");
// let id2:symbol = Symbol("id");

// console.log(id1 == id2);

// let data : any = "Naveen";

// data = 10;
// console.log(data);

interface Student {

    id:number;
    name:string;
    age : number;
    department : string;

}


const stud : Student ={
    id:1,
    name:"Naveen",
    age : 24,
    department : "Hr"
}

console.log(stud);


