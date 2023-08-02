// creating express 
const express = require('express');
// create dotenv config
const dotenv= require('dotenv').config(); 
// loading or require the routes folder 
const routes = require('./routes/contactsRouts');
//creating the express app
const app = express();

//creating a port number
const port = process.env.PORT || 4000;

//middle ware routes
app.use("/api/contacts",routes);

// creating the express app with the port number to listen on
app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});