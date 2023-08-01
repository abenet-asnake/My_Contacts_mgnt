const express = require('express');
const routes = express.Router();
 // defining all routes for contacts 
 routes.get("/api/contacts", (req, res) => {
    res.status(200).json({message:"Get all contacts"});
});


// exporting 
module.exports=routes;
