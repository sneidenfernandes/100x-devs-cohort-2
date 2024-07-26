const express = require("express");
const app = express();


function isOldEnough(req,res,next){
    const age = req.query.age;
    if(age>=14){
        next();
    }else{
        res.json({
            msg: "You are not old enough."
        });
    }

}

app.get("/ride1",isOldEnough, function(req,res){
        res.json({
            msg: "Ride 1 complete."
        })
}
);

app.get("/ride2",isOldEnough, function(req,res){
    res.json({
        msg: "Ride 2 complete."
    })

});

app.listen(3000);


