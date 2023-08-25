const express = require('express');
const routes = express.Router();
const {getContacts,
       getContact,
       createContacts,
       updateContacts,
       deleteContacts}= require('../controller/contactController');
const tokenHandler=require('../middleware/tokenValidateHandler');
// middleware 
routes.use(tokenHandler);
 // defining all routes for contacts 
routes.route("/").get(getContacts).post(createContacts);

routes.route("/:id").get(getContact).put(updateContacts).delete(deleteContacts);


// exporting 
module.exports=routes;

