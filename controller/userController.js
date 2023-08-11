//importing the error handler module
const asyncHandler = require('express-async-handler');
// importing the model module
const user_model = require('../Model/userModel');

//@disc registerUsers 
//@routes POST /api/users/register
//@access public
const registerUsers = asyncHandler (async (req, res) => {
    //destructure registerUsers
    const {userName,email,password}= req.body;
    if (!userName || !email || !password) {
         res.status(404);
         throw new Error ("All Filed are required to register");
    }
    const user_Available = await user_model.findOne({email});
    if(user_Available) {
        res.status(400);
        throw new Error ("Email Address already Exists");
    }
    // the password is RAW so that we have to hash the password
    //so we have to install library hash npm install bcrypt

    const createUser = await user_model.create({
        userName,
        email,
        password
    })
    res.json(createUser)});

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
