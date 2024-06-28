// const express = require("express");
// const app = express();

// app.get('/health-checkup', (req,res)=> {
//     const kidneyID = req.query.kidneyId;
//     const username = req.headers.username;
//     const password = req.headers.password;

//     if(username != "harkirat" || password != 'pass'){
//         res.status(400).json({"msg": "Somethings up with your inputs"})
//         return;
//     }
    
//     if(kidneyID != 1 && kidneyID !=2){
//         res.status(400).json({ "msg": "Somethings up with your inputs"})
//         return;
//     }

//     // do something with your kidney

//     res.json({"msg":"Your kidney is fine."});
// }
// );

// app.listen(3000);


// input validation using zod
// const express = require("express");
// const zod = require("zod");
// const app = express();

// const schema = zod.array(zod.number());

// app.use(express.json());

// app.get("/health-checkup", function(req,res){
//     const kidneys = req.body.kidneys;
//     const response = schema.safeParse(kidneys);
//     const kidneyLength = kidneys.length;

//     if (!response.sucess){
//         res.status(411).json({
//             msg : "input is valid"
//         });
//     } else {
//         res.send({
//             response
//         });
//     }
// });


// // app.use(function(err, req, res, next){
// //     res.json({
// //         msg: "Sorry something is up with our server."
// //     })
// // })
// app.listen(3000);


// const express = require("express");
// const zod = require("zod");
// const app = express();

// const schema = zod.object({
//     email : zod.string(),
//     password: zod.string(),
//     country: zod.literal("IN").or(zod.literal("US")),
//     kidneys: zod.array(zod.number())

// })


// app.use(express.json());

// app.post("/health-checkup", function(req,res){
//     const kidneys = req.body.kidneys;
//     const response = schema.safeParse(kidneys);
//     const kidneyLength = kidneys.length;

//     if (!response.success){
//         res.status(411).json({
//             msg: "input is invalid"
//         });

   
// }});


// // app.use(function(err, req, res, next){
// //     res.json({
// //         msg: "Sorry something is up with our server."
// //     })
// // })
// app.listen(3000);


// const zod = require("zod");

// function validateInput(arr){
//     const schema = zod.array(zod.string());
//     const response = schema.safeParse(arr);
//     console.log(response);
// }


// zod object authentication

const zod = require("zod");

function validateInput(object){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })

    const response = schema.safeParse(object);
    console.log(response);ß
}

validateInput({
    email: "sneiden@gmail.com",
    password: "wertiuo"
})