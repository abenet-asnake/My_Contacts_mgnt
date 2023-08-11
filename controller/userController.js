//importing the error handler module
const asyncHandler = require('express-async-handler');

//@disc registerUsers 
//@routes POST /api/users/register
//@access public
const registerUsers = asyncHandler (async (req, res) => {
    res.json({Message: 'User Successfully Registered'})});

//@disc loginUsers 
//@routes POST /api/users/login 
//@access public
const loginUsers = asyncHandler (async (req, res) => {
    res.json({Message: 'User Successfully login'})});

//@disc userStatus
//@routes POST /api/users/status
//@access public
const userStatus = asyncHandler (async (req, res) => {
    res.json({Message: 'User Status'})});
    module.exports = {registerUsers,loginUsers,userStatus};
