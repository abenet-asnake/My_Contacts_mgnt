const express= require('express');
const { registerUsers, loginUsers, userStatus } = require('../controller/userController');
const tokenHandler= require('../middleware/tokenValidateHandler');
const router= express.Router();
// creating post API routes for registration 
router.post("/register", registerUsers);

// login users
router.post("/login", loginUsers);

// status of the user 
//router.post("/status", userStatus);
//login users 
router.get("/status", tokenHandler,userStatus);
module.exports = router;