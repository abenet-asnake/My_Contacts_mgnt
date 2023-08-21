//importing the error handler bcrypt package or library package
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken');
// importing the model module
const user_model = require('../Model/userModel');
let accessToken;
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
    const {usernameOrEmail,password} = req.body;
    //const { email, password } = req.body;

    if (!usernameOrEmail ||!password) {
      return res.status(400).send('Both email  and password are required');
    }
    //checking the user email or username
   //const user = await user_model.find(u => u.userName === usernameOrEmail || u.email === usernameOrEmail);
    //const user = await user_model.findOne({email});
    let thisUser;
    // const credentials = usernameOrEmail.split('');
    // const at='@';
    const isEmail = usernameOrEmail.includes('@');
    if(isEmail ) {
        thisUser = await user_model.findOne({email: usernameOrEmail});
    }
    else {
        thisUser = await user_model.findOne({userName:usernameOrEmail});
    }
    
    
   if(thisUser && (await bcrypt.compare(password, thisUser.password))){
    // user  Authentication is need when a user wants to login it gives json  web token
     accessToken= jwt.sign(
        {
        thisUser:{
            userName:thisUser.userName,
            email:thisUser.email,
            id:thisUser.id,

        },
    } ,
    process.env.ACCESS_TOKE_SECRET_KEY,
    {expiresIn:"3m"}
    );
    res.json({accessToken});
   } 
   else{
    res.status(401);
    throw new Error("Invalid Email Address or Password");
   }

});  
//@disc userStatus
//@routes POST /api/users/status
//@access private
const userStatus = asyncHandler (async (req, res) => {
// if(!accessToken) {
//     res.status(401).json({message: "Access token is required"});
// }
// if(accessToken){
// const decodedAccessToken =jwt.verify(accessToken,process.env.ACCESS_TOKE_SECRET_KEY);
// res.thisUser = decodedAccessToken.thisUser;
// res.status(200).json({userName:user_model.userName});
// }
// else{
//     res.status(401);
//     throw new Error("Access token is invalid");
// }
//     //res.json({Message: 'User Status'});

res.json(req.thisUser);

});
    module.exports = {registerUsers,loginUsers,userStatus};
