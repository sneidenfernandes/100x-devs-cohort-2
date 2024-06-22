// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second




function backwardCounter(duration){

    console.log("Counter Started.");

    let i = duration;

    console.log(i);

    let countDown = setInterval(()=>{
        i--;
        console.log(i);

        if (i === 0){
            clearInterval(countDown);
            console.log("Blastoff!");
        }
    },1000)

}

function forwardCounter(duration){

    console.log('Counter started.');
    
    let i = 0;

     countDown = setInterval(()=>{
        i++;
        console.log(i);
        if(i === duration){
            clearInterval(countDown);
            console.log("Blastoff");
        }

     },1000)
    
}

forwardCounter(10);
