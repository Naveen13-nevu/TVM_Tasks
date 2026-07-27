
// let a;
// console.log(a);

// let a = "10" / 10;
// console.log(a);

// (function all() {
//     console.log("hi");
    
// })();

// function greet(){
//     console.log(arguments);
    
// }
// greet(10,20,30);

// let a = () =>{
// console.log(arg);

// }
// a(10,20,30)

// function greet(name){
//     this.name = name;
// }
// const p = new greet("navenn");
// console.log(p.name);

// let per = (name) =>{
//     this.name = name;
// }
// const A = new per("arun");
// console.log(A.name);

// let parent = document.getElementById("parent");
// let child = document.getElementById("child");

// parent.addEventListener("click", ()=>{
//     console.log("parent clicked");
    
// }, true);

// child.addEventListener("click", () =>{
//     console.log("child clicked");
    
// });

// parent.addEventListener("click", (event)=>{
//     if(event.target.tagName === 'BUTTON'){
//         console.log(event.target.textContent);
        
//     }
// })

// console.log("Program Starts");

// let a = setInterval(()=>{
//     console.log("Interval");
    
// },1000);
// clearInterval(a);

// setTimeout(()=>{
//     console.log("waiting.....");
    
// },2000)

// let prop = new Promise((resolve, reject) =>{
//     let vaild = true;

//     if(vaild){
//         resolve("Resolved")
        
//     }
//     else{
//         reject("rejected")
        
//     }
// })
// prop.then((data)=>{
//     console.log(data);
    
// })
// .catch((error) =>{
//     console.log(error);
    
// });

// console.log("Ends");

// let p2 = new Promise( resolve => setTimeout(()=>{
//     resolve("first")
// },1000))

// let p3 = new Promise(resolve => setTimeout(
//     () =>{
//         resolve("second");
//     },2000
// ))

// Promise.all([p2,p3])
// .then(result => console.log(result)
// );

function Register(){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve("Register")
        },1000)
    })
}
function login(){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve("Login")
        },1000)
    })
}
function dashboard(){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve("Dashboard")
        },1000)
    })
}
function task(){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve("Task")
        },1000)
    })
}




// async function app(){

//     try{
//         const ReerResultgist= await Register();
//         console.log(ReerResultgist);

//         const loginResult = await login();
//         console.log(loginResult);

//         const DashBoards = await dashboard();
//         console.log(DashBoards);

//         const tasks = await task();
//         console.log(tasks);
        
//     }
//     catch(error)
//     {
//         console.log("Error");
        
//     }

// }

// app();

function app(){

 

        Register().then((registerResult) =>{
            console.log(registerResult)
            return login();
            
        })
        
        .then((LoginResult) =>{
            console.log(LoginResult);
            return dashboard();
            
        })
        
        .then((DashboardResult) =>{
            console.log(DashboardResult);
            return task();
            
        })
        
        .then((TaskResult) => { 
            console.log(TaskResult);
            console.log("All task completed ");
            
            
        })
        
    }
    app();