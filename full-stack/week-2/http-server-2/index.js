
const express = require("express");
const app = express();
var users = [{
    name: 'John',
    kidneys:[{
        healthy:false
    },{
        healthy:false
    }]
}];


function sum(n){
    let ans = 0;
    for (let i = 0; i<=n; i++){
        ans += i;

    }
    return ans;
}



app.get("/", function(req,res){
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;

    let numberOfHealthyKidneys = 0;
    for(let i=0; i<johnKidneys.length; i++){
        if (johnKidneys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys+1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys

    })

  


});


app.use(express.json());

app.post("/", function(req,res){
    const isHealthy = req.body.isHealthy;
    console.log()
    users[0].kidneys.push({
        healthy: isHealthy
    });

    res.json({
        msg:"Done!"
    })


})

app.put("/", function(req, res){
    for (let i = 0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

app.delete("/", function(req, res){
    const newKidneys = [];
    for (let i = 0; i<users[0].kidneys.length; i++){
        if (users[0].kidneys.healthy){
            newKidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({msg: "Done."});
})
app.listen(3000);


