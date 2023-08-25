// creating express 
const express = require('express');
// create dotenv config
const dotenv= require('dotenv').config(); 
// loading or require the routes folder 
const routes = require('./routes/contactsRouts');
const routesUser = require('./routes/userRouts');
// loading or require the middleware custom 
const errorHandler= require('./middleware/errorHandling');
const db_connect = require('./config/DBConfig');
// calling the database connection
db_connect();
//creating the express app
const app = express();
// applying a middleware to access the JSON from the client 
app.use(express.json());
//creating a port number
const port = process.env.PORT || 4000;
//middle ware routes
app.use("/api/contacts",routes);
app.use("/api/users",routesUser);
// we have to use the errorHandler 
app.use(errorHandler);
// creating the express app with the port number to listen on
app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});