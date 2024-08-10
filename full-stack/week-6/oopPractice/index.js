class Animal{
    alive=true;
    eat(){
        console.log(`This ${this.name} is eating.`)
    }

    
    sleep(){
        console.log(`This ${this.name} is sleeping.`)
    }


}

class Rabbit extends Animal{

    name= 'rabbit';

    run(){
        console.log(`This ${this.name} is running.`)
    }

}

class Fish extends Animal{
    name = 'fish';

    swim(){
        console.log(`This ${this.name} is running`)
    }

}

class Hawk extends Animal{

    name = 'hawk';

    fly(){
        console.log(`This ${this.name} is running.`)
    }

}



const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(hawk.alive);
hawk.eat();
hawk.sleep();


