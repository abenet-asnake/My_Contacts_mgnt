const express = require('express');
const routes = express.Router();
const {getContacts,
       getContact,
       createContacts,
       updateContacts,
       deleteContacts}= require('../controller/contactController');
 // defining all routes for contacts 
 routes.get("/",getContacts);

routes.get("/:id", getContact);

routes.post("/",createContacts);

routes.put("/:id",updateContacts);

routes.delete("/:id",deleteContacts);
// exporting 
module.exports=routes;

