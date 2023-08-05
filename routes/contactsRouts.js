const express = require('express');
const routes = express.Router();
const {getContacts,getContact}= require('../controller/contactController');
 // defining all routes for contacts 
 routes.get("/",getContacts);

routes.get("/:id", getContact);

routes.post("/",);

routes.put("/:id", (req, res) => {
    res.status(200).json({message:`Update contact for ${req.params.id}`});
});

routes.delete("/:id", (req, res) => {
    res.status(200).json({message:`Delete contact for ${req.params.id}`});
});
// exporting 
module.exports=routes;

