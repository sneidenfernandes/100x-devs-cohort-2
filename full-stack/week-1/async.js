

// implementing callback hell 
// let stocks = {
//     fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
//     liquid: ["Water", "Ice"],
//     holder: ["Cone", "Cup", "Stick"],
//     toppings: ["Chocolate", "Peanuts"]

// }




// let order = (fruitName, call_production) => {
    
//     setTimeout(() => {
//         console.log(`${stocks.fruits[fruitName]} was selected.`)
//     })
//     call_production()
// };

// let production = () => {
    
//     setTimeout(()=>{
//         console.log("Production has started.");

//         setTimeout(() => {
//             console.log("The Fruit has been chopped");

//         setTimeout(()=> {
//             console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added.`);

//         setTimeout(()=> {
//             console.log("The Machine was started.");
        
//         setTimeout(()=>{
//             console.log(`${stocks.holder[0]} was placed on a cone.`);

//         setTimeout(()=>{
//             console.log(`${stocks.toppings[0]} was added.`);
        
//         setTimeout(()=> {
//             console.log(`Ice Cream was served.`)
//         }, 2000);
//         },3000);
//         },2000);
//         }, 1000);
//         }, 1000);
//         },2000);
//     },0000);
// };

//  order(0, production);

// let stocks = {
//     fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
//     liquid: ["Water", "Ice"],
//     holder: ["Cone", "Cup", "Stick"],
//     toppings: ["Chocolate", "Peanuts"]
// }

// let  is_shop_open  = true; 

// let order = (time,work) => {


//     return new Promise((resolve, reject) =>{

//         if (is_shop_open)
//             {
//                 setTimeout(()=>{
//                     resolve(work());
//                 },time);
//             }
//         else{
//             reject(console.log("Our shop is closed."))
//         } 

//     })
// }

// order(2000, ()=>console.log(`${stocks.fruits[0]} was selected.`))

// .then(()=>{ 

//     return order(000,()=>console.log("Production has started"))
// })

// .then(()=>{

//     return order(2000, ()=>console.log("The fruit has been cut."))
// })


// .then(()=>{
//     return order(1000, ()=>{
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added.`)
//     })
// })

// .then(()=>{
//     return order(1000, ()=>{
//         console.log(`Start the machine.`)
//     })
// })

// .then(()=>{
//     return order(2000,()=>{
//         console.log(`Ice creamed placed on ${stocks.holder[0]}.`)
//     })
// })

// .then(()=>{
//     return order(3000,()=>{
//         console.log(`${stocks.toppings[0]} was selected.`)
//     })
// })

// .then(()=>{
//     return order(2000,()=>{
//         console.log("Ice cream was served.")
//     })
// })

// .catch(()=>{
//     console.log("Customer Left.")
// })

// .finally(()=>{
//     console.log("Day ended. Shop is closed.")
// })

// let stocks = {
//     fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
//     liquid: ["Water", "Ice"],
//     holder: ["Cone", "Cup", "Stick"],
//     toppings: ["Chocolate", "Peanuts"]
// }

// let is_shop_open = true;


// let toppings_choice = () => {
//     return new Promise((resolve, reject)=>{
       
//         setTimeout(()=>{

//             resolve(console.log("which topping would you love?"));
//         });

//     })
// }

// async function kitchen(){
//     console.log(" A ");
//     console.log(" B ");
//     console.log(" C ");

//     await toppings_choice()

//     console.log(" D ");
//     console.log(" E ");
// }

// kitchen();

// console.log("doing the dishes");
// console.log("cleaning the tables");
// console.log("taking others orders");

let stocks = {
        fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
        liquid: ["Water", "Ice"],
        holder: ["Cone", "Cup", "Stick"],
        toppings: ["Chocolate", "Peanuts"]
    }
    
let is_shop_open = true;
    

function time(ms){

    return new Promise((resolve,reject)=>{
        if (is_shop_open){

            setTimeout(resolve,ms);
        }
        else{
            reject(console.log("shop is closed"))
        }
    })
}

async function kitchen(){
    try{

        await time(2000);
        console.log(`${stocks.fruits[0]}`);
        

        await time(1000);
        console.log("Start the machine.")

        await time(2000);
        console.log("Cut the fruit.")

        await time(3000);
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added.`)

        await time(2000);
        console.log(`${stocks.holder[1] } selected.`)

        await time(3000);
        console.log(`${stocks.toppings[1]} selected.`)

        await time(2000)
        console.log("Ice cream served.")
       

    }
    catch(error){

        console.log("customer left", error);

    }
    finally{

        console.log("day ended, shop is closed.")
        
    }
}

kitchen();