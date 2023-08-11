//importing the error handler module
const asyncHandler = require('express-async-handler');
// importing the model module
const contact_model = require('../Model/contactModel');
//@disc getContact get all contacts
//@routes GET /api/contacts
//@access public
const getContacts=asyncHandler(async (req, res) => {
    // get all contacts from the database
    const contacts = await contact_model.find();
    res.status(200).json(contacts);
});

//@disc getContact get single contact by id 
//@routes GET /api/contacts
//@access public
const getContact =asyncHandler(async (req, res) => {
    res.status(200).json({message:`Get contact for ${req.params.id}`});
    });

//@disc getContact create a new contact
//@routes POST /api/contacts
//@access public
const createContacts =asyncHandler(async  (req, res) => {
    console.log("The create New Contact is=",req.body);
    //deconstruct the data from the request
    const {fullName,email,phone} = req.body;
    if (!fullName || !email || !phone){
        res.status(400);
        throw new Error(" all fields are required");
    }
    
    res.status(201).json({message:"Create contact"});
    
});

//@disc getContact Update a new contact
//@routes PUT /api/contacts
//@access public
const updateContacts = asyncHandler(async (req, res) => {
    res.status(200).json({message:`Update contact for ${req.params.id}`});
});

//@disc getContact DELETE a contact BY ID 
//@routes DELETE /api/contacts
//@access public
const deleteContacts =asyncHandler(async (req, res) => {
    res.status(200).json({message:`Delete contact for ${req.params.id}`});
});

module.exports = {getContacts,
                  getContact,
                  createContacts,
                  updateContacts, 
                  deleteContacts};