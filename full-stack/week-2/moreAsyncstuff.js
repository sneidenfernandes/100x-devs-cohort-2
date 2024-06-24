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




// Exercise 1: Basic Promise

// Create a function fetchData that simulates fetching data from a server. The function should return a promise that resolves with the data after 2 seconds.

// function fetchData(){
//     return new Promise(resolve=>{
        
//         setTimeout(()=>{
//             resolve("Fetched data.");
//         },2000);
//     });
// }

// fetchData().then((data)=>{
//     console.log(data);
// })


// Exercise 2: Promise with Error Handling

// Create a function fetchUserData that returns a promise. The promise should resolve with user data if the user is found and reject with an error message if the user is not found.

// function fetchUserData(userId){

//     return new Promise((resolve,reject)=>{
//         let users = {
//             1:{id:1, name: "john doe"},
//             2:{id:2, name: "jane doe"}
//         };

//         const user = users[userId]

//         if (user){
//             resolve(user);
//         }else
//         {
//             reject("user not found.");
//         }
// })
// }



// fetchUserData(1).then(data=>{
//     console.log(data);
// }).catch(error=>{
//     console.log(error);
// })

// fetchUserData(3).then(date=>{
//     console.log(data);
// }).catch(error=>{
//     console.log(error);
// })



// Exercise 3 : Create two functions  getUser and getposts and chain them together


// function getUsers(userId){
//     return new Promise(resolve=>
//         {
//             setTimeout(()=>{
//                 resolve({id: 12, name:"John Doe"});
//             })
//         }
//     )
// }

// function getPosts(userID){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(['post1', 'post2', 'post3']);
//         })
//     })
// }


// getUsers(1).then(data=>{
//     console.log(data.id);
//     return getPosts(data.id);
// }
// ).then(posts=>{
//     console.log(posts);
// })


// Excercise 4 Promise all


// const task1 = ()=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve('Task 1 complete.')
//         }, 1000);
//     })
// }

// const task2  = ()=>{

//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve('Task 2 complete.')
//         }, 1000)
//     })
// }

// const task3 = () => {
    
//     return new Promise((resolve)=>{
//          setTimeout(()=>{
//             resolve('Task 3 complete.')

//          }, 1000);
//     })
// }


// Promise.all([task1(), task2(), task3()]).then(results => {
//     console.log(results);
// })


// const fastTask = () => { 
//     return new Promise((resolve)=>{

//         setTimeout(()=>{
//             console.log('fast task.')
//         },2000);
        
//     })
// }



// const slowTask = () => {
//     return new Promise((resolve)=>{
//         setTimeout(()=>{

//             console.log('slow task');
            
//         },5000);
//     }) 
// }

// Promise.race([fastTask(), slowTask()]).then(winner=>{
//     console.log(winner);
// })



// fetch('https://jsonplaceholder.typicode.com/todos').then((response)=>{

// console.log('successfull.');

// }).catch(err => {
//     console.log('rejected');
// });

// const getTodos = async () =>{
//    const response  = await fetch("https://sonplaceholder.typicode.com/todos");
//     return response;
// }

// const test = getTodos()


// test.then((response)=>{
//     console.log(response);
// }).catch((error)=>{
//     console.log('failed.');
// })


// const getUserData = () => {
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve({user:"Sneiden", id: 1});
//         },1000);
//     });
// }

// const getPosts = () => {
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(['post1'])
//         },1000);
//     })
// }


// async function getStuff(){
//     let userData = await getUserData();
//     console.log(userData);

//     let posts = await getPosts();
//     console.log(posts);

// }


// console.log(1);
// console.log(2);
// getStuff();
// console.log(3);
// console.log(4);