
// Defining Object Literal

// let person ={
//     first_name: 'Sneiden',
//     last_name: 'Fernandes',

//     getFunction: () => {
//         return  (`The name of ther person is ${person.first_name} ${person.last_name}`)
//     },

//     phone_number : {
//         mobile: '12344',
//         landline: '23445'
//     }



// }

// console.log(person.getFunction());
// console.log(person.phone_number.landline);


// Defining an object using a constructor

// function person(first_name, last_name){
//     this.first_name = first_name;
//     this.last_name = last_name;
// }

// let person1 = new person('Mukhul', 'Latiyan');
// let person2 = new person("Someone", "Else");

// console.log(person1.first_name);
// console.log(`${person2.first_name} ${person2.last_name}`);


// const coder = {
//     isStudying: false,
//     printIntroduction: function(){
//         console.log(`My name is ${this.name}. Am I studying? : ${this.isStudying}`);
//     }
// }

// const me = Object.create(coder);

// me.name = 'Mukul';

// me.isStudying = true;

// me.printIntroduction();

// class Vehicle{
//     construtor(name, maker, engine){
//         this.name = name;
//         this.maker = maker;
//         this.engine = engine;
//     }

//     getDetails(){
//         return (`The name of the bike is ${this.name}.`)
//     }

// }

// let bike1 = new Vehicle("Hayabusa", "Suzuki","1340cc");
// let bike2 = new Vehicle("Ninja", "Kawasaki", "998cc");

// console.log(bike1.name);
// console.log(bike2.maker);
// console.log(bike1.getDetails())


//Defining a class a traditional way 

// function Vehicle(name,maker,engine){
//     this.name = name;
//     this.maker = maker;
//     this.engine = engine;
// }

// Vehicle.prototype.getDetails = function (){
//     console.log('The name of this bike is ' + this.name);

// }
// let bike1 = new Vehicle("Hayabusa", "Suzuki","1340cc");
// let bike2 = new Vehicle("Ninja", "Kawasaki", "998cc");

// console.log(bike1.name);
// console.log(bike2.maker);
// console.log(bike1.getDetails());




