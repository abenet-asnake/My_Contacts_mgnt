// creating express 
const express = require('express');

//creating the express app
const app = express();

//creating a port number
const port = 4000;

// creating the express app with the port number to listen on
app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});

