"use strict";
;
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAge({ name: "Sneiden", age: 12 }, { name: "Something", age: 12 });
console.log(age);
