//importing the error handler bcrypt package or library package
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
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
    const user_Name = await user_model.findOne({userName});
    const user_Email = await user_model.findOne({email});
    if(user_Name) {
        res.status(400);
        throw new Error ("UserName is already Exists");
    }
    else if(user_Email) {
        res.status(400);
        throw new Error ("Email Address already Exists");
    }
    else{
    // the password is RAW so that we have to hash the password
    //so we have to install library hash npm install bcrypt
    const passwordHash = await bcrypt.hash(password,13);
    console.log("The Hash Password is: " + passwordHash);

    const createUser = await user_model.create({
        userName,
        email,
        password: passwordHash,
    })
    if (createUser){
        res.status(201).json({_id: createUser.id, email: createUser.email});
    }
    else{
        res.status(404);
        throw new Error("User data is not valid");
    }
    res.json({Message: "User Successfully Registered"});
}});

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
