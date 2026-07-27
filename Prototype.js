//prototype

// let student = {
//     info(){
//         console.log("Naveen");
        
//     }
// }

// let college = {
//     location(){
//         console.log("SMKC");
        
//     }
// }

// Object.setPrototypeOf(college,student);
// college.info();


// prototype chaining

// let location = {
//     country: "india"
// }

// let district = {
//     dist : "chennai"
// }

// let info = {
//     name: "naveen"
// }

// Object.setPrototypeOf(district,location);
// Object.setPrototypeOf(info, district)


// console.log(info.name);
// console.log(info.dist);
// console.log(info.country);


// Generators

// function* greet(){
//     yield 10;
//     yield 20;
//     yield 30;
// }

// let gen = greet();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());


