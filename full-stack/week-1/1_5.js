// Async functions  


// function findSum(n)
// {
//  let ans = 0;
//  for (let i = 0; i<n; i++)
//     {
//         ans = ans + i ;
//     }
//     return ans;
// }


// function findSumtill100(){
//     console.log(findSum(100));
// }


// function syncSleep(){
//     ans = 0;
//     for (let i = 0; i<10000000; i++)
//         { 
//             ans = ans+ 1;
            
//         }
// }


// syncSleep();
// setTimeout(findSumtill100, 1000);
// console.log("Hello, World!");

// const fs = require("fs");



// fs.readFile("a.txt", "utf-8", function(err,data){
//     console.log(data);
// })


// console.log("line 1");
// a = 0;
// for (let i = 0; i<101020020; i++){
//     a++;
// }

//  console.log("Hi there 2")

// const fs = require("fs");

// function kiratsReadFile(cb){
//     fs.readFile("a.txt", "utf-8", function(err,data){
//         cb(data);
//     })
// }


// function onDone(data) {
//     console.log(data);
// }

// kiratsReadFile(onDone);






// function someFunction(a,b){
//     console.log(a + " " + b);
//     return new Promise(function(resolve){
//        let  ans = resolve(a,b)
//         console.log(ans);
//     })
// }

// function add(a,b){
//     return a + b;
// }

// function mul(a,b){
//     return a * b ;
// }

// someFunction(3,4).then(add);

var d = new Promise(function(resolve){
    resolve("f--");
});

function callback() {
    console.log(d);
}

d.then(callback);