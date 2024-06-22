// Load the Express module
const express = require('express');

// Create an instance of Express
const app = express();

// Define a port to listen to
const port = 3000;

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('I hope you can find this on your phone.Lets fucking go!');
});

// Start the server and listen on the defined port
app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${port}/`);
});