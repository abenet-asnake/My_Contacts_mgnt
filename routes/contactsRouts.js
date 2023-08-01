const express = require('express');
const routes = express.Router();
 // defining all routes for contacts 
 routes.get("/api/contacts", (req, res) => {
    res.status(200).json({message:"Get all contacts"});
});

routes.get("/api/contacts/:id", (req, res) => {
res.status(200).json({message:`Get contact for ${req.params.id}`});
});

routes.post("/api/contacts", (req, res) => {
    res.status(200).json({message:"Create contact"});
});

routes.put("/api/contacts/:id", (req, res) => {
    res.status(200).json({message:`Update contact for ${req.params.id}`});
});

routes.delete("/api/contacts/:id", (req, res) => {
    res.status(200).json({message:`Delete contact for ${req.params.id}`});
});
// exporting 
module.exports=routes;
