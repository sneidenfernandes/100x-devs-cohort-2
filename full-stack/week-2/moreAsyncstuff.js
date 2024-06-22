// const axios = require('axios');

const { get } = require("http");


// const getTodos = (callback) => {
//     const url = "https://jsonplaceholder.typicode.com/todos";
//     axios.get(url)
//     .then(res => {
//         if (res.status === 200){
            
//             callback(undefined, res.data)
            
//         }
        
//     })
//     .catch(error=>{
//         if (error.response && error.response.status === 404){
//             callback('could not find data', undefined)
            
//         }
//     })

// }



// getTodos((err, data)=>{
//     console.log("Callback fired.");
//     if (err){
//         console.log(err);
//     }else{
//         console.log(JSONparse(data,"title"));
//     }
// });

// // getting the titles from the json data

// const JSONparse = (arr, feature) => {
//      let output = [];
//     for (let i = 0; i < arr.length; i++) {
//          output.push(arr[i][feature]);

//     }
//     return output;
// }

// const fs = require('fs');
// const { default: test } = require('node:test');



// function getText(resource,callback){
//     fs.readFile(resource, 'utf-8',(err,data)=>{
//         callback(undefined,JSON.parse(data));
//     })
// }

// getText("test.txt",(err,data)=>{
//     console.log(data);
//     getText("test2.txt", (err, data)=>{
//         console.log(data);
//         getText("test3.txt", (err, data)=>{
//             console.log(data);
//         })
//     })
// });

// promise 

// const getSomething = ()  => {
//     return new Promise((resolve, reject)=>{
//         resolve(1);
//         reject(3);
//     }) 
// }


// // one way of writing promises
// // getSomething().then((data)=>{
// //     console.log(data + 1);
// // }, (err)=> {
// //     console.log(err+2);
// // })

// getSomething().then(data => {
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })


//Promisified getText()


// function getText(resource){
    
//     return new Promise((resolve, reject)=>
//     {
        
//         const fs = require("fs"); 
//         fs.readFile(resource, 'utf-8',(err,data)=>{
//             if (err){
//                 reject('file not found');
//             }else{
//                 resolve(data);
//             }
           
//         });
       
        
//     }
//     )}
  

// getText("test.txt")
// .then((data)=>{
//     console.log('Promise 1 : \n');
//     console.log(JSON.parse(data));

//     return getText("test2.txt");
// }).then((data)=>{
//     console.log('Promise 2: \n');
//     console.log(JSON.parse(data)); 
//     return getText("test34.txt");
// }).then((data)=>{
//     console.log('Promise 3: \n');
//     console.log(JSON.parse(data));

// }).catch(err=>{

//     console.log('promise rejected', err)

// });


