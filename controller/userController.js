//importing the error handler module
const asyncHandler = require('express-async-handler');

//@disc registerUsers 
//@routes POST /api/users
//@access public
const registerUsers = asyncHandler (async (req, res) => {
    res.json({Message: 'User Successfully Registered'})});

//@disc loginUsers 
//@routes POST /api/login 
//@access public
const loginUsers = asyncHandler (async (req, res) => {
    res.json({Message: 'User Successfully login'})});
    module.exports = {registerUsers,loginUsers};