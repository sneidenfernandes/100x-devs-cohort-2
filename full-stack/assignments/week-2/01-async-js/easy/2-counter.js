// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


function backwardCounter(seconds){

       if (seconds === 0){
        console.log("Done.");
        return;
       }

       console.log(seconds);

       setTimeout(()=>{
        backwardCounter(seconds - 1);
       },1000);



}

function forwardCounter(seconds, duration){
       
       console.log(seconds);
       if (seconds === duration){
              console.log("Done!")
              return;
       }
       

       setTimeout(()=>{
              forwardCounter(seconds+1,duration)
       },1000)
}


forwardCounter(0,10)

































































// (Hint: setTimeout)