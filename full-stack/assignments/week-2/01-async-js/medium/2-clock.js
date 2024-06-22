
// <!-- Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)
//  -->


function formatTime(date){
    const hours24 = date.getHours();
    const hours12 = hours24 % 12 || 12;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const amPm = hours24 >= 12 ? 'PM':'AM';

    const display =  `${String(hours12).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2,'0')} ${String(amPm)}`;
    return display;

}

function updateClock(){

    const now = new Date();
    date = formatTime(now);
    console.clear();
    console.log(date);
   
}

function clockFor(duration){

    console.log('Counter Display has initiated.');
    
    let i = 0;

     countDown = setInterval(()=>{
        i++;
        updateClock()
        if(i === duration){
            clearInterval(countDown);
            console.log("Clock Display has terminated!");
        }

     },1000)
    
}



clockFor(100);
