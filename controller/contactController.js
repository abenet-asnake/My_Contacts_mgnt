//importing the error handler module
const asyncHandler = require('express-async-handler');
// importing the model module
const contact_model = require('../Model/contactModel');
//@disc getContacts
//@routes GET /api/contacts
//@access private
const getContacts=asyncHandler(async (req, res) => {
    // get all contacts from the database
    const contacts = await contact_model.find();
    res.status(200).json(contacts);
});

//@disc getContact 
//@routes GET /api/contacts
//@access private
const getContact =asyncHandler(async (req, res) => {
    // get contact using by id 
    const find_contact_by_id = await contact_model.findById(req.params.id);
    if (!find_contact_by_id) {
        res.status(404);
        throw new Error ("Contact not found ");
    }
    res.status(200).json(find_contact_by_id);
    });

//@disc createContacts 
//@routes POST /api/contacts
//@access private
const createContacts =asyncHandler(async  (req, res) => {
    console.log("The create New Contact is=",req.body);
    //deconstruct the data from the request
    const {fullName,email,phone} = req.body;
    if (!fullName || !email || !phone){
        res.status(400);
        throw new Error(" all fields are required");
    }
    // if the all fields are required then we need to create a const that access the model of  the database
    const create_contacts= await contact_model.create({
        fullName,
        email,
        phone
    });
    res.status(201).json(create_contacts);
    
});

//@disc getContacts 
//@routes PUT /api/contacts:id
//@access private
const updateContacts = asyncHandler(async (req, res) => {
    // first get the contact by its id 
    const find_contact_by_id= await contact_model.findById(req.params.id);
    if (!find_contact_by_id) {
         res.status(404);
         throw new Error("Contact not found");
    }
    // then update the contact
    const update_contact = await contact_model.findByIdAndUpdate(req.params.id, req.body,  {new: true});
    res.status(200).json(update_contact);
});

//@disc deleteContacts  
//@routes DELETE /api/contacts:id
//@access private
const deleteContacts =asyncHandler(async (req, res) => {
    // to delete a contact from the database and fist find it by ID 
    // const find_contact_by_id= await contact_model.findById(req.params.id);
    // if (!find_contact_by_id) {
    //     res.status(404);
    //     throw new Error("Contact not found ");
    // }
    // we use this to delete await contact_model.remove(); for the above code 
    const delete_contact= await contact_model.findByIdAndDelete(req.params.id);
    res.status(200).json(delete_contact);
});

module.exports = {getContacts,
                  getContact,
                  createContacts,
                  updateContacts, 
                  deleteContacts};