"use strict";
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
const someUser = {
    firstName: "sneiden",
    lastName: "fernandes",
    email: "string",
    age: 18,
};
console.log(isLegal(someUser));
