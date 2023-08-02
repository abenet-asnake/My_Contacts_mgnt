const express = require('express');
const routes = express.Router();
 // defining all routes for contacts 
 routes.get("/", (req, res) => {
    res.status(200).json({message:"Get all contacts"});
});

routes.get("/:id", (req, res) => {
res.status(200).json({message:`Get contact for ${req.params.id}`});
});

routes.post("/", (req, res) => {
    res.status(200).json({message:"Create contact"});
});

routes.put("/:id", (req, res) => {
    res.status(200).json({message:`Update contact for ${req.params.id}`});
});

routes.delete("/:id", (req, res) => {
    res.status(200).json({message:`Delete contact for ${req.params.id}`});
});
// exporting 
module.exports=routes;

