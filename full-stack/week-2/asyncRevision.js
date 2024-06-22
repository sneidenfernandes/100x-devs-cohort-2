
// function onDone(){
//     console.log("Hi there");}

// setTimeout(onDone,3000);

// console.log("After setTimeout");

// let sum = 0;
// for(let i = 0; i<= 10000000000; i++ ){
//     sum += 1;
// }

// console.log("Something");



const fs = require("fs");

fs.readFile("a.txt", 'utf-8', (err,data) => {
    console.log("data read from the file is:");
    console.log(data);
})

let ans = 0;

for (let i = 0; i<100; i++){
    ans +=  i;
}
console.log(ans);
console.log(ans);
console.log(ans);
console.log(ans);
console.log(ans);
console.log(ans);
console.log(ans);
