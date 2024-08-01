const express = require("express");
const app = express();
const {createTodo, updateTodo} = require("./types.js");
const {todo} = require("./db.js")
const port = 3000;


//

var cors = require("cors");
app.use(cors());
app.options('*',cors());
var allowCrossDomain = function(req,res,next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();  
}
app.use(allowCrossDomain);


//
app.use(express.json());


app.post("/todo", async function(req,res){
    const createPayload = req.body; // get the json object
    const parsedPayload = createTodo.safeParse(createPayload); // validate input
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        });
        return;
    }
    // put it in mongodb 

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
    })
    res.setHeader("Content-Type","application/json");

    res.json({
        msg: "Todo created"
    })

});

app.get("/todos",async function(req,res){

    const todos = await todo.find({});
    res.json({
        todos
    })
    
});

app.put("/completed",async function(req,res){
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }

    await todo.update({
        _id: req.body.id
    },{
        completed: true
    })

    res.json({
        msg: "Todo marked as completed"
    });

});



app.listen(port, ()=> {
    console.log(`sever running on ${port}`)
});