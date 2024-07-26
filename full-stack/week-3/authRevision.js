const jwt = require("jsonwebtoken");

const value = {
    name: "harkirat",
    accountNumber:123123123
}

const token = jwt.sign(value, "secret");
console.log(token);


const verified_value = jwt.verify(token, "something else ");
console.log(verified_value);
