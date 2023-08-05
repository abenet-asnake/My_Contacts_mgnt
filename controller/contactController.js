//@disc getContact get all contacts
//@routes GET /api/contacts
//@access public
const getContacts=(req, res) => {
    res.status(200).json({message:"Get all contacts"});
};

//@disc getContact get single contact by id 
//@routes GET /api/contacts
//@access public
const getContact = (req, res) => {
    res.status(200).json({message:`Get contact for ${req.params.id}`});
    };

//@disc getContact create a new contact
//@routes POST /api/contacts
//@access public
const createContacts =  (req, res) => {
    res.status(200).json({message:"Create contact"});
};

//@disc getContact Update a new contact
//@routes POST /api/contacts
//@access public
const updateContacts =  (req, res) => {
    res.status(200).json({message:`Update contact for ${req.params.id}`});
};

module.exports = {getContacts,
                  getContact,
                  createContacts,
                  updateContacts};