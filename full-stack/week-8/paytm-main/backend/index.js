const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const jwt = require("jsonwebtoken");
const mainRouter = require("./routes/index.js");


// order matters
app.use(cors());
app.use(bodyParser.json());
app.use("/api/v1", mainRouter);




app.listen(3000);

