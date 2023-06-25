// console.log("start exe...");

// setTimeout(() => {
//     console.log("Logic exe...")
// }, 2000);

// console.log("complete exe...");

// const a = 10;
// const b = 0;

// setTimeout(() => {
//    b = 20;
// }, 2000);

// console.log(a+b);   //disadvantage of asynchronous.

//How to solve the problem of asynchronous

const a = 10;
const b = 0;


let waitingData = new Promise((resolve, reject)=>{
    setTimeout(() => {
        // b = 20;
        resolve(20)
     }, 2000);
})

waitingData.then((b)=>{
    console.log(a+b);
})

