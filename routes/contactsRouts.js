const express = require('express');
const routes = express.Router();
const {getContacts,
       getContact,
       createContacts,
       updateContacts,
       deleteContacts}= require('../controller/contactController');
 // defining all routes for contacts 
routes.route("/").get(getContacts).post(createContacts);

routes.route("/:id").get(getContact).put(updateContacts).delete(deleteContacts);


// exporting 
module.exports=routes;

