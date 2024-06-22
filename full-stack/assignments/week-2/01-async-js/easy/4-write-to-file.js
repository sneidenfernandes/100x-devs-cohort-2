// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.


fs = require("fs");

data = 'Some random text that I will output into a txt file';

fs.writeFile('output.txt',data,(err)=>{
    console.log("File Written Successfully.")
})