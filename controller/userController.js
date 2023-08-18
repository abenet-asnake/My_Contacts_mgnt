//importing the error handler bcrypt package or library package
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken');
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
    const { email, password } = req.body;

    if (!email ||!password) {
      return res.status(400).send('Both email  and password are required');
    }
    //checking the user email or username
    //const user = users.find(u => u.username === usernameOrEmail || u.email === usernameOrEmail);
    const user = await user_model.findOne({email});
    
    if (!user ) {
      return res.status(401).send('Invalid email Address');
    }
    
   if(user && (await bcrypt.compare(password, user.password))){
    // user  Authentication is need when a user wants to login it gives json  web token
    const accessToken= jwt.sign(
        {
        user:{
            userName:user.userName,
            email:user.email,
            user_ID:user.user_ID,

        },
    } ,
    process.env.ACCESS_TOKE_SECRET_KEY,
    {expiresIn:"3m"}
    );
    res.json({Message: accessToken});
   } else{
    res.status(401);
    throw new Error("Invalid Email Address or Password");
   }

  
    // if ((userName || email) && password) {
    //     res.status(200).json({message: 'User login successful'});
    // }
    res.json({Message: 'User Successfully login'});
});  
//@disc userStatus
//@routes POST /api/users/status
//@access public
const userStatus = asyncHandler (async (req, res) => {
    res.json({Message: 'User Status'})});
    module.exports = {registerUsers,loginUsers,userStatus};
