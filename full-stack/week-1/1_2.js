
// print variable

// var a = 1;
// console.log(a);

// print a different number

// var a = 4;
// console.log(a);

// console.log : print different variables
// console.log(5);
// console.log(6);
// console.log('sneiden');


// try const

// const a = 1;
// console.log(a);


// define different variables and print them 

// let firstName = 'Harkirat';
// let age = 18;
// let isMarried = false;
// console.log("This person is " + firstName + " and their age is " + age);

// if else statements 


// let firstName = 'Harkirat';
// let age = 18;
// let isMarried = false

// if (isMarried == true){
//     console.log(firstName + " is marrried.")
// }
// else
// {
//     console.log(firstName + " is not married.")
// }



// FOR LOOP 

// let answer = 0;

// for (let i =0; i<=100; i++)
//     {
//         answer = answer + i;
//     }

// console.log(answer);

// arrays

// const personArray = ['Harkirat', 'Raman', 'kirat'];

// console.log(personArray[1]);
// console.log(personArray[2]);

// const ages = [21,22,23,24];
// const numberOfpeople = ages.length;
// for (let i = 0; i<numberOfpeople; i++ )
//     {
//         if (ages[i] % 2 == 0){

//             console.log(ages[i]);
//         }
        
//     }


//  const personArray = ["harkirat", "raman", "priya"];
//  const genderArray = ["male","male", "female"];
//  const numberOfusers = personArray.length;

//  for (let i = 0; i < numberOfusers; i++)
//     {
//         if (genderArray[i] == "male")
//             {
//                 console.log(personArray[i]);
//             }
//     }


// Objects
// const users1 = {
//     firstName: "harkirat",
//     gender: "male"
// }

// console.log(users1["gender"])


// Functions


// function findSum(a,b){
//     // do things with the input and return the output 
//     return a + b;
// }

// const  value = findSum(1,2);
// const  value2 = findSum(1,32);
// console.log(value);
// console.log(value2);


//  let sum = 0;

//  for (let i = 0; i < 100000000000000; i++)
//     {
//         sum = sum + 1

//     }

// console.log(sum);

// Callbacks

// function sum(a,b,fnToCall){
//     let result = a + b;
//     fnToCall(result);
// }

// function displayResult(data){
//     console.log("Result of the sum is :" + data)
// }

// function displayResultPassive(data){
//     console.log("Sum's result is :" + data)
// }


// const ans = sum(1,2,displayResult);
//  console.log(ans);



// function sum(a,b){
//     return a + b;
// }

// function minus(a, b){
//     return a - b;

// }

// function operate(a,b,arithmeicFunction){
//     result = arithmeicFunction(a,b);
//     return result;
// }

// const a = operate(5,2,minus);
// console.log(a);


function greet(){
    console.log("HELLO!");
}


setInterval(greet, 3*1000)