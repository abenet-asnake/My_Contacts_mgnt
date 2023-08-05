//@disc getContact get all contacts
//@routes GET /api/contacts
//@access public
const getContacts=(req, res) => {
    res.status(200).json({message:"Get all contacts"});
};
module.exports = {getContacts};